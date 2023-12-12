import Image from 'next/image'
import Link from 'next/link'

export default function AnimalGrid() {
    return (
        <>
            <div className="bg-white rounded-md flex flex-col justify-center m-4">
                <div className='relative inline-block m-4'>
                    <Image src="/bald-eagle.webp" alt="Bird" width={400} height={300} className="rounded-lg" />
                    <Link href='./detail/bald-eagle'>
                        <button className="absolute bottom-0 right-0 mb-2 mr-2  rounded-lg text-white p-2 bg-primary-pink"><p>Click here to help</p></button>
                    </Link>
                </div>

                <div>
                    <p className="text-3xl font-semibold m-4">Bald Eagle</p>
                    <p className="text-xl m-4 italic ">Haliaeetus leucocephalus</p>

                </div>
                <div className='flex flex-wrap mb-3 ml-1 '>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Leg Injured</p>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Alive</p>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Female</p>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Richmond</p>

                </div>
            </div>

            <div className="bg-white rounded-md flex flex-col justify-center m-4">
                <div className='relative inline-block m-4'>
                    <Image src="/raccoon.webp" alt="Raccoon" width={400} height={300} className="rounded-lg" />
                    <Link href='./detail/raccoon'>
                        <button className="absolute bottom-0 right-0 mb-2 mr-2  rounded-lg text-white p-2 bg-primary-pink"><p>Click here to help</p></button>
                    </Link>
                </div>

                <div>
                    <p className="text-3xl font-semibold m-4">Raccoon</p>
                    <p className="text-xl m-4 italic ">Procyon lotor</p>

                </div>
                <div className='flex flex-wrap mb-3 ml-1 '>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Head Injured</p>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Alive</p>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Male</p>
                    <p className="bg-gray-200 rounded-lg text-xs m-2 p-2">Vancouver</p>

                </div>
            </div>
        </>
    )
        
}