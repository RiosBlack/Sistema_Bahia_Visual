"use Client"
import { useState, useEffect } from "react";
import { CgMathPlus } from "react-icons/cg";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import axiosApi from "@/services/axiosConfig";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebcamComp from "../webcamComp";
import useWebcamStore from "@/context/webcamStore";


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
  const [functions, setFunctions] = useState([])
  const [functionsPostValue, setFunctionsPostValue] = useState('');
  const { v4: uuidv4 } = require('uuid');

  //validations
  const [nameValid, setNameValid] = useState(false)
  const [surnameValid, setSurnameValid] = useState(false)
  const [cpfValid, setCpfValid] = useState(false)
  const [motherValid, setMotherValid] = useState(false)
  const [numberPhone1Valid, setNumberPhone1Valid] = useState(false)
  const [numberPhone2Valid, setNumberPhone2Valid] = useState(false)

  //Loading
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  //context
  const urlImage = useWebcamStore((state) => state.urlImage)
  const nameImageCloud = useWebcamStore((state) => state.nameImageCloud)
  const setUrlImage = useWebcamStore((state) => state.setUrlImage)
  const setNameImageCloud = useWebcamStore((state) => state.setNameImageCloud)

  //Cadastrar
  const [stateDisableButtonCadastar, setStateDisableButtonCadastrar] = useState(true)

  function validCampos() {
    if (name && surname && cpf && birthday && rg && motherName && numberPhone1
      && zipCode && road && number && city && state && neighborhood) {
      setStateDisableButtonCadastrar(false)
    } else {
      setStateDisableButtonCadastrar(true)
    }
  }

  function validatorNames(value: string, funcao: Function) {
    if (value == null || value.length > 3) {
      funcao(false)
    } else {
      funcao(true)
    }
  }

  function validatorCpf(value: string) {
    let cpfFormat = value.replace(/\D/g, '');
    cpfFormat = cpfFormat.slice(0, 3) + '.' + cpfFormat.slice(3, 6) + '.' + cpfFormat.slice(6, 9) + '-' + cpfFormat.slice(9);
    setCpf(cpfFormat);

    testaCPF(cpf)

    function testaCPF(cpf: any) {
      cpf = cpf.replace(/\D/g, '');
      var Soma;
      var Resto;
      Soma = 0;
      if (cpf == "00000000000") return setCpfValid(false);

      for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(cpf.substring(9, 10))) return setCpfValid(false);

      Soma = 0;
      for (var i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(cpf.substring(10, 11))) return setCpfValid(false);
      return setCpfValid(true);
    }
  }

  function validatorTel1(value: string) {
    let telFormat = value.replace(/\D/g, '');
    if (telFormat.length === 10) {
      telFormat = '(' + telFormat.slice(0, 2) + ')' + telFormat.slice(2, 7) + '-' + telFormat.slice(7, 10);
      setNumberPhone1(telFormat);
      setNumberPhone1Valid(true)
    } else {
      setNumberPhone1Valid(false)
    }
  }

  function validatorTel2(value: string) {
    let telFormat = value.replace(/\D/g, '');
    if (telFormat.length === 10) {
      telFormat = '(' + telFormat.slice(0, 2) + ')' + telFormat.slice(2, 7) + '-' + telFormat.slice(7, 10);
      setNumberPhone2(telFormat);
      setNumberPhone2Valid(true)
    } else {
      setNumberPhone2Valid(false)
    }
  }

  function buscaCep(cep: string) {
    const axios = require('axios');
    getUser()
    async function getUser() {
      try {
        const { data } = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        setCity(data.city);
        setRoad(data.street);
        setNeighborhood(data.neighborhood);
        setState(data.state)
      } catch (error) {
        toast.error('Informe um cep valido.')
      }
    }
  }

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

  function submit() {
    axiosApi.post('/providers', {
      urlImage: urlImage,
      nameImageCloud: nameImageCloud,
      name: name,
      surname: surname,
      fatherName: fatherName,
      motherName: motherName,
      birthday: birthday,
      cpf: cpf,
      rg: rg,
      naturalness: naturalness,
      numberPhone1: numberPhone1,
      numberPhone2: numberPhone2,
      andress: {
        zipCode: zipCode,
        road: road,
        number: number,
        neighborhood: neighborhood,
        complement: complement,
        city: city,
        state: state
      },
      functionsProviders: {
        functionProviders: functionsPostValue
      }
    })
      .then(function (response) {
        setLoadingSubmit(true);
        if (response.status === 200) {
          setLoadingSubmit(false);
          setUrlImage('')
          setNameImageCloud('')
          setName('')
          setSurname('')
          setFatherName('')
          setMotherName('')
          setBirthday('')
          setCpf('')
          setRg('')
          setNaturalness('')
          setNumberPhone1('')
          setNumberPhone2('')
          setZipCode('')
          setRoad('')
          setNumber('')
          setNeighborhood('')
          setComplement('')
          setCity('')
          setState('')
          setFunctionsPostValue('');
          toast.success("Prestador cadastrado com sucesso!");
        }
      })
      .catch(function (e) {
        toast.error('Erro ao cadastrar prestador.');
        console.log(e);
      })
  }

  useEffect(() => {
    buscaFunctions()
  }, [])

  return (
    <>
      <Button onPress={onOpen} color="primary" endContent={<CgMathPlus />}>Adicionar Prestador</Button>
      <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange} placement="bottom-center" scrollBehavior="outside">
        <ModalContent>
          {(onClose) =>
            <>
              <ModalHeader className="flex flex-col gap-1">Adicionar novo prestador</ModalHeader>
              <ModalBody className="overflow-y-hidden">
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
                  <WebcamComp />
                </div>
                <div className='flex space-x-2'>
                  <Input
                    isRequired
                    isClearable
                    type='text'
                    label="Nome"
                    value={name}
                    onClear={() => setName('')}
                    onChange={e => (setName(e.target.value), validatorNames(e.target.value, setNameValid), validCampos())}
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
                    onChange={e => (setSurname(e.target.value), validatorNames(e.target.value, setSurnameValid), validCampos())}
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
                    onChange={e => (setCpf(e.target.value), validatorCpf(e.target.value), validCampos())}
                    isInvalid={cpfValid}
                    errorMessage={cpfValid && "Digite um cpf valido"}
                    placeholder="000.000.000-00"
                  />
                  <Input
                    isRequired
                    type='date'
                    label="Data Nascimento"
                    placeholder="DD/MM/AAAA"
                    value={birthday}
                    onClear={() => setBirthday('')}
                    onChange={e => (setBirthday(e.target.value), validCampos())}
                  />
                  <Input
                    isRequired
                    type='text'
                    label="RG"
                    value={rg}
                    onClear={() => setRg('')}
                    onChange={e => (setRg(e.target.value), validCampos())}
                  />
                </div>
                <div className='flex space-x-2'>
                  <Input
                    type='text'
                    label="Pai"
                    value={fatherName}
                    onClear={() => setFatherName('')}
                    onChange={e => (setFatherName(e.target.value), validCampos())}
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Mãe"
                    value={motherName}
                    onClear={() => setMotherName('')}
                    onChange={e => (setMotherName(e.target.value), validatorNames(e.target.value, setMotherValid), validCampos())}
                    isInvalid={motherValid}
                    errorMessage={motherValid && "O sobrenome tem de ser maior que 3 caracteres"}
                  />
                </div>
                <div className="flex space-x-2">
                  <Input
                    type='text'
                    label="Naturalidade"
                    value={naturalness}
                    onClear={() => setNaturalness('')}
                    onChange={e => (setNaturalness(e.target.value), validCampos())}
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Telefone 1"
                    value={numberPhone1}
                    onClear={() => setNumberPhone1('')}
                    onChange={e => (setNumberPhone1(e.target.value), validatorTel1(e.target.value), validCampos())}
                    isInvalid={numberPhone1Valid!}
                    errorMessage={numberPhone1Valid! && "O numero tem de ser maior que 10 caracteres"}
                  />
                  <Input
                    type='text'
                    label="Telefone 2"
                    value={numberPhone2}
                    onClear={() => setNumberPhone2('')}
                    onChange={e => (setNumberPhone2(e.target.value), validatorTel2(e.target.value), validCampos())}
                    isInvalid={numberPhone2Valid!}
                    errorMessage={numberPhone2Valid! && "O numero tem de ser maior que 10 caracteres"}
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
                      value={zipCode}
                      onClear={() => setZipCode('')}
                      onChange={e => (setZipCode(e.target.value), validCampos())}
                    />
                    <Button
                      color="primary"
                      onClick={e => (e.preventDefault, buscaCep(zipCode))}
                    >
                      Consultar
                    </Button>
                  </div>
                  <Input
                    isRequired
                    type='text'
                    label="Rua"
                    value={road}
                    onClear={() => setRoad('')}
                    onChange={e => (setRoad(e.target.value), validCampos())}
                  />
                  <Input
                    type='text'
                    label="Complemento"
                    value={complement}
                    onClear={() => setComplement('')}
                    onChange={e => (setComplement(e.target.value), validCampos())}
                  />
                </div>
                <div className='flex space-x-2' >
                  <Input
                    isRequired
                    type='number'
                    label="Numero"
                    value={number}
                    onClear={() => setNumber('')}
                    onChange={e => (setNumber(e.target.value), validCampos())}
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Cidade"
                    value={city}
                    onClear={() => setCity('')}
                    onChange={e => (setCity(e.target.value), validCampos())}
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Estado"
                    value={state}
                    onClear={() => setState('')}
                    onChange={e => (setState(e.target.value), validCampos())}
                  />
                  <Input
                    isRequired
                    type='text'
                    label="Bairro"
                    value={neighborhood}
                    onClear={() => setNeighborhood('')}
                    onChange={e => (setNeighborhood(e.target.value), validCampos())}
                  />
                </div>
                <div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                      label="Selecione uma função"
                      className="max-w-xs"
                      isRequired
                      selectedKeys={[functionsPostValue]}
                      onChange={e => (setFunctionsPostValue(e.target.value), validCampos())}
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
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" isDisabled={stateDisableButtonCadastar} isLoading={loadingSubmit} onPress={e => submit()}>
                  Cadastrar
                </Button>
              </ModalFooter>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
