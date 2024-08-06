import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, DatePicker, TimeInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

export default function ButtonLancarDiaria() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                <DatePicker
                  label={"Data"}
                  defaultValue={parseDate("2024-04-30")}
                  placeholderValue={new CalendarDate(1995, 11, 6)}
                />
                <div className="flex w-full justify-between items-center space-x-2">
                  <div className="w-full">
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaSun />
                        <h1>Turno da manhã</h1>
                      </div>
                      <TimeInput label="Entrada" />
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaSun />
                        <h1>Intervalo</h1>
                      </ div>
                      <div className="flex space-x-1">
                        <TimeInput label="Entrada" />
                        <TimeInput label="Saída" />
                      </div>
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaSun />
                        <h1>Turno da manhã</h1>
                      </div>
                      <TimeInput label="Saida" />
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaMoon />
                        <h1>Turno da noite</h1>
                      </div>
                      <TimeInput label="Entrada" />
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaMoon />
                        <h1>Intervalo</h1>
                      </ div>
                      <div className="flex space-x-1">
                        <TimeInput label="Entrada" />
                        <TimeInput label="Saída" />
                      </div>
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <FaMoon />
                        <h1>Turno da noite</h1>
                      </div>
                      <TimeInput label="Saida" />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onPress={onClose}>
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