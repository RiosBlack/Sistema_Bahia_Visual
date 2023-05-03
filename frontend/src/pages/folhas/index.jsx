import { useState } from 'react';
import Layout from '../../layout/index';
import { FiSun } from 'react-icons/fi';
import { TbClockPause, TbClockPlay } from 'react-icons/tb';
import { BsClockHistory, BsMoon } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

export default function FolhasPagamentoPage() {
    const [prestador, setPrestador] = useState('Teste');
    const [cpf, setCpf] = useState('000.000.000-00');
    const [mes, setMes] = useState('março');

    return (
        <Layout>
            <div className="py-5 px-2 font-sans">
                <div className="flex justify-around items-center border border-[#17112A] p-1 rounded-lg mb-4 font-bold">
                    <div>
                        <h1>Prestador: {prestador}</h1>
                        <h2>Cpf: {cpf}</h2>
                    </div>
                    <div>
                        <h2>Mês: {mes}</h2>
                    </div>
                </div>
                <div className="flex justify-around space-x-3">
                    <div className="grid justify-items-center content-center font-bold border border-[#17112A] p-2 rounded-lg">
                        <h2 className="pb-3">Data</h2>
                        <p>28/10/1998</p>
                        <p>sexta</p>
                    </div>
                    <div className="border border-[#17112A] p-1 rounded-lg p-2 grid justify-items-center content-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <FiSun />
                            <h1>Turno 1</h1>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                            <div className="grid justify-items-center">
                                <h2 className="h-12 flex items-end">Entrada</h2>
                                <input
                                    className="border border-[#17112A] p-1 rounded-lg"
                                    type="time"
                                    name="Entrada"
                                />
                            </div>
                            <div className="grid justify-items-center border-t border-[#17112A] rounded-lg">
                                <h2 className="flex items-center justify-center">
                                    <BsClockHistory className="mr-2" />
                                    Intervalo
                                </h2>
                                <div className="flex items-center justify-center space-x-1">
                                    <div className="grid justify-items-center">
                                        <h3 className="flex items-center justify-center">
                                            <TbClockPlay className="mr-2" />
                                            Inicio
                                        </h3>
                                        <input
                                            className="border border-[#17112A] p-1 rounded-lg"
                                            type="time"
                                            name="InicioIntervalo"
                                        />
                                    </div>
                                    <div className="grid justify-items-center">
                                        <h3 className="flex items-center justify-center">
                                            <TbClockPause className="mr-2" />
                                            Fim
                                        </h3>
                                        <input
                                            className="border border-[#17112A] p-1 rounded-lg"
                                            type="time"
                                            name="FimIntervalo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid justify-items-center">
                                <h2 className="h-12 flex items-end">Saída</h2>
                                <input
                                    className="border border-[#17112A] p-1 rounded-lg"
                                    type="time"
                                    name="Saida"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#17112A] p-1 rounded-lg p-2 grid justify-items-center content-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <BsMoon />
                            <h1>Turno 2</h1>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                            <div className="grid justify-items-center">
                                <h2 className="h-12 flex items-end">Entrada</h2>
                                <input
                                    className="border border-[#17112A] p-1 rounded-lg"
                                    type="time"
                                    name="Entrada"
                                />
                            </div>
                            <div className="grid justify-items-center border-t border-[#17112A] rounded-lg">
                                <h2 className="flex items-center justify-center">
                                    <BsClockHistory className="mr-2" />
                                    Intervalo
                                </h2>
                                <div className="flex items-center justify-center space-x-1">
                                    <div className="grid justify-items-center">
                                        <h3 className="flex items-center justify-center">
                                            <TbClockPlay className="mr-2" />
                                            Inicio
                                        </h3>
                                        <input
                                            className="border border-[#17112A] p-1 rounded-lg"
                                            type="time"
                                            name="InicioIntervalo"
                                        />
                                    </div>
                                    <div className="grid justify-items-center">
                                        <h3 className="flex items-center justify-center">
                                            <TbClockPause className="mr-2" />
                                            Fim
                                        </h3>
                                        <input
                                            className="border border-[#17112A] p-1 rounded-lg"
                                            type="time"
                                            name="FimIntervalo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid justify-items-center">
                                <h2 className="h-12 flex items-end">Saída</h2>
                                <input
                                    className="border border-[#17112A] p-1 rounded-lg"
                                    type="time"
                                    name="Saida"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button size={'sm'} colorScheme={'whatsapp'}>
                            <TbClockPause className="mr-2 font-bold" /> Assinar
                        </Button>
                        <Button size={'sm'} colorScheme={'blackAlpha'}>
                            <TbClockPause className="mr-2 font-bold" />{' '}
                            Visualizar Assinatura
                        </Button>
                        <Button size={'sm'} colorScheme={'blackAlpha'}>
                            <TbClockPause className="mr-2 font-bold" /> Excluir
                            Lançamento
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
