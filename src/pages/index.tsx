import { PrimaryButton } from '@/components/Buttons/Button'
import { Card } from '@/components/Cards/Card'
import { MainSection, Section } from '@/components/Section'
import { TopProxy } from '@/components/TopProxy'
import { Body } from '@/layouts/Body'
import { useRouter } from 'next/router'
import prisma from '.../lib/prisma';

const Index = () => {
  const { push } = useRouter()
  return (
    <>
      <Body>
        <div style={{ marginTop: '136px' }}>
          <MainSection
            desc={`The Proxy S5 is 1:1 compatible with 911 S5 functions and surpasses the 911.re S5's Residential Proxy Service.`}
            heading='The Proxy - Perfect 911s5 Alternatives'
            subHeading='50M+ Residential Proxy'
            image='/assets/images/BrainSkill.svg'
          >
            <div className='mt-10 flex gap-8'>
              <PrimaryButton text='DOWNLOAD' onClick={() => push('/download')} />
              <PrimaryButton ghost text='LOCATIONS' onClick={() => push('/locations')} />
            </div>
          </MainSection>
        </div>
        <div
          className='grid grid-cols-4 gap-y-10 mt-24 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:place-items-stretch xs:place-items-center'
          style={{ marginTop: '128px' }}
        >
          <Card
            icon='/assets/images/Profile.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='Anynymous Access'
          />
          <Card
            icon='/assets/images/DatabaseUsage.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='No Usage Logs'
          />
          <Card
            icon='/assets/images/Promise.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='No Limits'
          />
          <Card
            icon='/assets/images/Cashback.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='100% White-Listed'
          />
        </div>

        <div style={{ marginTop: '187px' }}>
          <Section
            subHeading='Choose Proxy Proxy'
            heading='Looking for a 911 S5 alternative?'
            desc='Unlike most of the vendors we know today, the 911 S5 is a service in the form of Windows software that is great for newbies and veterans alike, which seems like a perfect vendor, but unfortunately, as of July On the 28th, the 911 S5 was closed. This means that all its services have been terminated.'
            desc2={`Of course, if you're relying on proxies, you're probably looking for an alternative, and you're in luck. Pia S5 Proxy acts as a residential SOCKS5 client with 50M+ residential IP addresses and is constantly working to filter out the underperforming ones. Proxies come from more than 180 countries, and the coverage is very wide.`}
            image={'/assets/images/Shield.svg'}
          />
        </div>
        <div style={{ marginTop: '210px' }}>
          <Section
            subHeading='Residential Proxy Network'
            heading='Residential Proxy Network'
            desc='Our residential proxy network consists of real IP addresses from real users, making sure you never get detected or blocked. We created our own network of residential proxies, power your projects with sticky Residential Proxies from a pool of 50M+ IPs. With a worldwide coverage of Residential IP addresses, you can easily overcome geo-location blocks.'
            desc2={`Of course, if you're relying on proxies, you're probably looking for an alternative, and you're in luck. Pia S5 Proxy acts as a residential SOCKS5 client with 50M+ residential IP addresses and is constantly working to filter out the underperforming ones. Proxies come from more than 180 countries, and the coverage is very wide.`}
            image={'/assets/images/BrainSkill.svg'}
            reverse={true}
          />
        </div>

        <div style={{ marginTop: '150px' }}>
          <TopProxy />
        </div>
      </Body>
    </>
  )
}

export default Index
