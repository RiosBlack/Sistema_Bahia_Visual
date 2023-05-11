import { useState } from 'react';

export default function Blocks() {
    const mesAtual = new Date().getMonth();
    const styleBlocks =
        'drop-shadow-lg border-2 border-[#17112A] w-1/3 h-48 rounded-xl p-2';

    const [prestadoresBanco, setPrestadoresBanco] = useState(0);
    const [prestadoresAtivos, setPrestadoresAtivos] = useState(0);
    const [prestadoresInativos, SetPrestadoresInativos] = useState(0);
    const [valorFolha, setValorFOlha] = useState("1000,00")

    return (
        <div className="flex w-full space-x-4 font-sans">
            <div className={styleBlocks}>
                <div className="grid justify-items-center content-between h-full">
                    <div className="grid justify-items-center">
                        <h1 className="font-bold">
                            Quantidade de prestadores no banco de dados:{' '}
                        </h1>
                        <p className="text-2xl">{prestadoresBanco}</p>
                    </div>
                    <div className="grid justify-items-center">
                        <h1 className="font-bold">
                            Quantidade de prestadores ativos:
                        </h1>
                        <p className="text-2xl">{prestadoresAtivos}</p>
                    </div>
                    <div className="grid justify-items-center">
                        <h1 className="font-bold">
                            Quantidade de prestadores inativos:
                        </h1>
                        <p className="text-2xl">{prestadoresInativos}</p>
                    </div>
                </div>
            </div>
            <div className={styleBlocks}>
                <div className="grid justify-items-center content-center h-full space-y-3">
                    <h1 className="font-bold">
                        Valor total da folha do mês {mesAtual}:
                    </h1>
                    <p className="text-2xl">R$: {valorFolha}</p>
                </div>
            </div>
            <div className={styleBlocks}>aqui vai ficar outra coisa</div>
        </div>
    );
}
