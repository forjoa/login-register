'use client'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
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

  console.log(user)

  // create session
  const session = await encrypt({ user })

  // save session in localStorage
  localStorage.setItem('session', session)
}

export async function logout() {
  // destroy the session
  localStorage.removeItem('session')
}

export async function getSession() {
  const session = localStorage.getItem('session')
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
  const session = localStorage.getItem('session')
  if (!session) return

  // refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires, // Note: this line might not be needed anymore
  })
  return res
}
