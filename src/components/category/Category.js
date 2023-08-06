import { useGlassesContext } from '@/app/contexts/productsContext'

export default function Category() {
  const { glassesData, currentCategory } = useGlassesContext()

  return (
    <>
      <div className='capitalize text-bold'>{currentCategory?.title}</div>
      <div className='text-gray-600 italic text-xs md:text-sm'>{currentCategory?.description}</div>
      <div> {'(' + glassesData.length + ')'}</div>
    </>
  )
}
