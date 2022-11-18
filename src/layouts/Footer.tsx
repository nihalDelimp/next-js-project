import { DownloadBanner } from '@/components/DownloadBanner'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Footer = () => {
  const { push } = useRouter()
  const AboutUs = [
    { name: 'Term of Service', link: '/terms' },
    { name: 'Privacy Policy', link: '/privacy_policy' },
    { name: 'Refund Policy', link: '/refund_policy' },
  ]

  const Navigation = [
    { name: 'Location', link: '/location' },
    { name: 'Download', link: '/download' },
    { name: 'Use Cases', link: '/use_cases' },
    { name: 'Pricing', link: '/pricing' },
  ]

  const Contact = [
    { name: 'support@strox.su', link: '' },
    { name: 'Contact us on Telegram', link: '' },
    { name: 'Facebook', link: '' },
    { name: 'Yotube', link: '' },
  ]

  return (
    <div style={{ backgroundColor: '#011F1E' }} className='relative mt-20'>
      <DownloadBanner />
      <div
        className='flex flex-wrap sm:justify-center xs:justify-center lg:justify-between py-20 mx-auto'
        style={{ maxWidth: '1350px', width: '100%', margin: '0 auto' }}
      >
        <div className='w-80'>
          <Image
            width={172}
            height={36}
            src='/assets/images/Logo.svg'
            alt=''
            onClick={() => push('/')}
          />
          <div className='text-blue-200 mt-5'>
            Our S5 Proxy is the largest commercial residential proxy service in the world. More than
            50 million fresh residential IPs, support ISP and city-level flexible positioning, and
            easily integrate third-party software and scripts!
          </div>
          <div className='flex gap-8 mt-5'>
            <div className='flex gap-2'>
              <Image src={'/assets/images/footer/mastercard.svg'} height={20} width={30} alt={''} />
              <Image src={'/assets/images/footer/visa.svg'} height={20} width={30} alt={''} />
              <Image src={'/assets/images/footer/unionpay.svg'} height={20} width={30} alt={''} />
            </div>
            <div className='flex gap-2'>
              <Image src={'/assets/images/footer/trx.svg'} height={20} width={20} alt={''} />
              <Image src={'/assets/images/footer/t.svg'} height={20} width={20} alt={''} />
              <Image src={'/assets/images/footer/bitcoin.svg'} height={20} width={20} alt={''} />
            </div>
          </div>
        </div>
        <div className='flex justify-between sm:justify-center xs:justify-center lg:justify-between xs:gap-x-20 md:gap-x-40 flex-wrap mt-10'>
          <ListItem heading='About Us' links={AboutUs} />
          <ListItem heading='Navigation' links={Navigation} />
          <div className='xs:hidden md:block'>
            <ListItem heading='Contact' links={Contact} />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center py-10 px-20 text-center'>
        <div style={{ color: '#0D8581' }}>
          Due to policy, this service is not avaiable in mainland China. Thank you for your
          understanding!
        </div>
      </div>
    </div>
  )
}

type ListItemProps = {
  heading: string
  links: { name: string; link: string }[]
}
const ListItem = ({ heading, links }: ListItemProps) => {
  return (
    <div className='p-5 w-1/1'>
      <div className='text-xl'>{heading}</div>
      <div className='flex flex-col'>
        {links.map((link, index) => {
          return (
            <a style={{ color: '#1AFFF8' }} key={index} className='mt-3' href={link.link}>
              {link.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
