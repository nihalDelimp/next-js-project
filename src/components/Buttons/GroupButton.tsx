import Image from 'next/image'

type GroupButtonProps = {
  items: { key: string; icon?: string; text: string }[]
  selected: string
  setSelected: (val: string) => void
}

export const GroupButton = ({ items, selected, setSelected }: GroupButtonProps) => {
  return (
    <div
      className='grid gap-x-5 lg:grid-cols-5 md:grid-cols-5  xs:grid-cols-2 gap-y-5 rounded border-blue-200 border-2 px-1 w-max relative bg-black'
      style={{ padding: '6px 5px' }}
    >
      {items.map((I) => (
        <Button
          key={I.key}
          onClick={() => setSelected(I.key)}
          text={I.text}
          selected={I.key === selected}
          icon={I.icon}
        />
      ))}
    </div>
  )
}

type Props = {
  key: string
  text: string
  selected?: boolean
  icon?: string
  onClick: () => void
}

const Button = ({ icon, text, selected, onClick }: Props) => {
  return (
    <div
      className={`flex px-5 py-1 rounded border-blue-200 cursor-pointer gap-x-2 items-center`}
      style={{ backgroundColor: selected ? 'rgba(0, 223, 216,0.32)' : 'rgba(0, 223, 216, 0.16)' }}
      onClick={onClick}
    >
      {icon ? <Image src={icon} width={11} height={14} alt='' /> : null}
      <div style={{ fontSize: '14px' }}>{text}</div>
    </div>
  )
}
