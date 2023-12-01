import Image from 'next/image'
import Dropdown from '@/components/dropdown'
import AnimalGrid from '@/components/animal-grid'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="rounded-lg shadow-md p-8 w-full max-w-md green-gradient">
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-xl font-semibold">Animals who need your help in your area!</h1>
                </div>

                <div className="flex justify-center items-center mb-4">
                    <Dropdown defaultValue={'Filter'} options={['Bird','Reptile']} />
                    <Dropdown defaultValue={'Size'} options={['Small', 'Medium', 'Large']} />
                    <Dropdown defaultValue={'Location'} options={['Vancouver', 'Richmond', 'Burnaby']} />

                </div>

                <div className='flex justify-center'>
                    Scroll down to see more!
                </div>

                

                <AnimalGrid />

            </div>
        </div>
    )
}