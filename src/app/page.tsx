import { getSession } from "@/lib/lib"

export default async function Home() {
  const userData = await getSession()
  return (
    <main className='mx-auto w-1/2'>
      <h1>Welcome</h1>
      <p className='text-neutral-500'>
        This is how I&apos;m learning how to login and register in Next.js with
        JWT Authentication.
      </p>
      <pre>{JSON.stringify(userData)}</pre>
    </main>
  )
}
