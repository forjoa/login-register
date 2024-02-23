import { submitRegister } from '@/lib/handlers'
import PasswordInput from '@/components/PasswordInput'

const Register = () => {

  return (
    <main className='mx-auto w-1/2'>
      <h1>Register</h1>
      <form action={submitRegister}>
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
        <PasswordInput/>

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
