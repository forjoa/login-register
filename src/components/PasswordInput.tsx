'use client'
import { useState } from 'react'
import lockI from '@/assets/lock.svg'
import unlock from '@/assets/unlock.svg'
import Image from 'next/image'

const PasswordInput = () => {
    const [lock, setLock] = useState<boolean>(true)

    return (
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
    )
}

export default PasswordInput