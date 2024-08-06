'use client'
import Sidebar from '@/components/dashboard/sidebar'
import CardDash from '@/components/cardDash'
import { useContext, useEffect, useState } from 'react'
import { MdCloudQueue } from "react-icons/md";
import { MdCloudOff } from "react-icons/md";
import { SlPaperClip } from "react-icons/sl";
import { PrestadoresContext } from "@/context/providersContext";
import ChartCardProviders from '@/components/dashboardRh/chartCardProviders'

export default function Page() {
  const [ativos, setAtivos] = useState(0);
  const [inativos, setInativos] = useState(0);
  const [cadastrados, setCadastrados] = useState(0);

  const { allProviders, getAllProviders } = useContext(PrestadoresContext) 

  function verifyCadastrados() {
    let quatCadastrados = allProviders ? allProviders.length : 0;
    setCadastrados(quatCadastrados)
  }

  function verifyAtivosAndInativos() {
    let contratados = allProviders ? allProviders.filter(item => item.contratacaoDemissao[0].isContratado === "Contratado") : 0;
    let quatContrataos = contratados.length; 
    setAtivos(quatContrataos);

    let inativos = allProviders? allProviders.filter(item => item.contratacaoDemissao[0].isContratado === "Cadastratdo" || item.contratacaoDemissao[0].isContratado === "Demitido") : 0;
    let quatInativos = inativos.length; 
    setInativos(quatInativos);
  }


  useEffect(() => {
    getAllProviders()
    if (allProviders) {
      verifyCadastrados()
      verifyAtivosAndInativos()
    }
  }, [allProviders])
  

  const list = [
    {
      valor: ativos,
      title: 'Colaboradores ativos',
      ico: <MdCloudQueue />
    },
    {
      valor: inativos,
      title: 'Colaboradores inativos',
      ico: <MdCloudOff />
    },
    {
      valor: cadastrados,
      title: 'Colaboradores Cadastrados',
      ico: <SlPaperClip />
    }
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
        <div>
          <ChartCardProviders />
        </div>
      </div>
    </div>
  )
}