
import Hello from '@/components/dashboard/hello'
import NavMensage from '@/components/dashboard/navMensage'
import Sidebar from '@/components/dashboard/sidebar'
import React from 'react'

function Page() {
  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='w-full'>
        <NavMensage />
        <Hello />
      </div>
    </div>
  )
}

export default Page
