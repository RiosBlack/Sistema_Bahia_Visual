import { create } from 'zustand'

type State = {
  urlImage: string,
  nameImageCloud: string
}

type Action = {
  setUrlImage: (urlImage: State['urlImage']) => void,
  setNameImageCloud: (nameImageCloud: State['nameImageCloud']) => void
}

const useWebcamStore = create<State & Action>((set) => ({
  urlImage: '',
  nameImageCloud: '',
  setUrlImage: (urlImage) => set(() => ({ urlImage: urlImage })),
  setNameImageCloud: (nameImageCloud) => set(() => ({ nameImageCloud: nameImageCloud })),
}))

export default useWebcamStore