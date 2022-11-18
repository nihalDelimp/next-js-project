import { PrimaryButton } from '@/components/Buttons/Button'
import { TextField } from '@/components/TextFiled'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'



const Login = () => {
  const { push } = useRouter()
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')


  const  handleUsernameChange=(e?:Event)=>{
    console.log(username)
    setUsername((e?.target as HTMLInputElement)?.value)
  }
  const  handlePasswordChange=(e?:Event)=>{
    console.log(password)

    setPassword((e?.target as HTMLInputElement)?.value)
  }
  

const handleSubmit=()=>{
  console.log(username,password)
  alert("yess")
}

  return (
    <>
      <div style={{ position: 'absolute', width: '100%' }}>
        <Image
          src={'/assets/images/BackPricing.svg'}
          width={'100'}
          height={'100'}
          alt=''
          className='h-full w-full'
        />
      </div>

      <div className='mt-20 relative'>
        <div className='flex flex-col items-center justify-center my-10'>
          <Image alt='logo' src='/assets/images/Logo.svg' width={172} height={36} />
          <div className='text-6xl text-center'>Account Login</div>
          <div className='text-xl'>Welcome back to the Proxy!</div>
        </div>

        <div
          style={{ backgroundColor: '#252525' }}
          className='w-max xs:px-10 md:px-32 py-20 border-t-4 rounded-lg border-blue-200 mx-auto'
        >
          <div className='flex flex-col flex-wrap gap-y-5'>
            <TextField label='Enter Your email address:'value={username} onChange={() => {handleUsernameChange}} />
            <TextField label='Enter Your Password:' value={password} onChange={() => {handlePasswordChange}} />
          </div>

          <div className='mt-7 flex items-center gap-x-2'>
            <PrimaryButton text='Continue' onClick={handleSubmit} />
            <div className='text-sm'>
              New Here? <a onClick={() => push('/register')}>Create an Account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
