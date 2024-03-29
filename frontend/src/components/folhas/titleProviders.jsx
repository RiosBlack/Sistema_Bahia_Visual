import { useState } from 'react';

export default function TitleProviders() {
    const [prestador, setPrestador] = useState('Teste');
    const [cpf, setCpf] = useState('000.000.000-00');

    const dia = new Date().getMonth();
    const mes = new Date().getMonth();
    const ano = new Date().getFullYear();
    const myDate = new Date(Date.now()).toLocaleString().split(',')[0];

    return (
        <div className="flex w-full justify-around items-center border border-[#17112A] p-1 rounded-lg">
            <div>
                <div className="flex space-x-1">
                    <h1 className="font-bold">Prestador:</h1>
                    <p>{prestador}</p>
                </div>
                <div className="flex space-x-1">
                    <h2 className="font-bold">Cpf:</h2>
                    <p>{myDate}</p>
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
