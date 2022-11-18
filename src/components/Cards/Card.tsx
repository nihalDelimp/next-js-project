import Image from 'next/image'

type Props = {
  icon: string
  title: string
  desc: string
  height?: number
  width?: number
  position?: 'items-end' | 'items-center'
}

export const Card = ({ desc, icon, title, height = 46, width = 40 }: Props) => {
  return (
    <div className='flex flex-col border-blue-200 border rounded items-center py-8 px-9 w-72'>
      <Image width={width} height={height} alt={'icon'} src={icon} />
      <div style={{ marginTop: '20px', fontSize: '18px' }}>{title}</div>
      <div style={{ marginTop: '6px', fontSize: '14px' }}>{desc}</div>
    </div>
  )
}

export const StepCard = ({ desc, icon, title, height = 89, width = 89 }: Props) => {
  return (
    <div
      className='flex flex-col border-blue-200 border rounded items-center py-8 px-9 text-center'
      style={{ width: '382px', backgroundColor: '#0D0D0D' }}
    >
      <Image width={width} height={height} alt={'icon'} src={icon} />
      <div style={{ marginTop: '23px', fontSize: '24px' }}>{title}</div>
      <div style={{ marginTop: '14px', fontSize: '14px' }}>{desc}</div>
    </div>
  )
}

export const BatchCard = ({
  desc,
  icon,
  title,
  height = 89,
  width = 89,
  position = 'items-center',
}: Props) => {
  return (
    <div className='flex flex-col hover:border-2 border-blue-200 ' style={{ width: '250px', backgroundColor: '#0D0D0D' }}>
      <div
        style={{ height: '136px', backgroundColor: '#00908C' }}
        className={position + ' justify-center flex text-center '}
      >
        <Image width={width} height={height} alt={'icon'} src={icon} />
      </div>
      <div className='px-4 pb-5'>
        <div style={{ marginTop: '21px', fontSize: '18px' }}>{title}</div>
        <div style={{ marginTop: '14px', fontSize: '14px' }}>{desc}</div>
      </div>
    </div>
  )
}
