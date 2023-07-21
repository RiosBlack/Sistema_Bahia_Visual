import React from 'react';
import { BsClockHistory, BsMoon } from 'react-icons/bs';
import { TbClockPause, TbClockPlay } from 'react-icons/tb';

export default function Turno2() {
    return (
        <div className="border border-[#17112A] rounded-lg p-2 grid justify-items-center content-center w-1/2">
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
            <div className="flex space-x-2 pt-2 font-bold">
                <h2>Total de Horas trabalhadas:</h2>
                <p>8 horas</p>
            </div>
        </div>
    );
}
