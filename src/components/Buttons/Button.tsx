import Image from 'next/image'

type Props = {
  text: string
  onClick?: () => void
  ghost?: boolean
  color?: string
  showArrow?: boolean
  full?: boolean
}

export const Button = ({ onClick, text, ghost = false }: Props) => {
  return (
    <a
      onClick={onClick}
      className={`border-white border rounded px-6 py-1 ${ghost ? 'text-white' : 'text-black'} ${
        ghost ? 'bg-transparent' : 'bg-white'
      } cursor-pointer `}
    >
      {text}
    </a>
  )
}

export const PrimaryButton = ({ onClick, text, ghost = false, showArrow, full }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`hover:px-8 transition-all ${
        !ghost ? 'hover:bg-transparent' : 'hover:bg-blue-200'
      }  border-blue-200 border rounded px-6 py-2 ${ghost ? 'text-blue-200' : 'text-black'} ${
        ghost ? 'bg-transparent' : 'bg-blue-200'
      } cursor-pointer flex ${full ? 'w-full ' : 'w-max'} ${
        full ? 'justify-center' : 'justify-between'
      } gap-x-5 ${!ghost ? 'hover:text-blue-200' : 'hover:text-black'}`}
      style={{ fontSize: '15px' }}
    >
      {text}
      {showArrow && <Image src='/assets/images/Arrow.svg' height={10} width={20} alt='' />}
    </div>
  )
}

export const WindowDownloadButton = ({ onClick, version }: any) => {
  return (
    <div
      onClick={onClick}
      className={`border-blue-200 bg-blue-200 border rounded px-7 py-2 gap-x-20 cursor-pointer flex w-max text-black justify-between`}
    >
      <div>
        <div style={{ fontSize: '19px' }}>DOWNLOAD</div>
        <div style={{ fontSize: '13px' }}>{version}</div>
      </div>
      <Image src='/assets/images/WindowsIcon.svg' height={31} width={26} alt='' />
    </div>
  )
}
