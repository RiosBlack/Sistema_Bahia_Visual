import React from "react";
import { CgMathPlus } from "react-icons/cg";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Input } from "@nextui-org/react";

export default function ProvidersAddModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                  <Avatar size="lg" name="Junior" />
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
