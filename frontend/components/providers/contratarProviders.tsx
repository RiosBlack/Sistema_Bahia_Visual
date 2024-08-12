import { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link, User, Select, SelectItem, Input } from "@nextui-org/react";
import { CiCircleCheck } from "react-icons/ci";
import axiosApi from "@/services/axiosConfig";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  nome: string,
  cpf: string,
  imagem: string,
}

export default function ContratarProviders({ nome, cpf, imagem }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [functions, setFunctions] = useState([])
  const [functionsPostValue, setFunctionsPostValue] = useState('');
  const [diary, setDiary] = useState('');
  const [stateDisableButtonContratar, setStateDisableButtonContratar] = useState(true)
  const [loadingSubmit, setLoadingSubmit] = useState(false)

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

  function validCampos() {
    if (cpf && diary != '' && functionsPostValue != '') {
      setStateDisableButtonContratar(false)
    } else {
      setStateDisableButtonContratar(true)
    }
  }

  function contratar() {
    axiosApi.post('/addAndDismiss', {
      cpf: cpf,
      diary: diary,
      functionContratado: functionsPostValue
    })
      .then(function (response) {
        setLoadingSubmit(true);
        if (response.status === 200) {
          setLoadingSubmit(false);
          setFunctionsPostValue('')
          setDiary('')
          toast.success("Prestador contratado com sucesso!");
        }
      })
      .catch(function (e) {
        toast.error(e.response.data.body);
        console.log(e.response.data);
      })
  }

  useEffect(() => {
    buscaFunctions()
    validCampos()
  }, [])

  return (
    <>
      <div className="relative flex pl-6">
        <Link onPress={onOpen}>
          <span className="text-lg text-green-400 cursor-pointer active:opacity-50">
            <CiCircleCheck />
          </span>
        </Link>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contratar prestador</ModalHeader>
              <ModalBody>
                <div className="w-full flex justify-center items-center">
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
                </div>
                <User
                  className='w-full justify-start'
                  avatarProps={{ radius: "lg", src: imagem }}
                  description={cpf}
                  name={nome}
                >
                  {nome}
                </User>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Select
                    label="Selecione uma função"
                    className="w-full"
                    isRequired
                    selectedKeys={[functionsPostValue]}
                    onChange={e => (setFunctionsPostValue(e.target.value), validCampos())}
                    size='sm'
                    radius='lg'
                  >
                    {functions.map((item: any) => (
                      <SelectItem
                        key={item.functionProviders}
                        value={item.functionsProvidersPost}
                      >
                        {item.functionProviders}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <Input
                  type="number"
                  label="Diária"
                  placeholder="0,00"
                  labelPlacement="outside"
                  onChange={e => (setDiary(e.target.value), validCampos())}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">R$</span>
                    </div>
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="success" onPress={contratar} isDisabled={stateDisableButtonContratar} isLoading={loadingSubmit}>
                  Contratar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}