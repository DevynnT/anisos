import Link from 'next/link'
import Image from 'next/image'

export default function Detail() {
    return (
        <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-4">
            <div className="rounded-lg shadow-md p-8 w-full max-w-md bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b]">
                <div className=" rounded-md flex flex-col justify-center m-4">
                    <div className='relative inline-block m-4'>
                        <Image src="/bald-eagle.webp" alt="Bird" width={400} height={300} className="rounded-lg" />
                    </div>

                    <div>
                        <p className="text-3xl m-4">Bald Eagle</p>
                        <p className="text-xl m-4 italic">Haliaeetus leucocephalus</p>

                    </div>
                    <div className='flex flex-wrap mb-3 ml-1 '>
                        <p className="bg-primary-dark-gray rounded-lg text-xs m-2 p-2 text-white">Leg Injured</p>
                        <p className="bg-primary-dark-gray rounded-lg text-xs m-2 p-2 text-white">Alive</p>
                        <p className="bg-primary-dark-gray rounded-lg text-xs m-2 p-2 text-white">Female</p>
                        <p className="bg-primary-dark-gray rounded-lg text-xs m-2 p-2 text-white">Richmond</p>

                    </div>
                    <div className='flex flex-wrap mb-3 ml-1 justify-center'>
                        <Link href='../first-aid/bald-eagle'>
                            <button className="bg-primary-green rounded-lg text-black m-2 p-2 hover:bg-primary-light-gray w-[300px] shadow-lg"><p>Click here for First Aid</p></button>
                        </Link>
                        <button className="bg-primary-green rounded-lg text-black m-2 p-2 hover:bg-primary-light-gray w-[300px] shadow-lg"><p>Locate This Animal to Help</p></button>
                        <button className="bg-primary-pink rounded-lg text-black m-2 p-2 hover:bg-primary-light-gray w-[300px] shadow-lg"><p>Read More about Bald Eagle</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}