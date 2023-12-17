import { TbClockPause } from 'react-icons/tb';
import { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import html2canvas from 'html2canvas';
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     useDisclosure,
// } from '@chakra-ui/react';

export default function ButtonAssinar({ setScreenshot }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [sign, setSign] = useState();
    const [loading, setLoading] = useState(false);

    const handleClear = () => {
        sign.clear();
    };

    async function handleTakeScreenshot() {
        setLoading(true);

        const canvas = await html2canvas(document.querySelector('section'));
        const base64image = canvas.toDataURL('assets/assinaturas/png');

        setScreenshot(base64image);

        setLoading(false);
    }

    return (
        <>
            {/* <Button onClick={onOpen} size={'sm'} colorScheme={'whatsapp'}>
                <TbClockPause className="mr-2 font-bold" /> Assinar
            </Button>

            <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent className="p-4">
                    <ModalHeader>
                        <h2>Nome do prestador com cpf</h2>
                        <h2>Data completa</h2>
                        <h2>Assine dentro do quadrado</h2>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className="border border-[#17112A] rounded-lg">
                        <SignatureCanvas
                            penColor="green"
                            canvasProps={{
                                width: 530,
                                height: 216,
                                className: 'sigCanvas',
                            }}
                            ref={data => setSign(data)}
                        />
                    </ModalBody>

                    <ModalFooter className="space-x-3">
                        {loading ? (
                            <Button colorScheme="whatsapp" isLoading />
                        ) : (
                            <>
                                <Button onClick={onClose} colorScheme="red">
                                    Sair
                                </Button>
                                <Button
                                    colorScheme="facebook"
                                    onClick={handleClear}
                                >
                                    Limpar
                                </Button>
                                <Button
                                    colorScheme="whatsapp"
                                    onClick={handleTakeScreenshot}
                                    mr={3}
                                >
                                    Salvar
                                </Button>
                            </>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </>
    );
}
