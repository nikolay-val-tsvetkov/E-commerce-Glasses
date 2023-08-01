import ShowCardItem from '../showCardItem/ShowCardItem'
import { useGlassesContext } from '@/app/contexts/productsContext'

export default function ProductsGrid() {
  const { glassesData } = useGlassesContext()

  return (
    <div className='flex flex-wrap'>
      {glassesData.map((item, index) => (
        <ShowCardItem key={'product-' + item.id + '-' + index} itemData={item} index={index} />
      ))}
    </div>
  )
}
