import { Region, RegionContinent } from './Regions'

export const TopProxy = () => {
  const Regions = [
    {
      img: 'UnitedStates.svg',
      country: 'United States',
      IP: '3,599,080 IPs',
    },
    {
      img: 'Japan.svg',
      country: 'Japan',
      IP: '156,534 IPs',
    },
    {
      img: 'SouthKorea.svg',
      country: 'South Korea',
      IP: '1,047,582 IPs',
    },
    {
      img: 'Myanmar.svg',
      country: 'Myanmar',
      IP: '1,124,725 IPs',
    },
    {
      img: 'Canada.svg',
      country: 'Canada',
      IP: '2,704,625 IPs',
    },
    {
      img: 'BRA.svg',
      country: 'Brazil',
      IP: '3,599,080 IPs',
    },
    {
      img: 'DEU.svg',
      country: 'Germany',
      IP: '156,534 IPs',
    },
    {
      img: 'FRA.svg',
      country: 'France',
      IP: '1,047,582 IPs',
    },
    {
      img: 'GBR.svg',
      country: 'United Kingdom',
      IP: '1,124,725 IPs',
    },
    {
      img: 'MEX.svg',
      country: 'Mexico',
      IP: '2,704,625 IPs',
    },
  ]
  return (
    <>
      <div className='flex justify-center'>
        <div className='text-center xs:text-2xl md:text-5xl'>
          Top 10 proxy regions
        </div>
      </div>
      <div
        className='grid grid-cols-5 gap-y-10 gap-x-20 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-start'
        style={{ marginTop: '94px' }}
      >
        {Regions.map((R, index) => (
          <Region IP={R.IP} key={index} country={R.country} icon={`/assets/images/${R.img}`} />
        ))}
      </div>
    </>
  )
}

type Props = {
  Regions: { img: string; country: string; IP: string }[]
  continent: string
}

export const ContinentProxy = ({ continent, Regions }: Props) => {
  return (
    <>
      <div style={{ fontSize: '20px', color: '#00DFD8' }}>{continent}</div>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#00908C', marginTop:'4px' }}></div>
      <div className='grid grid-cols-5 gap-y-10 gap-x-20 mt-20 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ' >
        {Regions.map((R, index) => (
          <RegionContinent
            IP={R.IP}
            key={index}
            country={R.country}
            icon={`/assets/images/${R.img}`}
          />
        ))}
      </div>
    </>
  )
}
