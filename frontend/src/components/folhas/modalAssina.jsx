import { TbClockPause } from 'react-icons/tb';

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
import Image from 'next/image';

export default function ModalAssinar({ screenshot }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {/* <Button onClick={onOpen} size={'sm'} colorScheme={'facebook'}>
                <TbClockPause className="mr-2 font-bold" /> Visualizar
                Assinatura
            </Button>

            <Modal size={'2xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent className="p-4">
                    <ModalHeader>
                        <h2>Assinatura</h2>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className="border border-[#17112A] rounded-lg">
                        {!screenshot ? (
                            'Folha ainda não foi assinada'
                        ) : (
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={screenshot}
                                    alt="screenshot"
                                    width={900}
                                    height={900}
                                    quality={100}
                                />
                            </div>
                        )}
                    </ModalBody>

                    <ModalFooter className="space-x-3">
                        <Button onClick={onClose} colorScheme="red">
                            Sair
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </>
    );
}
