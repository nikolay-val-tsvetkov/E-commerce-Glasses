export default function ShowCardItem({ itemData }) {
  const { name, description, price } = itemData

  return (
    <div className='flex flex-col flex-auto w-1/3 border border-bottom border-amber-700 relative'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{name}</h5>

      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
      <p className='self-end justify-self-end'>{price}</p>
    </div>
  )
}
