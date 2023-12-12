import Link from 'next/link'
import Image from 'next/image'

export default function FirstAid() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="rounded-lg shadow-md p-8 w-full max-w-md bg-gray-200">
                <div className=" rounded-md flex flex-col justify-center m-4">
                    <div className='relative inline-block m-4 place-self-end bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b] rounded-md'>
                        <Image src="/bald-eagle.webp" alt="Bird" width={150} height={150} className="rounded-lg m-2" />
                    </div>

                    <div className='bg-white rounded-md shadow-lg'>
                        <div className='place-self-center'>
                            <p className="text-2xl font-semibold m-4">This Animal's Condition</p>

                        </div>
                        <div className='flex flex-wrap mb-3 ml-1 '>
                            <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">Leg Injured</span>
                            <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">Alive</span>
                            <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">Unconsicious</span>
                            <span className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2">No Bleeding or Open Wounds</span>

                        </div>
                        <div className='flex flex-col flex-wrap mb-3 ml-1  m-4 p-4 '>
                            <p className='text-xl font-bold place-self-center'>Follow These Steps!</p>
                            <br></br>
                            <p>
                                1. Safety First: Approach the eagle carefully. Use protection like gloves.
                            </p>
                            <br></br>
                            <p>
                                2. Call Authorities: Report injured eagles to local wildlife professionals for guidance and rescue.
                            </p>
                            <br></br>
                            <p>
                                3. Maintain Distance: Minimize eagle's stress by keeping distance. If in a risky place, cover its head gently with a towel.
                            </p>
                            <br></br>
                            <p>
                                4. Observe: Watch the eagle from afar, noting details about its condition and surroundings for the arriving experts.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b] p-4 m-4 rounded-md items-center justify-center'>
                        <p>
                            BC SPCA Vancouver
                        </p>
                        <p>
                            (604)-879-7721
                        </p>
                        <p>
                            8:00 AM - 10:30 PM
                        </p>
                        <div>
                            <button className="bg-primary-green rounded-lg text-black font-semibold m-2 p-2">Show on Map</button>
                            <button className="bg-primary-pink rounded-lg text-black font-semibold m-2 p-2">Call</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}