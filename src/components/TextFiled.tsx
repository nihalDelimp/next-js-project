import {useState} from 'react'




type Props = {
  label: string
  placeholder?: string
  onChange: (e?: Event) => void
  name?: string
  value?:  any
  
}

export const TextField = ({ label, onChange, placeholder, name, value }: Props) => {
  const [inputs, setInputs] = useState({})
  const handleChange = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(inputs)
  }
  return (
    <div style={{width:'100%'}}>
      <div className='text-sm my-2'>{label}</div> 
      <input
        className='border-blue-200 border-2 rounded focus:ring-blue-200 focus:border-blue-200 focus:outline-none px-2'
        style={{ height: '45px', maxWidth: '280px', width: '100%', backgroundColor: '#0D0D0D' }}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={name}
       

      />
    </div>
  )
}
