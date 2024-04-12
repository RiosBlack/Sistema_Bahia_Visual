'use client'
import { createContext, useEffect, useState } from "react";
import axiosApi from "../services/axiosConfig";

interface Address {
  id: number;
  zipCode: string;
  road: string;
  number: number;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  isPrincipal: boolean;
}

interface FunctionsProviders {
  id: number;
  functionProviders: string;
}

interface ContratacaoDemissao {
  id: number;
  contratacaoDate: Date | null;
  demissaoDate: Date | null;
  motivoDemissao: string | null;
  isContratado: string;
  cpf: string;
  diary: string | null;
  functionContratado: string | null;
}

export interface ProviderData {
  urlImage: string;
  nameImageCloud: string;
  name: string;
  surname: string;
  fatherName: string;
  motherName: string;
  birthday: number;
  cpf: string;
  rg: string;
  naturalness: string;
  numberPhone1: string;
  numberPhone2: string | null;
  andress: Address;
  functionsProviders: FunctionsProviders;
  contratacaoDemissao: ContratacaoDemissao[];
}

export const PrestadoresContext = createContext<{
  allProviders: ProviderData[] | null;allProvidersIsContratado: ProviderData[] | null;
  getAllProviders: () => Promise<void>; getAllProvidersIsContratado: () => Promise<void>;
}>({ allProviders: null, allProvidersIsContratado: null, getAllProviders: async () => { }, getAllProvidersIsContratado: async () => { } });

export default function PrestadoresProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allProviders, setAllProviders] = useState<ProviderData[] | null>(null);
  const [allProvidersIsContratado, setAllProvidersIsContratado] = useState<ProviderData[] | null>(null);

  useEffect(() => {
    getAllProviders();
    getAllProvidersIsContratado()
  }, []);

  async function getAllProviders() {
    try {
      const { data } = await axiosApi.get('/providers');
      setAllProviders(data);
    } catch (error) {
      console.log("Erro ao buscar dados.", error);
    }
  }

  async function getAllProvidersIsContratado() {
    try {
      const { data } = await axiosApi.get('/providers/isContratado')
      setAllProvidersIsContratado(data)     
    } catch (error) {
      console.log("Erro ao buscar dados.", error);
    }
  }

  return (
    <PrestadoresContext.Provider value={{ allProviders, allProvidersIsContratado, getAllProviders, getAllProvidersIsContratado }}>
      {children}
    </PrestadoresContext.Provider>
  );
}
