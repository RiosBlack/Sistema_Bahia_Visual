"use Client"
import { useState, useRef, useCallback, useContext, useEffect } from "react";
import { CgMathPlus } from "react-icons/cg";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Input } from "@nextui-org/react";
import Webcam from "react-webcam";
import { FaCamera } from "react-icons/fa";
import { Select, SelectItem } from "@nextui-org/react";
import { FunctionsContext } from "@/context/functionsContext";
import { testaCPF } from "@/services/validations/cpfValidations";
export default function ProvidersAddModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { allFunctionsProviders, getFunctionsProviders } = useContext(FunctionsContext);

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

  //validations
  const [nameValid, setNameValid] = useState(false)
  const [surnameValid, setSurnameValid] = useState(false)
  const [cpfValid, setCpfValid] = useState(false)

  function validatorNameAndSurname(value: string, funcao: Function) {
    if (value == null || value.length > 3) {
      funcao(false)
    }else{
      funcao(true)
    }
  }

function validatorCpf(value: string) {
    let cpfFormat = value.replace(/\D/g, '');
    cpfFormat = cpfFormat.slice(0, 3) + '.' + cpfFormat.slice(3, 6) + '.' + cpfFormat.slice(6, 9) + '-' + cpfFormat.slice(9);
    setCpf(cpfFormat);

    let isValid = testaCPF(cpf)
    if (isValid === false) {
      setCpfValid(true)
    }else{
      setCpfValid(false)
    }
  }

  //webcam
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({ width: 854, height: 480 });
    setImgSrc(imageSrc);
    console.log(imageSrc);

  }, [webcamRef, setImgSrc]);

  function ifFunctions() {
    if (allFunctionsProviders == null || allFunctionsProviders == undefined) {
      getFunctionsProviders()
    } else {
      return allFunctionsProviders;
    }
  }

  useEffect(() => {
    ifFunctions()
    console.log(allFunctionsProviders);
  }, [ifFunctions])

  useEffect(() => {
    console.log(cpfValid);
  }, [cpfValid])

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
                    isRequired
                    isClearable
                    type='text'
                    label="Nome"
                    value={name}
                    onClear={() => setName('')}
                    onChange={e => (setName(e.target.value), validatorNameAndSurname(e.target.value, setNameValid))}
                    isInvalid={nameValid}
                    errorMessage={nameValid && "O nome tem de ser maior que 3 caracteres"}
                  />
                  <Input
                    isRequired
                    isClearable
                    type='text'
                    label="Sobrenome"
                    value={surname}
                    onClear={() => setSurname('')}
                    onChange={e => (setSurname(e.target.value), validatorNameAndSurname(e.target.value, setSurnameValid))}
                    isInvalid={surnameValid}
                    errorMessage={surnameValid && "O sobrenome tem de ser maior que 3 caracteres"}
                  />
                </div>
                <div className='flex space-x-2'>
                  <Input
                    isRequired
                    isClearable
                    type='text'
                    label="CPF"
                    value={cpf}
                    onClear={() => setCpf('')}
                    onChange={e => (setCpf(e.target.value), validatorCpf(e.target.value))}
                    isInvalid={cpfValid}
                    errorMessage={cpfValid && "Digite um cpf valido"}
                    placeholder="000.000.000-00"
                  />
                  <Input
                    isRequired
                    type='date'
                    label="Data Nascimento"
                    placeholder="DD/MM/AAAA"
                  />
                  <Input
                    isRequired
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
                    isRequired
                    type='text'
                    label="Mãe"
                  />
                </div>
                <div className='space-y-2'>
                  <h1 className='text-xl font-bold'>Endereço</h1>
                  <div className="flex space-x-2">
                    <Input
                      isRequired
                      type='number'
                      label="Cep"
                      placeholder="00.000-000"
                    />
                    <Button color="primary">
                      Consultar
                    </Button>
                  </div>
                  <Input
                    isRequired
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
                    isRequired
                    type='number'
                    label="Numero"
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Cidade"
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Estado"
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Bairro"
                  />
                </div>
                <div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                      label="Selecione uma função"
                      className="max-w-xs"
                    >
                      {allFunctionsProviders.map((item) => (
                        <SelectItem key={item.functionProviders} value={item.functionProviders}>
                          {item.functionProviders}
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
