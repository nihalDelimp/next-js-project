import { PrimaryButton } from '@/components/Buttons/Button'
import { TextField } from '@/components/TextFiled'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { push } = useRouter()
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('');
 
  const handleUsernameChange=(e?:Event)=>{
    setEmail((e?.target as HTMLInputElement)?.value)
  }

  const handlePasswordChange=(e?:Event)=>{
    setPassword((e?.target as HTMLInputElement)?.value)
  }
  

const handleSubmit=()=>{
  if(email == ""||password == ""){
    toast("Invalid Details!!")
  }else{
    axios.post("/api/login", {
      email,
      password
    })
    .then((response) => {
      toast(response.data.message)
      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        push('/')
      }, 2000);
    }).catch(err=>{
      toast(err.response.data);
    });
  }
}

useEffect(()=>{
 var tokenExists  = localStorage.getItem("token")
 if(tokenExists){
  push('/')
 }else{
  push('/login')
 }
},[])

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
            <TextField label='Enter Your email address:'value={email} onChange={handleUsernameChange} />
            <TextField label='Enter Your Password:' value={password} onChange={handlePasswordChange} />
          </div>

          <div className='mt-7 flex items-center gap-x-2'>
            <PrimaryButton text='Continue' onClick={handleSubmit} />
            <div className='text-sm'>
              New Here? <a onClick={() => push('/register')}>Create an Account</a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Login
