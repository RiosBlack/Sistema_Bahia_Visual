import dayjs from 'dayjs';
import { useState } from 'react';

export default function TitleProviders() {
    const [prestador, setPrestador] = useState('Teste');
    const [cpf, setCpf] = useState('000.000.000-00');
    const mes = dayjs().month()
    const ano = dayjs().year()
    const dia = dayjs().date()  

    return (
        <div className="flex w-full justify-around items-center border border-[#17112A] p-1 rounded-lg">
            <div>
                <div className="flex space-x-1">
                    <h1 className="font-bold">Prestador:</h1>
                    <p>{prestador}</p>
                </div>
                <div className="flex space-x-1">
                    <h2 className="font-bold">Cpf:</h2>
                    <p>{cpf}</p>
                </div>
            </div>
            <div>
                <div className="flex space-x-1">
                    <h2 className="font-bold">Mês:</h2>
                    <p>{`${mes}/${ano}`}</p>
                </div>
                <div className="flex space-x-1">
                    <h2 className="font-bold">Data de hoje: </h2>
                    <p>{`${dia}/${mes}/${ano}`}</p>
                </div>
            </div>
        </div>
    );
}
