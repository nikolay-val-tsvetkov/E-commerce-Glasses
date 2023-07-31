export default function ShowCardItem({ itemData, index }) {
  const { name, type, shape, description, price, brand, material, frameColor } = itemData
  const tagStyles = 'inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 my-2'

  return (
    <div
      className={`flex flex-col flex-auto w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-bottom border-slate-200 relative m-4 p-2 ${
        index % 2 === 0 ? 'bg-green-200' : 'bg-purple-200'
      }`}
    >
      <div className='flex items-center mb-2'>
        <h5 className='ml-2 text-2xl font-bold text-gray-900 dark:text-white'>{name}</h5>
      </div>
      <p className='mb-3 text-gray-700 dark:text-gray-600'>{description}</p>
      <div className='flex justify-between items-center mt-4'>
        <div>
          <span className='text-sm text-gray-800'>{brand}</span>
          <span className='text-gray-500 text-xs ml-2'>{material}</span>
        </div>
        <span className='text-gray-700 font-bold'>${price.toFixed(2)}</span>
      </div>
      <div className='mt-4 flex flex-col'>
        <div className={tagStyles}>{type}</div>
        <div className={tagStyles}>{shape}</div>
        <div className={tagStyles}>
          <span>Frame: {frameColor}</span>
          <div className='h-3 w-3 rounded-full inline-block ml-4 pt-2' style={{ background: frameColor }}></div>
        </div>
      </div>
    </div>
  )
}
