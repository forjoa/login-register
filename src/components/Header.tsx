'use client'
import Link from 'next/link'
import Image from 'next/image'
import homeIcon from '@/assets/home.svg'
import loginIcon from '@/assets/login.svg'
import signUpIcon from '@/assets/signUp.svg'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <header className='mx-auto my-10 w-1/2'>
      <div className='options-container flex justify-between'>
        <Link
          href='/'
          className={`flex gap-1 ${router.pathname === '/' && 'text-blue-500'}`}
        >
          {' '}
          <Image src={homeIcon} alt='Home icon' /> Home
        </Link>
        <Link
          href='/register'
          className={`flex gap-1 ${
            router.pathname === '/register' && 'text-blue-500'
          }`}
        >
          <Image src={signUpIcon} alt='Register icon' />
          Register
        </Link>
        <Link
          href='/login'
          className={`flex gap-1 ${
            router.pathname === '/login' && 'text-blue-500'
          }`}
        >
          <Image src={loginIcon} alt='Login icon' />
          Login
        </Link>
      </div>
    </header>
  )
}

export default Header
