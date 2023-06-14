import create, {SetState} from 'zustand';


// model for our ActionState
// to describe what the data structure of each ActionState will look like
interface ActionStoreState {
  actions: { title: string }[];
  activeIndices: number[];
  setActiveIndex: (indices: number[]) => void;
  state: boolean;
  setState: (value: boolean) => void;
}

// Create the store with objects with the format of ActionStoreState
const useActionStore = create<ActionStoreState>((set: SetState<ActionStoreState>) => ({
  actions: [
    { title: 'PAUSE' },
    { title: 'DOUBLE_SPEED' },
    { title: 'HALF_SPEED' },
    { title: 'BLINK' },
    { title: 'ZOOM_IN' },
    { title: 'ZOOM_OUT' },
    { title: 'SHUFFLE_CONTENT' },
    { title: 'BLACK_AND_WHITE' },
  ],
  activeIndices: [],
  setActiveIndex: (indices) =>
    set((state) => ({
      activeIndices: indices,
    })),
  state: false,
  setState: (value) =>
    set((state) => ({
      state: value,
    })),
}));

export default useActionStore;





