import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const maxStars = 5

export default function Stars({ count }) {
  const roundedCount = Math.round(count ?? 0)

  const starArray = Array.from({ length: maxStars }, (_, index) => {
    const isFilled = index < roundedCount
    return isFilled ? <AiFillStar key={index} className='text-yellow-500' /> : <AiOutlineStar key={index} />
  })

  return <div>{starArray}</div>
}
