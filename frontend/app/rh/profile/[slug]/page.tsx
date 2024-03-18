'use client'
import Sidebar from '@/components/dashboard/sidebar'
import { Avatar, Button, Input, Select, SelectItem, Switch } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { TiLockOpen, TiLockClosed } from "react-icons/ti";
import axiosApi from '@/services/axiosConfig';
import { useParams } from 'next/navigation'
import { FaRegTrashAlt } from 'react-icons/fa';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebcamComp from '@/components/webcamComp';
import useWebcamStore from '@/context/webcamStore';

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
  const [provider, setProvider] = useState<ProviderData | null>(null);
  const [functions, setFunctions] = useState([])
  const [functionSelect, setFunctionSelect] = useState('')

  const urlImage = useWebcamStore((state) => state.urlImage)
  const nameImageCloud = useWebcamStore((state) => state.nameImageCloud)
  const setUrlImage = useWebcamStore((state) => state.setUrlImage)
  const setNameImageCloud = useWebcamStore((state) => state.setNameImageCloud)

  const { slug } = useParams()

  function buscaFunctions() {
    getFunction()
    async function getFunction() {
      try {
        const { data } = await axiosApi.get('/functions');
        setFunctions(data)
      } catch (error) {
        alert(error);
      }
    }
  }


  async function getProvider() {
    try {
      const { data } = await axiosApi.get(`/providers/${slug}`);
      setProvider(data);
      setFunctionSelect(data?.functionsProviders.functionProviders);
      if (data.nameImageCloud == '' || data.nameImageCloud == null) {
        setNameImageCloud('')
      } else { setNameImageCloud(data.nameImageCloud) }
      if (data.urlImage == '' || data.urlImage == null) {
        setUrlImage('')
      } else { setUrlImage(data.urlImage) }
    } catch (error) {
      console.log("Erro ao buscar dados.", error);
    }
  }

  function dellImage(nameId: string) {
    if (confirm("Tem certeza que deseja excluir essa imagem?")) {
      axiosApi.post('/upload/provider/delete', nameId, {
        headers: {
          'Content-Type': 'text/plain'
        }
      })
        .then(function (response) {
          if (response.status === 200) {
            toast.success("Imagem excluida com sucesso!")
            setTimeout(() => {          
              window.location.reload()
            }, 5000);
          }
        })
        .catch(function (error) {
          console.error(error);
          toast.error("Erro ao excluir imagem!");
        });
    }
  }

  function submit() {
    axiosApi.put('/providers',{
      urlImage: urlImage,
      nameImageCloud: nameImageCloud,
      name: provider.name,
      surname: provider.surname,
      fatherName: provider.fatherName,
      motherName: provider.motherName,
      birthday: provider.birthday,
      cpf: provider.cpf,
      rg: provider.rg,
      naturalness: provider.naturalness,
      numberPhone1: provider.numberPhone1,
      numberPhone2: provider.numberPhone2,
      andress: {
        zipCode: provider.andress.zipCode,
        road: provider.andress.road,
        number: provider.andress.number,
        neighborhood: provider.andress.neighborhood,
        complement: provider.andress.complement,
        city: provider.andress.city,
        state: provider.andress.state
      },
      functionsProviders: {
        functionProviders: provider.functionsProviders.functionProviders
      }
    }).then(function (response) {
      if (response.status === 200) {
        toast.success("Prestador editado com sucesso!");
        setTimeout(() => {          
          window.location.reload()
        }, 5000);
      }}).catch(function (e) {
        toast.error('Erro ao cadastrar prestador.');
        console.log(e);
      })
  }

  useEffect(() => {
    getProvider()
    buscaFunctions()
  }, [])


  return (
    <div className='h-full w-full flex'>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Sidebar />
      <div className='px-3 space-y-2 w-full'>
        <h1 className='text-xl font-bold'>Perfil</h1>
        <div className='space-y-2'>
          <div className='w-full grid justify-items-center space-y-2'>
            {!provider?.urlImage == '' || !provider?.urlImage == null || isSelected ?
              <>
                <Avatar src={provider?.urlImage} isBordered radius="full" color="primary" name='teste' className='w-32 h-32 text-large' />
                {isSelected === false ?
                  <Button
                    isIconOnly
                    onPress={() => dellImage(provider.nameImageCloud)}
                    color="danger"
                  ><FaRegTrashAlt /></Button>
                  : <></>}
              </>
              : <WebcamComp />
            }
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
                onClick={()=>submit()}
              >
                Salvar
              </Button>
              : <></>}
          </div>
          <div className='flex space-x-1'>
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Nome"
              value={provider?.name}
              onChange={(e) => {
                let update = { ...provider }
                update.name = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Sobrenome"
              value={provider?.surname}
              onChange={(e) => {
                let update = { ...provider }
                update.surname = e.target.value
                setProvider(update);
              }}
            />
          </div>
          <div className='flex space-x-2'>
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="CPF"
              value={provider?.cpf}
              onChange={(e) => {
                let update = { ...provider }
                update.cpf = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='date'
              label="Data Nascimento"
              placeholder="DD/MM/AAAA"
              value={provider?.birthday}
              onChange={(e) => {
                let update = { ...provider }
                update.birthday = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="RG"
              value={provider?.rg}
              onChange={(e) => {
                let update = { ...provider }
                update.rg = e.target.value
                setProvider(update);
              }}
            />
          </div>
          <div className='flex space-x-2'>
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Pai"
              value={provider?.fatherName}
              onChange={(e) => {
                let update = { ...provider }
                update.fatherName = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Mãe"
              value={provider?.motherName}
              onChange={(e) => {
                let update = { ...provider }
                update.motherName = e.target.value
                setProvider(update);
              }}
            />
          </div>
          <div className='space-y-2'>
            <h1 className='text-xl font-bold'>Endereço</h1>
            <Input
              isReadOnly={isSelected === true}
              type='number'
              label="cep"
              value={provider?.andress.zipCode}
              onChange={(e) => {
                let update = { ...provider }
                update.andress.zipCode = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Rua"
              value={provider?.andress.road}
              onChange={(e) => {
                let update = { ...provider }
                update.andress.road = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Complemento"
              value={provider?.andress.complement}
              onChange={(e) => {
                let update = { ...provider }
                update.andress.complement = e.target.value
                setProvider(update);
              }}
            />
          </div>
          <div className='flex space-x-2' >
            <Input
              isReadOnly={isSelected === true}
              type='number'
              label="Numero"
              value={provider?.andress.number}
              onChange={(e) => {
                let update = { ...provider }
                update.andress.number = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Cidade"
              value={provider?.andress.city}
              onChange={(e) => {
                let update = { ...provider }
                update.andress.city = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Estado"
              value={provider?.andress.state}
              onChange={(e) => {
                let update = { ...provider }
                update.andress.state = e.target.value
                setProvider(update);
              }}
            />
            <Input
              isReadOnly={isSelected === true}
              type='text'
              label="Bairro"
              value={provider?.andress.neighborhood}
              onChange={(e) => {
                let update = { ...provider }
                update.andress.neighborhood = e.target.value
                setProvider(update);
              }}
            />
          </div>
          <div>
            <h1 className='text-xl font-bold'>Função</h1>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Select
                label="Selecione uma função"
                isDisabled={isSelected === true}
                className="max-w-xs"
                placeholder={functionSelect}
                onChange={(e) => {
                  let update = { ...provider }
                  let value = e.target.value
                  let valueConvert = value.toString()
                  update.functionsProviders.functionProviders = valueConvert
                  setFunctionSelect(value)
                  setProvider(update);
                }}
              >
                {functions.map((item) => (
                  <SelectItem
                    key={item.functionProviders}
                    value={item.functionsProvidersPost}
                  >
                    {item.functionProviders}
                  </SelectItem>
                ))}
              </Select>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}