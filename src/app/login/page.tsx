import { submitLogin } from '@/lib/handlers'
import PasswordInput from '@/components/PasswordInput'

const Login = () => {
  return (
    <main className='mx-auto w-1/2'>
      <h1>Login</h1>
      <form action={submitLogin}>
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
        <PasswordInput />

        <br />

        <input
          type='submit'
          value='Login'
          className='bg-blue-500 text-white py-2 px-4 rounded-md'
        />
      </form>
    </main>
  )
}

export default Login
