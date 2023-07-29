export default function Home() {
  return (
    <div className='grid grid-rows-5 grid-cols-4'>
      <div className='col-span-4  border border-3 border-slate-400'>Header</div>
      <div className='row-span-3 col-span-1 border border-3 border-slate-400'>Filter</div>
      <div className='col-span-2 border border-3 border-slate-400'>Category</div>
      <div>Sort</div>
      <div className='col-span-3 row-span-2 border border-3 border-slate-400'>Product Grid</div>
      <div className='col-span-4  border border-3 border-slate-400'>Footer</div>
    </div>
  )
}
