
import Calendar from '@/components/dashboard/calendar'
import Hello from '@/components/dashboard/hello'
import NavMensage from '@/components/dashboard/navMensage'
import Reminder from '@/components/dashboard/reminder'
import Sidebar from '@/components/dashboard/sidebar'

import React from 'react'

function Page() {
  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='flex w-full'>
        <div className='w-2/3 px-2'>
          <Hello />
          <NavMensage />
          <Reminder />
        </div>
        <div className='w-1/3'>
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Page
