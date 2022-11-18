import Image from 'next/image'
import { useRouter } from 'next/router'

export const DownloadBanner = () => {
  const { push } = useRouter()

  return (
    <div style={{ backgroundColor: '#00100F' }}>
      <div
        className='flex sm:justify-between xs:justify-center flex-wrap py-4 gap-y-10 mx-auto'
        style={{ maxWidth: '1350px' }}
      >
        <>
          <div className='text-xl'>Download the IP Changer App For Windows</div>
          <Image
            onClick={() => {
              push('download')
            }}
            src={'/assets/images/WinIcon.svg'}
            width={133}
            height={41}
            alt={'Window Download Button'}
          />
        </>
      </div>
    </div>
  )
}
type Props = {
  list: { icon: string; text: string }[]
}
export const IconList = ({ list }: Props) => {
  return (
    <>
      {list.map((R) => {
        return (
          <div className='flex gap-4' style={{ fontSize: '18px', marginTop: '17px' }}>
            <Image src={R.icon} height={30} width={24} alt='' />
            <div style={{ fontSize: '18px' }}>{R.text}</div>
          </div>
        )
      })}
    </>
  )
}
