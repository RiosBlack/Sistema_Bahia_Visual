import { create } from 'zustand'

type State = {
  timeSheetDateMonth: [],
}

type Action = {
  setTimeSheetDateMonth: (timeSheetDateMonth: State['timeSheetDateMonth']) => void,
}

const useTimeSheetStore = create<State & Action>((set) => ({
  timeSheetDateMonth: [],
  setTimeSheetDateMonth: (timeSheetDateMonth) => set(() => ({ timeSheetDateMonth: timeSheetDateMonth })),
}))

export default useTimeSheetStore