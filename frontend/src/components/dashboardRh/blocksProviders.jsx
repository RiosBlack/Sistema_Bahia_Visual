import { RiFilePaper2Line } from 'react-icons/ri';
import { FaRegFileAlt, FaUserAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import perfil from 'src/assets/perfil.jpg';
import api from '../../services/index.js';

export default function blocksProviders() {
    const [prestador, setPrestador] = useState();

    async function getPrestadores() {
        try {
            const response = await api.get('/api/providers', {});
            console.log(response.data);
            setPrestador(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPrestadores();
    }, []);

    return (
        <div className="drop-shadow-lg border-2 border-[#17112A] h-80 rounded-xl p-2 font-sans font-medium text-lg overflow-auto">
            <div className="flex justify-between items-center bg-[#17112A] text-slate-100 font-sans rounded-lg p-2 mb-2">
                <div className="flex space-x-7 items-center">
                    <Image
                        src={perfil}
                        width={80}
                        height={80}
                        quality={100}
                        alt={'Logo da empresa Bahia Visual'}
                        className="rounded-full h-10 w-10"
                    />
                    <p>Nome do prestador: {}</p>
                    <p>Idade: {}</p>
                    <p>Função: {}</p>
                </div>
                <div className="flex space-x-3 justify-center items-center">
                    <p className="grid justify-items-center hover:brightness-50 cursor-pointer">
                        <RiFilePaper2Line />
                        Folha
                    </p>
                    <p className="grid justify-items-center hover:brightness-50 cursor-pointer">
                        <FaRegFileAlt />
                        Relatórios
                    </p>
                    <p className="grid justify-items-center hover:brightness-50 cursor-pointer">
                        <FaUserAlt />
                        Perfil
                    </p>
                </div>
            </div>
        </div>
    );
}
