import { PrimaryButton } from '@/components/Buttons/Button'
import { Section } from '@/components/Section'
import { WindowClientBanner } from '@/components/WindowClient'
import { Body } from '@/layouts/Body'
import { useRouter } from 'next/router'

const Download = () => {
  const { push } = useRouter()
  return (
    <>
      <Body>
        <div style={{ marginTop: '174px' }}>
          <WindowClientBanner />
        </div>

        <div className='flex flex-col items-center' style={{ marginTop: '266px' }}>
          <div className='text-center' style={{ fontSize: '45px', lineHeight: '63.19px' }}>
            Our S5 Proxy has a very large <br /> residential proxy pool
          </div>
          <div className='text-center' style={{ fontSize: '16px', marginTop: '20px' }}>
            Proxies from up to 180 countries around the world, over 50 million residential IPs
          </div>
          <div className='mx-auto' style={{ marginTop: '30px' }}>
            <PrimaryButton
              text='View Locations'
              onClick={() => {
                push('locations')
              }}
              showArrow
            />
          </div>
        </div>

        <div style={{marginTop:'160px'}}>
          <Section
            image='/assets/images/DownloadV2.svg'
            subHeading='Choose Proxy Proxy'
            heading='Over 50 million residential IPs'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            desc2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..'
          />
        </div>

        <div className='flex flex-col items-center' style={{marginTop:'100px'}}>
          <div className='text-center' style={{ fontSize: '45px', lineHeight: '63.19px' }}>
            Choose the right plan that fits <br /> your business.
          </div>
          <div className='text-center' style={{ fontSize: '16px', marginTop: '20px' }}>
            View our Pricing Packages adjusted to your budget and use!
          </div>
          <div className='mx-auto' style={{ marginTop: '30px' }}>
            <PrimaryButton
              text='View Pricing'
              onClick={() => {
                push('pricing')
              }}
              showArrow
            />
          </div>
        </div>
      </Body>
    </>
  )
}

export default Download
