import { PrimaryButton } from '@/components/Buttons/Button'
import { GroupButton } from '@/components/Buttons/GroupButton'
import { PricingCard } from '@/components/Cards/PricingCard'
import { IconList } from '@/components/DownloadBanner'
import { DropDown } from '@/components/DropDown'
import { TextField } from '@/components/TextFiled'
import { Body } from '@/layouts/Body'
import Image from 'next/image'
import { useState } from 'react'

type PricingItem = {
  IPS: number
  Price: number
  Save?: { color: string; per: number }
}

type PricingList = {
  [key: string]: PricingItem[]
}

const Pricing = () => {
  const [selected, setSelected] = useState('1')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const plans = [
    {
      key: '1',
      text: 'Popular Plan',
      icon: '/assets/images/Fire.svg',
    },
    {
      key: '2',
      text: 'Popular Plan',
      icon: '/assets/images/Fire.svg',
    },
    {
      key: '3',
      text: 'Static Plan',
    },
    {
      key: '4',
      text: 'Unlimited Plan',
    },
    {
      key: '5',
      text: 'Enterprise Plan',
    },
  ]

  const pricingCards: PricingList = {
    '1': [
      {
        IPS: 150,
        Price: 0.58,
      },
      {
        IPS: 150,
        Price: 0.58,
      },
      {
        IPS: 150,
        Price: 0.58,
      },
      {
        IPS: 150,
        Price: 0.58,
        Save: { color: '#4AD918', per: 36 },
      },
      {
        IPS: 150,
        Price: 0.58,

        Save: { color: '#FFDA44', per: 80 },
      },
    ],
    '2': [
      {
        IPS: 200,
        Price: 0.58,
      },
      {
        IPS: 200,
        Price: 0.58,
      },
      {
        IPS: 200,
        Price: 0.58,
      },
      {
        IPS: 200,
        Price: 0.58,

        Save: { color: '#4AD918', per: 36 },
      },
      {
        IPS: 200,
        Price: 0.58,

        Save: { color: '#FFDA44', per: 80 },
      },
    ],
    '3': [
      {
        IPS: 300,
        Price: 0.58,
      },
      {
        IPS: 200,
        Price: 0.58,
      },
      {
        IPS: 300,
        Price: 0.58,
      },
      {
        IPS: 300,
        Price: 0.58,

        Save: { color: '#4AD918', per: 36 },
      },
      {
        IPS: 300,
        Price: 0.58,

        Save: { color: '#FFDA44', per: 80 },
      },
    ],
    '4': [
      {
        IPS: 400,
        Price: 0.58,
      },
      {
        IPS: 400,
        Price: 0.58,
      },
      {
        IPS: 400,
        Price: 0.58,
      },
      {
        IPS: 400,
        Price: 0.58,

        Save: { color: '#4AD918', per: 36 },
      },
      {
        IPS: 500,
        Price: 0.58,

        Save: { color: '#FFDA44', per: 80 },
      },
    ],
    '5': [
      {
        IPS: 150,
        Price: 0.58,
      },
      {
        IPS: 150,
        Price: 0.58,
      },
      {
        IPS: 150,
        Price: 0.58,
      },
      {
        IPS: 150,
        Price: 0.58,

        Save: { color: '#4AD918', per: 36 },
      },
      {
        IPS: 150,
        Price: 0.58,

        Save: { color: '#FFDA44', per: 80 },
      },
    ],
  }

  const GetSelectedPkg = () => {
    if (selected in pricingCards) {
      const d = pricingCards[selected]?.at(selectedIndex)
      if (d) return d
    }

    return { IPS: 0, Price: 0 }
  }

  return (
    <Body backgroud>
      <div className='flex flex-col items-center my-20'>
        <div className='text-center' style={{ fontSize: '45px' }}>
          Choose the right plan that fits <br /> your
          <span className='text-blue-200'> business.</span>
        </div>
        <div className='text-center' style={{ fontSize: '16px', marginTop: '35px' }}>
          Choose the plan which fits your budget!
        </div>
      </div>

      <div className='flex justify-center'>
        <GroupButton items={plans} selected={selected} setSelected={setSelected} />
      </div>

      <div className='grid grid-cols-5 gap-y-5 gap-x-10 mt-20 grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 xs:place-items-center md:place-items-stretch xs:grid-cols-1 '>
        {pricingCards[selected]?.map((c, index) => {
          return (
            <PricingCard
              IPs={c.IPS}
              Price={c.Price}
              Save={c.Save}
              Selected={index === selectedIndex}
              onClick={() => {
                setSelectedIndex(index)
              }}
            />
          )
        })}
      </div>

      <div className='grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 mt-20'>
        <div className='xs:hidden md:block'>
          <div className='grid grid-cols-2 grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-x-20'>
            <div className='flex flex-col items-start xs:items-center md:items-start '>
              <IconList
                list={[
                  { icon: '/assets/images/Globe.svg', text: 'Only US resourse' },
                  { icon: '/assets/images/ShieldFront.svg', text: 'SOCKSS' },
                  { icon: '/assets/images/Bolt.svg', text: '99.9% Success rate' },
                ]}
              />
            </div>

            <div className='flex flex-col items-start xs:items-center md:items-start xs:mt-10 md:mt-0'>
              <IconList
                list={[
                  { icon: '/assets/images/Globe.svg', text: 'Only US resourse' },
                  { icon: '/assets/images/ShieldFront.svg', text: 'SOCKSS' },
                  { icon: '/assets/images/Bolt.svg', text: '99.9% Success rate' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end xs:items-center md:items-end  gap-y-5 xs:mt-0 md:mt-0'>
          <div style={{ fontSize: '16px' }}>Get a coupon</div>
          <div style={{ fontSize: '16px' }}>
            You need to pay:{' '}
            <span style={{ fontSize: '20px' }} className='font-bold'>
              $ {(GetSelectedPkg().IPS * GetSelectedPkg().Price).toFixed(2)}
            </span>
          </div>
          <div className='w-max'>
            <div style={{ width: '220px', height: '51px' }}>
              <PrimaryButton text='Buy Now' full />
            </div>

            <div className='flex gap-8 mt-5'>
              <div className='md:block'>
                <div className='flex gap-2'>
                  <Image
                    src={'/assets/images/footer/mastercard.svg'}
                    height={20}
                    width={30}
                    alt={''}
                  />
                  <Image src={'/assets/images/footer/visa.svg'} height={20} width={30} alt={''} />
                  <Image
                    src={'/assets/images/footer/unionpay.svg'}
                    height={20}
                    width={30}
                    alt={''}
                  />
                </div>
              </div>
              <div className='flex gap-2'>
                <Image src={'/assets/images/footer/trx.svg'} height={20} width={20} alt={''} />
                <Image src={'/assets/images/footer/t.svg'} height={20} width={20} alt={''} />
                <Image src={'/assets/images/footer/bitcoin.svg'} height={20} width={20} alt={''} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='text-2xl'> Proceed to payment using Credit Card </div>
        <div
          style={{ backgroundColor: '#252525', padding: '34px 33px 20px 33px', marginTop: '24px' }}
          className='w-full border-t-4 rounded-sm border-blue-200'
        >
          <div className='flex items-center justify-between'>
            <DropDown
              items={pricingCards[selected]?.map((c, index) => {
                return {
                  key: index.toString(),
                  val: c.IPS.toString(),
                  extra: c.Price.toString() + '/IP',
                }
              })}
              onChange={(val: number) => setSelectedIndex(val)}
            />
            <div className='font-bold'>
              {(GetSelectedPkg().IPS * GetSelectedPkg().Price).toFixed(2)}
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#1B1B1B',
              height: '60px',
              fontSize: '20px',
              marginTop: '37px',
            }}
            className='flex items-center justify-between py-2 px-5 mt-10 rounded'
          >
            <div className='font-bold '>Fee(5%):</div>

            <div className='font-bold '>
              ${(GetSelectedPkg().IPS * GetSelectedPkg().Price * 0.03).toFixed(2)}
            </div>
          </div>

          <div className='flex justify-between items-center' style={{ marginTop: '35px' }}>
            <div>
              <div className='font-bold ' style={{ fontSize: '20px' }}>
                Order Total:
              </div>
              <div style={{ fontSize: '16px' }}>
                The service is based on non-subscription.there will be no renewal.
              </div>
            </div>
            <div style={{ fontSize: '36px' }} className='text-blue-200'>
              ${(GetSelectedPkg().IPS * GetSelectedPkg().Price * 1.03).toFixed(2)}
            </div>
          </div>

          <div className='flex flex-wrap gap-x-10 ' style={{ marginTop: '33px', width: '100%' }}>
            <TextField label='Enter Your email address:' onChange={() => {}} />
            <TextField label='Enter Your Password:' onChange={() => {}} />
          </div>

          <div style={{ marginTop: '21px' }}>
            <div style={{ fontSize: '13px' }}>
              Your S5 Proxy account will be created when you enter your email.
            </div>
            <div style={{ fontSize: '13px' }}>
              Privacy guarantee: We do not share your information and will contact you only as
              needed to provide our service.
            </div>
            <div style={{ fontSize: '17px', marginTop: '9px' }}>
              Continue below to buy a Subscription with Other
            </div>

            <div style={{ width: '200px', marginTop: '30px' }}>
              <PrimaryButton text='Complete Purchase' full />
            </div>

            <div style={{ fontSize: '13px', marginTop: '17px' }}>
              By submitting this form, you agree to our <a href='/terms'>Terms of Service</a> and{' '}
              <a href='privacy_policy'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </Body>
  )
}

export default Pricing
