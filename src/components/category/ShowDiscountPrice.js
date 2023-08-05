export default function ShowDiscountPrice({ price, discount }) {
  const result = price - (price * discount) / 100

  return (
    <div className='flex flex-col self-center text-gray-700 font-bold text-xs lg:text-sm'>
      {discount ? (
        <div>
          <span className='line-through text-gray-400'>{price} $</span>
          <span> {result.toFixed(2)} $</span>
        </div>
      ) : (
        <span className=' text-gray-700 font-bold text-xs lg:text-sm2'>{price} $</span>
      )}
    </div>
  )
}
