'use client'
import { useState } from 'react'
import lockI from '@/assets/lock.svg'
import unlock from '@/assets/unlock.svg'
import Image from 'next/image'

const Register = () => {
  const [lock, setLock] = useState<boolean>(true)

  return (
    <main className='mx-auto w-1/2'>
      <h1>Register</h1>
      <form>
        <label htmlFor='username'>Username</label>
        <br />
        <input type='text' name='username' id='username' spellCheck='false' />

        <br />
        <br />

        <label htmlFor='email'>Email</label>
        <br />
        <input type='email' name='email' id='email' autoComplete='email' />

        <br />
        <br />

        <label htmlFor='password'>Password</label>
        <br />
        <input
          type={lock ? 'password' : 'text'}
          name='password'
          id='password'
        />
        <Image src={lock ? lockI : unlock} alt='Locked or unlocked' onClick={() => setLock(!lock)}></Image>

        <br />
        <br />

        <input type='submit' value='Register' />
      </form>
    </main>
  )
}

export default Register
