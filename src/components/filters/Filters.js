import { useGlassesContext } from '@/app/contexts/productsContext'

const filterTags = [
  {
    name: 'brand',
    options: [
      'all',
      'SunshineStyle',
      'VisionPro',
      'SunShade',
      'GoldenEyes',
      'PolarWrap',
      'RetroVision',
      'CatEyeChic',
      'GeometricSpecs',
      'ActiveWear',
      'ModaSpecs'
    ]
  },
  {
    name: 'shape',
    options: ['all', 'rectangular', 'round', 'square', 'cat-eye', 'oval', 'aviator', 'wraparound']
  },
  {
    name: 'type',
    options: ['all', 'sunglasses', 'eyeglasses']
  },
  {
    name: 'material',
    options: ['all', 'wooden', 'plastic', 'acetate', 'metal', 'polycarbonate']
  },
  {
    name: 'frameColor',
    options: ['all', 'tortoise', 'gold', 'pink', 'silver', 'black', 'brown', 'tortoise', 'green']
  }
]

export default function Filters() {
  const { filter, setFilter } = useGlassesContext()

  const handleFilterChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)

    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value
    }))
  }

  return (
    <div>
      {filterTags.map((tag) => (
        <label key={tag.name} className='block text-sm font-medium text-gray-700'>
          {tag.name}:
          <div className='relative mt-1'>
            <select
              name={tag.name}
              value={filter[tag.name]}
              onChange={handleFilterChange}
              className='block w-full px-3 py-2 pr-8 mt-1 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            >
              {tag.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>
      ))}
    </div>
  )
}
