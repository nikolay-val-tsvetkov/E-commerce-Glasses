import { useGlassesContext } from '@/app/contexts/productsContext'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function Filters() {
  const filterTags = [
    {
      name: 'brand',
      options: ['All', 'SunshineStyle', 'Brand 2']
    },
    {
      name: 'shape',
      options: ['All', 'Rectangular', 'Round']
    },
    {
      name: 'type',
      options: ['All', 'Sunglasses', 'Eyeglasses']
    },
    {
      name: 'material',
      options: ['All', 'Wooden', 'Plastic']
    },
    {
      name: 'frameColor',
      options: ['All', 'tortoise', 'gold']
    }
  ]
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
            <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
              <ChevronDownIcon className='w-4 h-4 text-gray-400' />
            </div>
          </div>
        </label>
      ))}
    </div>
  )
}
