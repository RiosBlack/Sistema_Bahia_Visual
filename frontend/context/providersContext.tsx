'use client'
import { createContext, useEffect, useState } from "react";
import axiosApi from "../services/axiosConfig";

export type ProvidersData = {
  image: string;
  name: string;
  surname: string;
  fatherName: string;
  motherName: string;
  birthday: Date;
  cpf: string;
  rg: string;
  naturalness: string;
  numberPhone1: string;
  numberPhone2: string;
  andress: object;
  functionsProviders: object;
}

export const PrestadoresContext = createContext({})

export default function PrestadoresProvider({ children }: { children: React.ReactNode; }) {

  useEffect(() => {
    getAllProviders()
  }, [])
  

  const [allProviders, setAllProviders] = useState<ProvidersData | null >(null);

  async function getAllProviders() {
    try {
      const { data } = await axiosApi.get('/providers');
      setAllProviders(data);
      console.log("fez o get");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PrestadoresContext.Provider value={{
      allProviders,
      getAllProviders
    }}>
      {children}
    </PrestadoresContext.Provider>
  );
}

