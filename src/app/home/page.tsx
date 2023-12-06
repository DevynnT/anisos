import Image from 'next/image'
import Dropdown from '@/components/dropdown'
import AnimalGrid from '@/components/animal-grid'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="rounded-lg shadow-md p-8 w-full max-w-md bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b] h-[1200px] overflow-auto">
                <div className="flex justify-center items-center mb-4">
                    <p className="text-3xl font-semibold">Animals who need your help in your area!</p>
                </div>

                <div className="flex justify-center items-center mb-4">
                    <Dropdown defaultValue={'Filter'} options={['Bird','Reptile']} />
                    <Dropdown defaultValue={'Size'} options={['Small', 'Medium', 'Large']} />
                    <Dropdown defaultValue={'Location'} options={['Vancouver', 'Richmond', 'Burnaby']} />

                </div>

                <div className='flex justify-center'>
                    <p>Scroll down to see more!</p>
                </div>

                

                <AnimalGrid />

            </div>
        </div>
    )
}