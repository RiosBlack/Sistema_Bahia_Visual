import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { LuPenTool } from "react-icons/lu";
import SignatureCanvas from 'react-signature-canvas'


export default function SignatureModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

//Assinatura
  const [sign,setSign] = useState<SignaturePad | null>(null)
  const [url,setUrl] = useState<string | null>(null);

  function handleClear(): void {
      sign!.clear()
      setUrl('')
  }
  function handleGenerate(){
      setUrl(sign!.getTrimmedCanvas().toDataURL('image/png'))
  }



  return (
    <>
      <Button isIconOnly variant="light" size="md" onPress={onOpen}>
        <LuPenTool color='#E83F7A' />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Assine no quadro abaixo</ModalHeader>
              <ModalBody>
                <SignatureCanvas penColor='red'
                  canvasProps={{ className: 'sigCanvas'}}
                  ref={data=>setSign(data)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClear}>
                  Limpar
                </Button>
                <Button color="primary" onPress={handleGenerate}>
                  Assinar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
