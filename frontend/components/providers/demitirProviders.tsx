import { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link, User, Input, Textarea } from "@nextui-org/react";
import { BsXOctagon } from "react-icons/bs";
import axiosApi from "@/services/axiosConfig";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  nome: string,
  cpf: string,
  imagem: string,
  contratacaoDate: Date | null,
  diary: string | null,
  functionContratado: string | null
}

export default function DemitirProviders({ nome, cpf, imagem, contratacaoDate, diary, functionContratado }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [motivo, setMotivo] = useState('')
  const [stateDisableButtonContratar, setStateDisableButtonContratar] = useState(true)
  const [loadingSubmit, setLoadingSubmit] = useState(false)



  function validCampos() {
    if (motivo != '') {
      setStateDisableButtonContratar(false)
    } else {
      setStateDisableButtonContratar(true)
    }
  }

  function demitir() {
    axiosApi.post('addAndDismiss/dismiss', {
      motivoDemissao: motivo,
      cpf: cpf
    })
      .then(function (response) {
        setLoadingSubmit(true);
        if (response.status === 200) {
          setLoadingSubmit(false);
          setMotivo('')
          toast.success("Prestador contratado com sucesso!");
        }
      })
      .catch(function (e) {
        toast.error(e.response.data.body);
        console.log(e.response.data);
      })
  }

  useEffect(() => {
    validCampos()
  }, [])

  return (
    <>
      <div className="relative flex pl-6">
        <Link onPress={onOpen}>
          <span className="text-lg text-red-500 cursor-pointer active:opacity-50">
            <BsXOctagon />
          </span>
        </Link>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Demitir prestador</ModalHeader>
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

                <Input
                  isDisabled
                  type="text"
                  label="Função"
                  defaultValue={functionContratado}
                  className="max-w-xs"
                />
                <Input
                  isDisabled
                  type="text"
                  label="Data da contratação"
                  defaultValue={contratacaoDate.toString()}
                  className="max-w-xs"
                />
                <Input
                  type="number"
                  label="Diária"
                  placeholder={diary}
                  labelPlacement="outside"
                  isDisabled
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">R$</span>
                    </div>
                  }
                />
                <Textarea
                  label="Motivo da demissão"
                  placeholder="Escreva o motivo que o prestador está sendo demitido"
                  className="max-w-xs"
                  onChange={e => setMotivo(e.target.value)}
                />
                <p>{motivo}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={demitir} isDisabled={stateDisableButtonContratar} isLoading={loadingSubmit}>
                  Demitir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}