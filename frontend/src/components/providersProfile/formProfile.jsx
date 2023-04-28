import React from 'react';

export default function FormProfile() {
    const formStyle = 'bg-[#F2F9FC] rounded-lg p-1 w-full hover:text-[#1FABCE]';

    return (
        <div className="w-full grid bg-[#17112A] font-sans">
            <div className="flex justify-center items-center space-x-5 p-5">
                <div className={formStyle}>Data de registro: </div>
                <div className={formStyle}>
                    Data de atualização de registro:{' '}
                </div>
            </div>
            <div className="grid px-5 pb-5 space-y-2">
                <p className="font-bold text-[#F3773B]">Dados de registro</p>
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
                <p className="font-bold text-[#F3773B]">Endereço</p>
                <div className={formStyle}>Rua: </div>
                <div className="flex space-x-2">
                    <div className={formStyle}>Cep: </div>
                    <div className={formStyle}>Numero: </div>
                    <div className={formStyle}>Bairro: </div>
                </div>
                <div className={formStyle}>Complemento: </div>
                <div className="flex space-x-2">
                    <div className={formStyle}>Cidade: </div>
                    <div className={formStyle}>Estado: </div>
                </div>
                <p className="font-bold text-[#F3773B]">Telefones</p>
                <div className="flex space-x-2">
                    <div className={formStyle}>Telefone Principal: </div>
                    <div className={formStyle}>Telefone Reserva: </div>
                </div>
            </div>
        </div>
    );
}
