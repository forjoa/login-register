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
        <label htmlFor='name'>Full name</label>
        <br />
        <input
          type='text'
          name='name'
          id='name'
          autoComplete='name'
          spellCheck='false'
          className='border-2 rounded-md p-2 outline-none'
        />

        <br />
        <br />

        <label htmlFor='username'>Username</label>
        <br />
        <input
          type='text'
          name='username'
          id='username'
          autoComplete='username'
          spellCheck='false'
          className='border-2 rounded-md p-2 outline-none'
        />

        <br />
        <br />

        <label htmlFor='email'>Email</label>
        <br />
        <input
          type='email'
          name='email'
          id='email'
          autoComplete='email'
          className='border-2 rounded-md p-2 outline-none'
        />

        <br />
        <br />

        <label htmlFor='password'>Password</label>
        <br />
        <div className='pwd container flex'>
          <input
            type={lock ? 'password' : 'text'}
            name='password'
            id='password'
            autoComplete='current-password'
            className='border-2 rounded-md p-2 outline-none'
          />
          <Image
            src={lock ? lockI : unlock}
            alt='Locked or unlocked'
            className='w-auto h-auto'
            onClick={() => setLock(!lock)}
          ></Image>
        </div>

        <br />

        <input
          type='submit'
          value='Register'
          className='bg-blue-500 text-white py-2 px-4 rounded-md'
        />
      </form>
    </main>
  )
}

export default Register
