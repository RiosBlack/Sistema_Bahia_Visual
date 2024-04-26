import { create } from 'zustand'

type Provider = {
  id: number;
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
  numberPhone2: string;
  registrationDate: number;
  modifiedDate: number | null;
  andress: Address;
  functionsProviders: FunctionsProvider;
  contratacaoDemissao: ContratacaoDemissao[];
}

type Address = {
  id: number;
  zipCode: string;
  road: string;
  number: number;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
}

type FunctionsProvider = {
  id: number;
  functionProviders: string;
}

type ContratacaoDemissao = {
  id: number;
  contratacaoDate: number[];
  demissaoDate: number | null;
  motivoDemissao: string | null;
  isContratado: string;
  cpf: string;
  diary: number;
  functionContratado: string;
}

type Data = {
  id: number;
  providers: Provider;
  cpf: string;
  functions: string;
  date: number[];
  entradaTurnoDia: string;
  intervaloTurnoDia: string;
  retornoTurnoDia: string;
  saidaTurnoDia: string;
  entradaTurnoNoite: string;
  intervaloTurnoNoite: string;
  retornoTurnoNoite: string;
  saidaTurnoNoite: string;
  modifiedDate: number | null;
  isSigned: boolean | null;
  signedImg: string | null;
  hoursService: number[];
  diaryDay: number;
}

type State = {
  timeSheetCpf: Data[],
  isLoading: boolean
}

type Action = {
  setTimeSheetCpf: (timeSheetCpf: State['timeSheetCpf']) => void,
  setIsLoading: (isLoading: State['isLoading']) => void
}

const useTimeSheetCpfStore = create<State & Action>((set) => ({
  timeSheetCpf: [],
  isLoading: false,
  setIsLoading: ((isLoading) => set(() => ({ isLoading: isLoading }))),
  setTimeSheetCpf: (timeSheetCpf) => set(() => ({ timeSheetCpf: timeSheetCpf })),
}))

export default useTimeSheetCpfStore