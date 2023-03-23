import {useState} from 'react'
import NewsItem from '../components/NewsItem'
import MeatMatrix from '../components/MeatMatrix'

import data from '../public/testData/test_meatMatrixItems'
import data2 from '../public/testData/test_newsPosts'

export default function News() {
    const [meatMatrixItems, setMeatMatrixItems] = useState(data)
    return (
        <div className='bg-fixed bg-cover bg-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")]' >
            <div className='grid place-items-center m-4 p-4 mb-0'>
                <div className='grid justify-center bg-amber-50 p-1 border-black rounded-md border w-3/4 '>

                    <h1 className='text-center font-bold text-2xl font-sans border-black border rounded-md text-black shadow-md ml-12 mr-12 mt-8 space-y-6 p-2'>News Board</h1>
                    <p className='text-center text-xl font-sans flex items-center justify-center m-6'>Check in here for the latest news updates from Tip for the Trip!</p>

                    <div className='grid grid-cols-1 m-12 space-y-6 p-2 '>

                        <div className=" bg-custom-whiteblue shadow-md px-4 py-3 border-black border">
                            <NewsItem item={data2[0]} />
                        </div>

                        <div className="bg-custom-whiteblue shadow-md px-4 py-3 border-black border " >
                            <NewsItem item={data2[1]} />

                        </div>

                        <div className="bg-custom-whiteblue shadow-md px-4 py-3 border-black border ">
                            <NewsItem item={data2[2]} />
                        </div>

                        <div className="bg-custom-whiteblue shadow-md px-4 py-3 border-black border">
                            <NewsItem item={data2[3]} />
                        </div>

                        <div className="bg-custom-whiteblue shadow-md px-4 py-3 border-black border">
                            <NewsItem item={data2[4]} />
                        </div>


                    </div>


                </div>
                <MeatMatrix items={meatMatrixItems} />
            </div>
        </div>
    )
}
