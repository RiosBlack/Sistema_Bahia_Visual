import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";
import { FaEye } from "react-icons/fa6";


export default function SignatureModalView() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (
    <>
      <Button isIconOnly variant="light" size="md" className="text-lg text-default-400 cursor-pointer active:opacity-50" onPress={onOpen}>
        <FaEye className='text-orange-600' />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Assinatura</ModalHeader>
              <ModalBody className="flex justify-center items-center">
                Data: {'aqui vai a data'}
                <Image
                  about="nome da imagem"
                  src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
                  fill
                  sizes="100vw"
                  quality={100}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
