import { Button } from '@/components/Buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Routes = [
  { name: 'home', path: '/' },
  { name: 'locations', path: '/locations' },
  { name: 'download', path: '/download' },
  { name: 'use cases', path: '/use_cases' },
  { name: 'pricing', path: '/pricing' },
]

export const Header = () => {
  const { push } = useRouter()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const element = document.getElementsByTagName('body')[0]
    if (open) {
      element?.setAttribute('style', 'overflow:hidden')
    } else {
      element?.setAttribute('style', 'overflow:shown')
    }
  }, [open])
  return (
    <>
      <div className='xs:hidden md:block'>
        <div
          className='flex justify-between align-center py-4'
          style={{ maxWidth: '1350px', width: '100%', margin: '0 auto', visibility: 'visible' }}
        >
          <Image alt='logo' src='/assets/images/Logo.svg' width={172} height={36} />
          <div className='flex-row  flex justify-between gap-x-16 align-center'>
            {Routes.map((R, index) => (
              <a
                key={index}
                className='self-center text-white hover:text-blue-200 cursor-pointer'
                onClick={() => push(R.path)}
              >
                {R.name.toUpperCase()}
              </a>
            ))}
            <div className='flex-row flex justify-between gap-x-4'>
              <Button ghost={true} text='LOGIN' onClick={() => push('login')} />
              <Button text='SIGNUP' onClick={() => push('register')} />
            </div>
          </div>
        </div>
      </div>

      <div
        className='flex flex-wrap justify-between align-center  xs:visible md:hidden '
        style={{ width: '100%', margin: '0 auto' }}
      >
        <div className='flex flex-wrap justify-between w-full px-5 py-5'>
          <Image alt='logo' src='/assets/images/Logo.svg' width={172} height={36} />

          <div className='space-y-2' onClick={() => setOpen(true)}>
            <div className='w-8 h-0.5 bg-blue-600'></div>
            <div className='w-8 h-0.5 bg-blue-600'></div>
            <div className='w-8 h-0.5 bg-blue-600'></div>
          </div>
        </div>

        <div
          className={`fixed w-full h-full bg-black ${open ? 'visible' : 'hidden'}`}
          style={{ zIndex: 10 }}
        >
          <div className='flex justify-end px-5 py-5' onClick={() => setOpen(false)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-10 h-10 '
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>

          <div className='flex flex-col gap-y-6 items-center justify-center my-5'>
            {Routes.map((R, index) => (
              <a
                key={index}
                className='self-center text-white text-xl hover:text-blue-200 cursor-pointer'
                onClick={() => push(R.path)}
              >
                {R.name.toUpperCase()}
              </a>
            ))}

            <a
              className='self-center text-white text-xl font-bold mt-10 hover:text-blue-200 cursor-pointer'
              onClick={() => push('login')}
            >
              LOGIN
            </a>
            <a
              className='self-center text-white text-xl font-bold hover:text-blue-200 cursor-pointer'
              onClick={() => push('login')}
            >
              SIGNUP
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
