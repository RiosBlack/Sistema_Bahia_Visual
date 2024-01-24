import Sidebar from '@/components/dashboard/sidebar'
import CardDash from '@/components/cardDash'
import ProvidersTable from '@/components/dashboardRh/providersTable'
import React from 'react'
import { MdCloudQueue } from "react-icons/md";
import { MdCloudOff } from "react-icons/md";
import { SlPaperClip } from "react-icons/sl";


type Props = {}

export default function Page({ }: Props) {
  const list = [
    {
      valor: '30',
      title: 'Colaboradores ativos',
      ico: <MdCloudQueue />
    },
    {
      valor: '30',
      title: 'Colaboradores inativos',
      ico: <MdCloudOff />
    },
    {
      valor: '00',
      title: 'Colaboradores Cadastrados',
      ico: <SlPaperClip />
    },
  ]
  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='px-3 space-y-2 w-full'>
        <h1 className='text-xl font-bold'>Indicadores gerais</h1>
        <div className='flex justify-between w-full space-x-2'>
          {list.map((dado, index) => (
            <CardDash ico={dado.ico} title={dado.title} valor={dado.valor} key={index} />
          ))}
        </div>
        <ProvidersTable />
      </div>
    </div>
  )
}