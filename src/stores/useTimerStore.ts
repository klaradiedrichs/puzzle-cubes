import { create } from "zustand";

interface TimerStore {
    time: number;
    isRunning: boolean;
    startTimer: () => void ;
    pauseTimer: () => void; 
    resetTimer: () => void; 
    stopTimer: () => void;
    increment: (incrementValue? : number) => void;

}

const useTimerStore = create<TimerStore>((set) => ({
  time: 0,
  isRunning: false,
  startTimer: () => set(() => ({ isRunning: true })),
  pauseTimer: () => set(() => ({ isRunning: false })),
  resetTimer: () => set(() => ({ time: 0 })),
  stopTimer: () => set(() => ({ time: 0, isRunning: false })),
  increment: (incrementValue = 10) =>
    set((state) => ({ ...state, time: state.time + incrementValue })),
}));

export default useTimerStore;