type Props = {
  IPs: number
  Price: number
  Selected?: boolean
  onClick?: () => void
  Save?: {
    per: number
    color: string
  }
}

export const PricingCard = ({ IPs, Price, Selected, Save, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='flex flex-col relative border-blue-200 border rounded items-center py-5 px-9 w-50 hover:border-white cursor-pointer hover:bg-blue-100'
      style={{ backgroundColor: Selected ? '#093C3A' : '#0D0D0D', maxWidth:'216px', minWidth:'200px' }}
    >
      {Save && (
        <div
          className='absolute rounded-full w-12 h-12 top-0 right-0 -mt-5 -mr-5'
          style={{ backgroundColor: Save?.color }}
        >
          <div
            style={{ fontSize: '12px' }}
            className='flex flex-col items-center justify-center text-black h-full'
          >
            <div>Save</div>
            <div>{'$' + Save?.per}</div>
          </div>
        </div>
      )}
      <div style={{ fontSize: '18px' }}>{IPs + ' IPS'}</div>
      <div className='font-bold  text-blue-200' style={{ fontSize: '35px', marginTop: '14px' }}>
        <span className='text-white'>$</span> {Price} /{' '}
        <span
          style={{ fontSize: '18px', marginTop: '5px', marginLeft: '5px', position: 'absolute' }}
        >
          IP
        </span>
      </div>
      <div style={{ color: 'rgba(255, 255, 255, 0.73)', fontSize: '14px', marginTop: '52px' }}>
        {'Total: $' + (IPs * Price).toFixed(2)}
      </div>
    </div>
  )
}
