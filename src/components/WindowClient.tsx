import Image from 'next/image'
import { useRouter } from 'next/router'
import { PrimaryButton, WindowDownloadButton } from './Buttons/Button'
import { IconList } from './DownloadBanner'

export const WindowClientBanner = () => {
  const list = [
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Available on all Windows versions',
    },
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Supports country, state, city, ISP, and zip code targeting',
    },
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Easy integration with third-party software such as Bit, VM, Ads, etc.',
    },
  ]

  return (
    <>
      <div className='grid grid-cols-2 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1'>
        <div className='self-center'>
          <p className='whitespace-pre-line' style={{ fontSize: '24px' }}>
            Your PC Install is ready!
          </p>
          <p className='whitespace-pre-line xs:text-5xl md:text-6xl'>Windows client</p>
          <IconList list={list} />
          <div style={{ marginTop: '43px' }}>
            <WindowDownloadButton version='Version 1.45' />
          </div>
        </div>
        <div>
          <Image
            src={'/assets/images/WindowsMarker.svg'}
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

export const UserCaseBanner = () => {
  const { push } = useRouter()
  const list = [
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'IP + port forward proxy',
    },
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Easy integration with third-party software',
    },
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Country, state, city, and ZIP targeting with no extra cost',
    },
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: '50 million fresh residential IPs',
    },
  ]

  return (
    <>
      <div className='grid grid-cols-2 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1'>
        <div className='self-center'>
          <p className='whitespace-pre-line' style={{ fontSize: '24px' }}>
            Where you can use it!
          </p>
          <p className='whitespace-pre-line xs:text-5xl md:text-6xl'>S5 Proxy Use Cases</p>
          <IconList list={list} />
          <div style={{ marginTop: '43px' }}>
            <div className='flex gap-8'>
              <PrimaryButton text='DOWNLOAD' onClick={() => push('/download')} />
              <PrimaryButton ghost text='LOCATIONS' onClick={() => push('/locations')} />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={'/assets/images/MapShield.svg'}
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
