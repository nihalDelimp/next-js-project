import Image from 'next/image'
import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children: ReactNode
  backgroud?: boolean
}

export const Body = ({ children, backgroud }: Props) => {
  return (
    <div>
      <Header />
      {backgroud && (
        <div style={{ position: 'absolute', width: '100%', pointerEvents: 'none' }}>
          <Image
            src={'/assets/images/BackPricing.svg'}
            width={'100'}
            height={'100'}
            alt=''
            className='h-full w-full'
          />
        </div>
      )}
      <div
        style={{ maxWidth: '1350px', width: '100%', margin: '0 auto' }}
        className='relative xs:px-10 lg:px-0'
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
