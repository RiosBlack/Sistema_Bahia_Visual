import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import axiosApi from "@/services/axiosConfig";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Props = {
  cpf: string | string[]
}

export default function ButtonLancarDiaria({ cpf }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [date, setDate] = useState('')
  const [entrada1, setEntrada1] = useState('')
  const [intervaloEntrada1, setIntervaloEntrada1] = useState('')
  const [saidaEntrada1, setSaidaEntrada1] = useState('')
  const [saida1, setSaida1] = useState('')
  const [entrada2, setEntrada2] = useState('')
  const [intervaloEntrada2, setIntervaloEntrada2] = useState('')
  const [saidaEntrada2, setSaidaEntrada2] = useState('')
  const [saida2, setSaida2] = useState('')

  const [loadingSubmit, setLoadingSubmit] = useState(false)

  function submit() {
    axiosApi.post('/timeSheet', {
      date: date,
      cpf: cpf,
      entradaTurnoDia: entrada1,
      intervaloTurnoDia: intervaloEntrada1,
      retornoTurnoDia: saidaEntrada1,
      saidaTurnoDia: saida1,
      entradaTurnoNoite: entrada2,
      intervaloTurnoNoite: intervaloEntrada2,
      retornoTurnoNoite: saidaEntrada2,
      saidaTurnoNoite: saida2
    })
      .then(function (response) {
        setLoadingSubmit(true);
        if (response.status === 200) {
          setEntrada1('')
          setIntervaloEntrada1('')
          setSaidaEntrada1('')
          setSaida1('')
          setEntrada2('')
          setIntervaloEntrada2('')
          setSaidaEntrada2('')
          setSaida2('')
          toast.success("Diária lançada com sucesso!");
          setLoadingSubmit(false);
        }
      })
      .catch(function (e) {
        toast.error('Erro lançar diária.');
        console.log(e);
      })
  }


  return (
    <>
      <Button onPress={onOpen} color="warning" variant='shadow'>
        Lançar diária
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Laçamento de diária</ModalHeader>
              <ModalBody>
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
                <Input
                  label={"Data"}
                  type="date"
                  onChange={e => setDate(e.target.value)}
                />
                <div className="flex w-full justify-between items-center space-x-2">
                  <div className="w-full">
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaSun />
                        <h1>Turno da manhã</h1>
                      </div>
                      <Input
                        type="time"
                        label="Entrada"
                        onChange={e => setEntrada1(e.target.value + ":00")}
                      />
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaSun />
                        <h1>Intervalo</h1>
                      </ div>
                      <div className="flex space-x-1">
                        <Input
                          type="time"
                          label="Entrada"
                          onChange={e => setIntervaloEntrada1(e.target.value + ":00")} />
                        <Input
                          type="time"
                          label="Saída"
                          onChange={e => setSaidaEntrada1(e.target.value + ":00")}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaSun />
                        <h1>Turno da manhã</h1>
                      </div>
                      <Input
                        type="time"
                        label="Saída"
                        onChange={e => setSaida1(e.target.value + ":00")}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaMoon />
                        <h1>Turno da noite</h1>
                      </div>
                      <Input
                        type="time"
                        label="Saída"
                        onChange={e => setEntrada2(e.target.value + ":00")}
                      />
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaMoon />
                        <h1>Intervalo</h1>
                      </ div>
                      <div className="flex space-x-1">
                        <Input
                          type="time"
                          label="Saída"
                          onChange={e => setIntervaloEntrada2(e.target.value + ":00")}
                        />
                        <Input
                          type="time"
                          label="Saída"
                          onChange={e => setSaidaEntrada2(e.target.value + ":00")}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaMoon />
                        <h1>Turno da noite</h1>
                      </div>
                      <Input
                        type="time"
                        label="Saída"
                        onChange={e => setSaida2(e.target.value + ":00")}
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onPress={e => submit()} isLoading={loadingSubmit}>
                  Lançar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}