// https://www.youtube.com/playlist?list=PLQKg8mIgoxKpvIWyxMM-Nn6s_iww0KX53
// Using the above playlist for creating this portfolio

import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <main className='grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 sm:px-20 md:px-32'>
      <div className='col-span-12 lg:col-span-3 bg-white rounded-2xl p-4 text-center'>
        <Sidebar />
      </div>
      <div className='col-span-12 lg:col-span-9 bg-white rounded-2xl'>
        New Components
      </div>
    </main>
  )
}
