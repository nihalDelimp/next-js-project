import { PrimaryButton } from '@/components/Buttons/Button'
import { BatchCard, StepCard } from '@/components/Cards/Card'
import { UserCaseBanner } from '@/components/WindowClient'
import { Body } from '@/layouts/Body'
import { useRouter } from 'next/router'

const UseCases = () => {
  const usecases1 = [
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
    {
      icon: '/assets/images/Google.svg',
      title: 'Proxy Inergration with Chrome',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 40,
      width: 145,
    },
  ]

  const usecases2 = [
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
    {
      icon: '/assets/images/How.svg',
      title: 'Ad Verification',
      desc: 'Read this guide to learn how to integrate Chrome with the Pia S5 Residential Proxies.',
      height: 102,
      width: 196,
    },
  ]

  const { push } = useRouter()
  return (
    <Body>
      <div style={{ marginTop: '184px' }}>
        <UserCaseBanner />
      </div>
      <div style={{ marginTop: '195px' }}>
        <div className='text-center' style={{ fontSize: '45px' }}>
          Three Steps to Start Now
        </div>
        <div className='flex md:justify-between flex-wrap gap-x-10 xs:justify-center gap-y-10' style={{ marginTop: '87px' }}>
          <StepCard
            icon='/assets/images/Now1.svg'
            title='Download and Register'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          />
          <StepCard
            icon='/assets/images/Now2.svg'
            title='Download and Register'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          />
          <StepCard
            icon='/assets/images/Now3.svg'
            title='Download and Register'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          />
        </div>
        <div className='flex justify-center' style={{ marginTop: '70px' }}>
          <PrimaryButton text='DOWNLOAD NOW' onClick={() => push('/download')} />
        </div>
      </div>
      <div style={{ marginTop: '120px' }} className='text-center'>
        <div style={{ fontSize: '45px' }}>
          S5 Works With All Of Your <br></br> Favorite Tools
        </div>
        <div style={{ fontSize: '16px', marginTop: '34px' }}>
          S5 proxies are easy to integrate with the most popular third-party integration software.
          <br></br>
          Explore these step-by-step guides and set up your proxies smoothly.
        </div>

        <div
          className='grid grid-cols-4 gap-y-10 gap-x-20 place-items-center place-content-between lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1'
          style={{ marginTop: '92px' }}
        >
          {usecases1.map((U) => (
            <BatchCard
              icon={U.icon}
              title={U.title}
              desc={U.desc}
              height={U.height}
              width={U.width}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '120px' }} className='text-center'>
        <div style={{ fontSize: '45px' }}>
          How customers use the Our <br /> S5 proxy
        </div>
        <div style={{ fontSize: '16px', marginTop: '34px' }}>
          Pia S5 proxies are easy to integrate with the most popular third-party integration
          software.
          <br /> Explore these step-by-step guides and set up your proxies smoothly.
        </div>

        <div
          className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-y-10 gap-x-28 place-items-center place-content-between '
          style={{ marginTop: '92px' }}
        >
          {usecases2.map((U) => (
            <BatchCard
              icon={U.icon}
              title={U.title}
              desc={U.desc}
              height={U.height}
              width={U.width}
              position={'items-end'}
            />
          ))}
        </div>
      </div>
    </Body>
  )
}

export default UseCases
