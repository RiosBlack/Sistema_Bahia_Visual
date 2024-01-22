import Sidebar from '@/components/dashboard/sidebar'
import CardDash from '@/components/cardDash'
import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import TimeSheetProvidersTable from '@/components/timeSheet/timeSheetProvidersTable';

type Props = {}

export default function page({ }: Props) {
  const list = [
    {
      valor: 'R$ 100.000,00',
      title: 'Valor total da folha',
      ico: <MdAttachMoney />
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
        <TimeSheetProvidersTable />
      </div>
    </div>
  )
}