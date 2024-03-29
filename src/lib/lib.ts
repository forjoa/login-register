import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { supabase } from './supabase'

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 week')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(formData: FormData) {
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { data } = await supabase.from('users').select().eq('email', user.email)

  if (data?.length !== 1) {
    return { message: 'Email is not registered' }
  }

  if (!(await bcrypt.compare(user.password as string, data[0].password))) {
    return { message: 'Wrong password' }
  }

  // create session
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt(data[0])  

  // save session in a cookie
  cookies().set('session', session, { expires, httpOnly: true })
}

export async function logout() {
  // destroy the session
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function hashPasswords(password: string): Promise<string> {
  return await bcrypt.hash(password, 10)
}

export async function register(formData: FormData) {
  const user = {
    fullname: formData.get('name'),
    username: formData.get('username'),
    email: formData.get('email'),
    password: await hashPasswords(formData.get('password') as string),
  }

  const { error } = await supabase.from('users').insert(user)
}
