import Image from 'next/image'

export default function AnimalGrid() {
    return (
        <div className="bg-white rounded-md flex flex-col justify-center m-4">
            <div className='relative inline-block m-4'>
                <Image src="https://picsum.photos/id/1/400/300" alt="Bird" width={400} height={300} className="rounded-lg" />
                <button className="absolute bottom-0 right-0 mb-2 mr-2 bg-gray-300 rounded-lg text-black font-semibold p-2">Click here to help</button>
            </div>

            <div>
                <h1 className="text-md font-semibold m-4">Bald Eagle</h1>
                <h1 className="text-xl font-semibold m-4">Latin Name</h1>

            </div>
            <div className='flex flex-wrap mb-3 ml-1 '>
                <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">Leg Injured</span>
                <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">Alive</span>
                <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">Female</span>
                <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">Richmond</span>

            </div>
        </div>
    )
        
}