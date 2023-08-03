import { useGlassesContext } from '@/app/contexts/productsContext'
export default function Category() {
  const { currentCategory, currentCategoryItemsCounter } = useGlassesContext()

  return (
    <>
      <div>{currentCategory}</div>
      <div>{currentCategoryItemsCounter}</div>
    </>
  )
}
