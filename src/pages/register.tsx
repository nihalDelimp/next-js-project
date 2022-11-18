import { PrimaryButton } from '@/components/Buttons/Button'
import { TextField } from '@/components/TextFiled'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
  const { push } = useRouter()
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [cnfRegPassword, setCnfRegPassword] = useState('')
  



  const  handleChange=(e?:Event)=>{
    console.log( (e?.target as HTMLInputElement)?.value)
    setRegisterUsername((e?.target as HTMLInputElement)?.value)
    
  }

  const  handleEmailChange=(e?:Event)=>{
    setRegisterEmail((e?.target as HTMLInputElement)?.value)
  }
  
  const  handlePasswordChange=(e?:Event)=>{
    setRegisterPassword((e?.target as HTMLInputElement)?.value)  
  }

  const  handleCnfpasswordChange=(e?:Event)=>{
    setCnfRegPassword((e?.target as HTMLInputElement)?.value)
  }


  const handleSubmit=()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(registerUsername =="" || registerEmail=="" || registerPassword==""){
      toast("Invalid Form Details!!")
      return;
    }
    else if(!registerEmail.match(validRegex)){
      toast("Invalid Email!!")
      return;
    }
    else if(registerPassword!=cnfRegPassword){
      toast("Password not matched!!")
      return;
    }
    
    else{
    axios.post("/api/api", {
      email: registerEmail,
      password: registerPassword,
      username:registerUsername
    })
    .then((response) => {
      toast(response.data);
      setTimeout(() => {
        push('/login')
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
      push('/register')
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
          <div className='text-6xl text-center'>Account Register</div>
          <div className='text-xl'>Welcome to the Proxy!</div>
        </div>

        <div
          style={{ backgroundColor: '#252525' }}
          className='w-max xs:px-10 md:px-32 py-20 border-t-4 rounded-lg border-blue-200 mx-auto'
        ><form onSubmit={handleSubmit}>
          <div className='flex flex-col flex-wrap gap-y-5'>
          <TextField value={registerUsername}  label='Enter Your username here:'  onChange = {handleChange} />
          <TextField value={registerEmail} label='Enter Your email address:' onChange = {handleEmailChange} />
          <TextField value={registerPassword} label='Enter Your Password:' onChange ={handlePasswordChange} />
          <TextField value={cnfRegPassword} label='Enter Your Confirm Password:' onChange ={handleCnfpasswordChange}/>
          </div>

          <div className='mt-7 flex items-center gap-x-2'>
            <PrimaryButton text='Register' onClick={() => {handleSubmit()}} /> 
            <div className='text-sm'>
              Already Registered? <a onClick={() => push('/login')}>Login</a>
            </div>
          </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
