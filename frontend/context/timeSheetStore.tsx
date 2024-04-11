import { create } from 'zustand'

type Data = {
  urlImage: string | null;
  nameImageCloud: string | null;
  name: string,
  surname: string,
  cpf: string,
  valueDailyTotal: number
}

type State = {
  timeSheet: Data[]
}

type Action = {
  setTimeSheet: (timeSheet: State['timeSheet']) => void,
}

const useTimeSheetStore = create<State & Action>((set) => ({
  timeSheet: [],
  setTimeSheet: (timeSheet) => set(() => ({ timeSheet: timeSheet })),
}))

export default useTimeSheetStore