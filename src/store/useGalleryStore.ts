import { create } from "zustand";

interface GalleryStore {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  setImages: (images: string[]) => void;
}

const useGalleryStore = create<GalleryStore>((set) => ({
  images: [],
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setImages: (images) => set({ images }),
}));

export default useGalleryStore;
