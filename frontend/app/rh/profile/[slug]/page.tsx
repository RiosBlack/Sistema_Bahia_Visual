'use client'
import Sidebar from '@/components/dashboard/sidebar'
import { Avatar, Button, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Switch } from "@nextui-org/react";
import { TiLockOpen } from "react-icons/ti";
import { TiLockClosed } from "react-icons/ti";
import axiosApi from '@/services/axiosConfig';
import { useParams } from 'next/navigation'

interface Address {
  id: number;
  zipCode: string;
  road: string;
  number: number;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  isPrincipal: boolean;
}

interface FunctionsProviders {
  id: number;
  functionProviders: string;
}

interface ContratacaoDemissao {
  id: number;
  contratacaoDate: Date | null;
  demissaoDate: Date | null;
  motivoDemissao: string | null;
  isContratado: boolean | null;
  cpf: string;
  diary: string | null;
  functionContratado: string | null;
}

export interface ProviderData {
  urlImage: string;
  nameImageCloud: string;
  name: string;
  surname: string;
  fatherName: string;
  motherName: string;
  birthday: number;
  cpf: string;
  rg: string;
  naturalness: string;
  numberPhone1: string;
  numberPhone2: string | null;
  andress: Address;
  functionsProviders: FunctionsProviders;
  contratacaoDemissao: ContratacaoDemissao[];
}


export default function page() {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [provider, setProvider] = useState<ProviderData[] | null>(null);

  const { slug } = useParams()


  async function getProvider() {
    try {
      const { data } = await axiosApi.get(`/providers/${slug}`);      
      setProvider(data);
    } catch (error) {
      console.log("Erro ao buscar dados.", error);
    }
  }

  useEffect(() => {
    console.log(slug);
    getProvider()
  }, [])


  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='px-3 space-y-2 w-full'>
        <h1 className='text-xl font-bold'>Perfil</h1>
        <div className='space-y-2'>
          <div className='w-full flex items-center justify-center'>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" isBordered radius="full" color="primary" name='teste' className='w-20 h-20 text-large' />
          </div>
          <div className='flex justify-between items-center'>
            <Switch
              defaultSelected
              size="lg"
              color="primary"
              startContent={<TiLockClosed />}
              endContent={<TiLockOpen />}
              isSelected={isSelected}
              onValueChange={setIsSelected}
            >
              Editar
            </Switch>
            {isSelected === false ?
              <Button
                color="primary"
                size='sm'
              >
                Enviar
              </Button>
              : <></>}
          </div>
          <div>
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Nome Completo"
              defaultValue='João da silva sauro'
            />
          </div>
          <div className='flex space-x-2'>
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="CPF"
              defaultValue='000.000.000-00'
            />
            <Input
              isReadOnly={isSelected === true}
              type='date'
              label="Data Nascimento"
              defaultValue='25/12/2022'
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="RG"
              defaultValue='00.00000-00'
            />
          </div>
          <div className='flex space-x-2'>
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Pai"
              defaultValue='João da silva sauro'
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Mãe"
              defaultValue='João da silva sauro'
            />
          </div>
          <div className='space-y-2'>
            <h1 className='text-xl font-bold'>Endereço</h1>
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Rua"
              defaultValue='rua dos jaguatiricas'
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Complemento"
              defaultValue='1º andar'
            />
          </div>
          <div className='flex space-x-2' >
            <Input
              isReadOnly={isSelected === true}
              type='number'
              label="Numero"
              defaultValue='199'
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Cidade"
              defaultValue='Salvador'
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Estado"
              defaultValue='Bahia'
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Bairro"
              defaultValue='Nova brasilia'
            />
          </div>
        </div>
      </div>
    </div>
  )
}