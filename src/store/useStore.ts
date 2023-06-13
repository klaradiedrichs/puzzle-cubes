import { create } from 'zustand';

// Model for our Phase
// Content, prev, active and id is optional ( content? )

interface Phase {
  title: string;
  content?: string;
  prev?: string;
  active?: boolean;
  id?: number;
}

// Interface what our store is going to look like 
// phases is a list of Type "Phase"
// 
interface StoreState {
  phases: Phase[];
}

// creating the store 
// return an object that will match the interface structure we defined above 
const useStore = create<StoreState>(() => ({
  phases: [
    {
      title: 'None',
    },
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
  
}));

export default useStore;