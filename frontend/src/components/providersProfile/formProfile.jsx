import React from 'react';

export default function FormProfile() {
    const formStyle = 'bg-[#F2F9FC] rounded-lg p-1 w-full';

    return (
        <div className="w-full grid bg-[#17112A] font-sans">
            <div className="flex justify-center items-center space-x-5 p-5">
                <div className={formStyle}>Data de registro: </div>
                <div className={formStyle}>
                    Data de atualização de registro:{' '}
                </div>
            </div>
            <div className="grid px-5 pb-5 space-y-2">
                <div className="font-bold text-[#F3773B]">
                    Dados de registro
                </div>
                <div className={formStyle}>Nome: </div>
                <div className={formStyle}>Sobrenome: </div>
                <div className={formStyle}>Nome do Pai: </div>
                <div className={formStyle}>Nome da Mãe: </div>
                <div className="flex space-x-2">
                    <div className={formStyle}>Data de Nascimento: </div>
                    <div className={formStyle}>Cpf: </div>
                    <div className={formStyle}>Rg: </div>
                </div>
                <div className={formStyle}>Naturalidade: </div>
                <div className={formStyle}>Endereço: </div>
                <div className="flex space-x-2">
                    <div className={formStyle}>Telefone Principal: </div>
                    <div className={formStyle}>Telefone Reserva: </div>
                </div>
            </div>
        </div>
    );
}
