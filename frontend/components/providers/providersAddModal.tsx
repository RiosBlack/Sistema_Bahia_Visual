"use Client"
import { useState, useRef, useCallback } from "react";
import { CgMathPlus } from "react-icons/cg";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Input } from "@nextui-org/react";
import Webcam from "react-webcam";
import { FaCamera } from "react-icons/fa";
import { Select, SelectItem } from "@nextui-org/react";
export default function ProvidersAddModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [motherName, setMotherName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [cpf, setCpf] = useState('')
  const [rg, setRg] = useState('')
  const [naturalness, setNaturalness] = useState('')
  const [numberPhone1, setNumberPhone1] = useState('')
  const [numberPhone2, setNumberPhone2] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [road, setRoad] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [complement, setComplement] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [functionsProvidersPost, setFunctionsProvidersPost] = useState('')

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({ width: 854, height: 480 });
    setImgSrc(imageSrc);
    console.log(imageSrc);

  }, [webcamRef, setImgSrc]);


  return (
    <>
      <Button onPress={onOpen} color="primary" endContent={<CgMathPlus />}>Adicionar Prestador</Button>
      <Modal isOpen={isOpen} size="4xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) =>
            <>
              <ModalHeader className="flex flex-col gap-1">Adicionar novo prestador</ModalHeader>
              <ModalBody className="overflow-y-hidden">
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
                <div className='flex space-x-2'>
                  <Input
                    type='text'
                    label="Nome"
                  />
                  <Input
                    type='text'
                    label="Sobrenome"
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
                <div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                      label="Select an animal"
                      className="max-w-xs"
                    >
                      {functionsProviders.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
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
