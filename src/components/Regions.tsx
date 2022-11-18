import Image from 'next/image'

type Props = {
  icon: string
  country: string
  IP: string
}

export const Region = ({ IP, country, icon }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center hover:bg-blue-100 rounded-lg px-4 py-2'>
      <Image className='rounded-full' alt={country} width={75} height={75} src={icon} />
      <div className='text-blue-200 text-center' style={{ fontSize: '20px' }}>
        {country}
      </div>
      <div className='text-blue-200 text-center' style={{ fontSize: '16px' }}>
        {IP}
      </div>
    </div>
  )
}

export const RegionContinent = ({ IP, country, icon }: Props) => {
  return (
    <div className='flex items-center justify-start hover:bg-blue-100 rounded-lg px-4 py-2'>
      <Image className='rounded-full' alt={country} width={50} height={50} src={icon} />
      <div className='flex flex-col items-start ml-5'>
        <div className='text-blue-200' style={{ fontSize: '18px' }}>
          {country}
        </div>
        <div className='text-blue-200 ' style={{ fontSize: '14px' }}>
          {IP}
        </div>
      </div>
    </div>
  )
}
