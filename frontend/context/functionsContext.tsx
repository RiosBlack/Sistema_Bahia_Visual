'use client'
import { createContext, useEffect, useState } from "react";
import axiosApi from "../services/axiosConfig";

export interface FunctionData {
  functionProviders: string;
}

export const FunctionsContext = createContext<{
  allFunctionsProviders: FunctionData[];
  getFunctionsProviders: () => Promise<void>;
}>({ allFunctionsProviders: [], getFunctionsProviders: async () => {} });

export default function FunctionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allFunctionsProviders, setAllFunctionsProviders] = useState<FunctionData[]> ([]);

  useEffect(() => {
    getFunctionsProviders();
  }, []);

  async function getFunctionsProviders() {
    try {
      const { data } = await axiosApi.get('/functions');
      setAllFunctionsProviders(data);
    } catch (error) {
      console.log("Erro ao buscar dados.", error);
    }
  }

  useEffect(() => {
    console.log(allFunctionsProviders);
  }, [allFunctionsProviders]); 

  return (
    <FunctionsContext.Provider value={{ allFunctionsProviders, getFunctionsProviders }}>
      {children}
    </FunctionsContext.Provider>
  );
}
