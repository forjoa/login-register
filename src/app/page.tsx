import Link from 'next/link'

export default function Home() {
  return (
    <main className='mx-auto my-10 w-1/2'>
      <h1>Select an option:</h1>
      <div className='options-container flex gap-5'>
        <Link
          href='/login'
          className='bg-blue-500 text-white py-2 px-4 rounded-md'
        >
          Login
        </Link>
        <Link
          href='/register'
          className='bg-slate-300 text-black py-2 px-4 rounded-md'
        >
          Register
        </Link>
      </div>
    </main>
  )
}
