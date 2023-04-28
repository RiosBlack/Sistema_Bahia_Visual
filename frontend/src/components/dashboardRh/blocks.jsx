import { useState } from "react";

export default function Blocks() {
    const [mesAtual, setMesAtual] = useState('janeiro')
    const styleBlocks =
        'drop-shadow-lg border-2 border-[#17112A] w-1/3 h-44 rounded-xl p-2';

    return (
        <div className="flex w-full space-x-2">
            <div className={styleBlocks}>
                <div>
                    <h1>Quantidade de prestadores no banco de dados:</h1>
                    <h1>Quantidade de prestadores ativos:</h1>
                    <h1>Quantidade de prestadores inativos:</h1>
                </div>
            </div>
            <div className={styleBlocks}>
                <h1>Valor total da folha do mês de {mesAtual}</h1>
            </div>
            <div className={styleBlocks}>aqui vai ficar outra coisa</div>
        </div>
    );
}
