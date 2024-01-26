"use Client"
import { useState, useRef, useCallback } from "react";
import { CgMathPlus } from "react-icons/cg";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Input } from "@nextui-org/react";
import Webcam from "react-webcam";
import { FaCamera } from "react-icons/fa";

export default function ProvidersAddModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({width: 854, height: 480});
    setImgSrc(imageSrc);
    console.log(imageSrc);
    
  }, [webcamRef, setImgSrc]);


  return (
    <>
      <Button onPress={onOpen} color="primary" endContent={<CgMathPlus />}>Adicionar Prestador</Button>
      <Modal isOpen={isOpen} size="5xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) =>
            <>
              <ModalHeader className="flex flex-col gap-1">Adicionar novo prestador</ModalHeader>
              <ModalBody>
                <div className="w-full flex justify-center items-center">
                  {imgSrc === null
                    ?
                    <div className="grid justify-items-center content-center space-y-1 relative">
                      <Webcam
                        className="rounded-full w-44 h-44 border-2 border-blue-600 flex justify-center items-center"
                        screenshotFormat="image/png"
                        ref={webcamRef}
                        audio={false}
                      />
                      <div className="w-1 h-1 bg-red-500 rounded-full absolute top-20"></div>
                      <Button isIconOnly onPress={capture} color="primary" endContent={<FaCamera />}></Button>
                    </div>
                    :
                    <Avatar className="w-28 h-28 text-large" src={imgSrc || ''} />
                  }
                </div>
                <div>
                  <Input
                    type='text'
                    label="Nome Completo"
                  />
                </div>
                <div className='flex space-x-2'>
                  <Input
                    type='text'
                    label="CPF"
                  />
                  <Input
                    type='date'
                    label="Data Nascimento"
                  />
                  <Input
                    type='text'
                    label="RG"
                  />
                </div>
                <div className='flex space-x-2'>
                  <Input
                    type='text'
                    label="Pai"
                  />
                  <Input
                    type='text'
                    label="Mãe"
                  />
                </div>
                <div className='space-y-2'>
                  <h1 className='text-xl font-bold'>Endereço</h1>
                  <Input
                    type='text'
                    label="Rua"
                  />
                  <Input
                    type='text'
                    label="Complemento"
                  />
                </div>
                <div className='flex space-x-2' >
                  <Input
                    type='number'
                    label="Numero"
                  />
                  <Input
                    type='text'
                    label="Cidade"
                  />
                  <Input
                    type='text'
                    label="Estado"
                  />
                  <Input
                    type='text'
                    label="Bairro"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
