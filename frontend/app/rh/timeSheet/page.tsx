"use client"
import Sidebar from '@/components/dashboard/sidebar'
import CardDash from '@/components/cardDash'
import { useEffect, useState } from 'react'
import { MdAttachMoney } from "react-icons/md";
import TimeSheetProvidersTable from '@/components/timeSheet/timeSheetProvidersTable';
import useTimeSheetStore from '@/context/timeSheetStore';

export default function page() {
  const { getMonth } = require('date-fns');
  const [month, setMonth] = useState('')
  const [value, setValue] =useState(0)


  const timeSheet = useTimeSheetStore((state)=>state.timeSheet)

function getValue() {
  let values = timeSheet.map((data)=>data.valueDailyTotal)
  let initialValue = 0;
  let valueFin = values.reduce((acc, cur)=> acc + cur, initialValue)
  setValue(valueFin)
}

  function getMonthNow() {
    let date = new Date()
    let monthNumber = getMonth(date)
    const getMonthName = () => {
      switch (monthNumber) {
        case 0:
          return "Janeiro";
        case 1:
          return "Fevereiro";
        case 2:
          return "Março";
        case 3:
          return "Abril";
        case 4:
          return "Maio";
        case 5:
          return "Junho";
        case 6:
          return "Julho";
        case 7:
          return "Agosto";
        case 8:
          return "Setembro";
        case 9:
          return "Outubro";
        case 10:
          return "Novembro";
        case 11:
          return "Dezembro";
        default:
          return "Mês inválido";
      }
    };
    setMonth(getMonthName)
  }

  useEffect(() => {
    getMonthNow()
    getValue()
  }, [timeSheet])
  

  const list = [
    {
      valor: `R$ ${value}`,
      title: `Valor da folha do mês de ${month}`,
      ico: <MdAttachMoney />
    },
  ]

  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='px-3 space-y-2 w-full'>
        <h1 className='text-xl font-bold'>Folha de ponto</h1>
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