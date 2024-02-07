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
  isContratado: boolean | null;
  cpf: string;
  diary: string | null;
  functionContratado: string | null;
}

export interface ProviderData {
  image: string;
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
  allProviders: ProviderData[] | null;
  getAllProviders: () => Promise<void>;
}>({ allProviders: null, getAllProviders: async () => {} });

export default function PrestadoresProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allProviders, setAllProviders] = useState<ProviderData[] | null>(null);

  useEffect(() => {
    getAllProviders();
  }, []);

  async function getAllProviders() {
    try {
      const { data } = await axiosApi.get('/providers');
      setAllProviders(data);
    } catch (error) {
      console.log("Erro ao buscar dados.", error);
    }
  }

  return (
    <PrestadoresContext.Provider value={{ allProviders, getAllProviders }}>
      {children}
    </PrestadoresContext.Provider>
  );
}
