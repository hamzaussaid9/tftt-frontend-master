import React from 'react'
import MeatMatrixItem from './MeatMatrixItem'
import Link from 'next/link'
import Image from 'next/image'

export default function MeatMatrix({items}) {
    return (
      <div className='grid place-items-center justify-center p-6'>
        <div className='border border-black m-2 bg-amber-50 rounded-sm'>
            <h1 className='text-center font-sans flex font-bold text-6xl justify-center p-2'>Meat Matrix</h1>
            <p className='text-center text-3xl font-sans font-bold flex items-center justify-center m-6'>Explore the Meat Matrix to discover new items!</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-4 font-mono text-white text-sm leading-6 place-items-center justify-center p-4 relative rounded-xl bg-amber-50 overflow-auto border border-stone-900">
          {items.map((item) => (
            <Link href="http://127.0.0.1:8000/api/item/1/" target="_blank" key={item.id} >
                <div className='group rounded-lg shadow-lg bg-white h-64 w-64 border relative border-black group-hover:text-secondary transition-all duration-300'>

                    <Image
                        className='rounded-lg absolute group-hover:opacity-20'
                        src={item.image}
                        alt="Tri Tip"
                        width="256"
                        height="256"
                    />
                    <div className='absolute top-0 opacity-0 font-bold text-black group-hover:opacity-100'>
                        <MeatMatrixItem item={item} />
                    </div>
                </div>
            </Link>
          ))}
      </div>
  </div>
  )
}

    function mm({item}) {
      return (<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-4 font-mono text-white text-sm leading-6 place-items-center justify-center p-4 relative rounded-xl bg-amber-50 overflow-auto border border-stone-900">
          {items.map(item => <Link href="http://127.0.0.1:8000/api/item/1/" target="_blank" key={item.id} >
                <div className='group rounded-lg shadow-lg bg-white h-64 w-64 border relative border-black group-hover:text-secondary transition-all duration-300'>

                    <Image className='rounded-lg absolute group-hover:opacity-20' src={item.image} alt="Tri Tip" width="256" height="256" />
                    <div className='absolute top-0 opacity-0 font-bold text-black group-hover:opacity-100'>
                        <MeatMatrixItem item={item} />
                    </div>
                </div>
            </Link>)}

      </div>);
    }
