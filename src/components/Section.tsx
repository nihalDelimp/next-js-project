import { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  subHeading: string
  heading: string
  desc: string
  children?: ReactNode
  image: string
  desc2?: string
  reverse?: boolean
}

export const MainSection = ({ children, desc, heading, image, subHeading }: Props) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1'>
        <div className='self-center'>
          <p className='text-2xl whitespace-pre-line'>{subHeading}</p>
          <p className='text-6xl whitespace-pre-line' style={{ marginTop: '11px' }}>
            {heading}
          </p>
          <p
            className='mt-8 whitespace-pre-line text-2xl'
            style={{ marginTop: '34px', fontSize: '16px' }}
          >
            {desc}
          </p>
          <div style={{ marginTop: '32px' }}>{children}</div>
        </div>
        <div>
          <Image
            src={image}
            style={{ width: '100%', height: '100%' }}
            height={100}
            width={100}
            alt='Brain Skill'
          />
        </div>
      </div>
    </>
  )
}

export const Section = ({
  children,
  desc,
  heading,
  image,
  subHeading,
  desc2,
  reverse = false,
}: Props) => {
  return (
    <>
      <div
        className={`grid grid-cols-2 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 `}
      >
        <div className={` ${reverse && 'order-last'}`}>
          <p className='text-xl text-blue-200 whitespace-pre-line' style={{ fontSize: '20px' }}>
            {subHeading}
          </p>
          <p className='text-3xl whitespace-pre-line' style={{ fontSize: '35px' }}>
            {heading}
          </p>
          <p className='mt-8 whitespace-pre-line' style={{ fontSize: '16px' }}>
            {desc}
          </p>
          <p className='mt-8 whitespace-pre-line' style={{ fontSize: '16px' }}>
            {desc2}
          </p>

          <div>{children}</div>
        </div>
        <div className={` flex ${reverse ? 'justify-start' : 'justify-end'} `}>
          <Image
            src={image}
            style={{ width: '450px', height: '380px' }}
            height={100}
            width={100}
            alt='Brain Skill'
          />
        </div>
      </div>
    </>
  )
}
