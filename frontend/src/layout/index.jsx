import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import logo from 'src/assets/logo.png';
import { BiExit } from 'react-icons/bi';

export default function Layout({ children }) {
    const [nome, setNome] = useState('Teste');

    return (
        <>
            <header className="flex justify-between p-4">
                <Image
                    src={logo}
                    width={120}
                    height={120}
                    quality={100}
                    alt={'Logo da empresa Bahia Visual'}
                />
                <div className="flex space-x-4 justify-center items-center">
                    <h2 className="text-lg font-sans">
                        Sejá bem vindo {nome}!
                    </h2>
                    {nome ? (
                        <Button>
                            <BiExit className="mr-2 font-bold text-lg" /> Sair
                        </Button>
                    ) : (
                        ''
                    )}
                </div>
            </header>
            <div>{children}</div>
            <footer className="text-sm flex justify-center items-center font-sans">
                Todos os diretos reservados
            </footer>
        </>
    );
}
