import Link from 'next/link'
import React from 'react'
import { MdSpaceDashboard, MdGroup, MdOutlineLogin } from "react-icons/md";

type Props = {}

export default function Sidebar({ }: Props) {
  return (
    <aside className="overflow-hidden bg-gradient-to-r from-Mooonlit-Asteroid1 via-Mooonlit-Asteroid2 to-Mooonlit-Asteroid3 w-36 h-full grid justify-items-start content-between rounded-xl p-2">
      <div className='space-y-2'>
        <Link href={'/dashboard'} className='flex hover:text-orange-500'>
          <MdSpaceDashboard className='text-orange-500 text-2xl mr-2' />
          <p className='text-base text-center'>DashBoard</p>
        </Link>
        <Link href={'/dashRh'} className='flex hover:text-orange-500'>
          <MdGroup className='text-orange-500 text-2xl mr-2' />
          <p className='text-base text-center truncate'>Recursos Hu...</p>
        </Link>
      </div>
      <div>
        <Link href={'/system'} className='flex hover:text-orange-500 py-2'>
          <MdOutlineLogin className='text-orange-500 text-2xl mr-2' />
          <p className='text-base text-center truncate'>Sair</p>
        </Link>
      </div>
    </aside>
  )
}