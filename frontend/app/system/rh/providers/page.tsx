'use client'
import Sidebar from '@/components/dashboard/sidebar'
import TableProviders from '@/components/providers/tableProviders'

type Props = {}

export default function Providers({}: Props) {
  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='px-3 space-y-2 w-full'>
        <h1 className='text-xl font-bold'>Prestadores</h1>
        <TableProviders />
      </div>
    </div>
  )
}