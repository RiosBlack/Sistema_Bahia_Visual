import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { BiExit } from 'react-icons/bi';
import Sidebar from '../components/sidebar/index';

export default function Layout({ children }) {
    const [nome, setNome] = useState('Teste');

    return (
        <>
            <div className="flex ">
                <Sidebar />
                <header className="flex justify-end p-4 font-sans h-11 w-full absolute z-0 bg-[#F3773B] text-[#F2F9FC]">
                    <div className="flex space-x-4 justify-center items-center">
                        <h2>Sejá bem vindo {nome}!</h2>
                        {nome ? (
                            <Button size={'sm'} colorScheme={'blackAlpha'}>
                                <BiExit className="mr-2 font-bold" /> Sair
                            </Button>
                        ) : (
                            ''
                        )}
                    </div>
                </header>
                
                    <main className="mt-8 w-full ">{children}</main>
                
            </div>
        </>
    );
}
