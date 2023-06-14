import { create } from 'zustand';

// Model for our Phase
// Content, prev, active and id is optional ( content? )

interface Phase {
  title: string;
  content: string;
  prev?: string;
  active: boolean;
  id?: number;
}

// Interface what our store is going to look like 
// phases is a list of Type "Phase"
// 
interface StoreState {
  phases: Phase[];
  // number | null allows the activeIndex to hbe a number or null 
  // to handle the case when there is no active index 
  activeIndex: number | null;
  selectedIndex: number;
  setActiveIndex: (index: number) => void;
  setSelectedIndex: (index: number) => void;
  nextAccordion: () => void;
  prevAccordion: () => void;
  showConfirmationBack: boolean;
  setShowConfirmationBack: (value: boolean) => void;
  showConfirmationNext: boolean;
  setShowConfirmationNext: (value: boolean) => void;
  showConfirmationStop: boolean;
  setShowConfirmationStop: (value: boolean) => void;
  showConfirmationPhase: boolean;
  setShowConfirmationPhase: (value: boolean) => void;
}

// creating the store 
// return an object that will match the interface structure we defined above 
const useStore = create<StoreState>((set) => ({
  phases: [
    {
      title: 'Select',
      content:
        'Wähle eines der Videos aus, welches die Spielenden zusammen puzzlen sollen.',
      active: true,
      id: 1,
    },
    {
      title: 'Config',
      content:
        'Wähle aus in wie viele Teile das Video gerastert wird und auf welchen Flächen gepuzzlet werden sollen. Du kannst soviel wie Cubes vorhanden sind auswählen, maximal 9.',
      active: false,
      id: 2,
    },
    {
      title: 'Puzzle',
      content: 'Starte das Puzzle, damit die Spielenden anfangen können. Sobald zwei Würfel richtig aneinander stehen werden die jeweiligen Flächen farbig markiert',
      active: false,
      id: 3,
    },
  ],
  activeIndex: 1,
  selectedIndex: 0,
  setActiveIndex: (index) =>
    set((state) => ({
      activeIndex: index,
    })),
  setSelectedIndex: (index) => set({ selectedIndex: index }),
  nextAccordion: () =>
    set((state) => ({
      activeIndex: state.activeIndex !== null ? Math.min(state.phases.length - 1, state.activeIndex + 1) : null,
    })),
  prevAccordion: () =>
    set((state) => ({
      activeIndex: state.activeIndex !== null ? Math.max(0, state.activeIndex - 1) : null,
    })),
  showConfirmationBack: false,
  setShowConfirmationBack: (value) => set({ showConfirmationBack: value }),
  showConfirmationNext: false,
  setShowConfirmationNext: (value) => set({ showConfirmationNext: value }),
  showConfirmationStop: false,
  setShowConfirmationStop: (value) => set({ showConfirmationStop: value }),
  showConfirmationPhase: false,
  setShowConfirmationPhase: (value) => set({ showConfirmationPhase: value }),
}));

export default useStore;