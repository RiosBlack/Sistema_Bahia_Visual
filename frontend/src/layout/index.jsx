import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import logo from 'src/assets/logo.png';
import { BiExit } from 'react-icons/bi';

export default function Layout({ children }) {
    const [nome, setNome] = useState('Teste');

    return (
        <>
            <header className="flex">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    quality={100}
                    alt={'Logo da empresa Bahia Visual'}
                    className="pt-5"
                />
                <h2>Sejá bem vindo {nome}!</h2>
                {nome ? (
                    <Button>
                        <BiExit className="pr-2" /> Sair
                    </Button>
                ) : (
                    ''
                )}
            </header>
            <div>{children}</div>
            <footer>Todos os diretos reservados</footer>
        </>
    );
}
