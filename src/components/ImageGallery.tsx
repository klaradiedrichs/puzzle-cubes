import React, { useEffect } from "react";
import useGalleryStore from "../store/useGalleryStore";

// ImageGallery component
const ImageGallery: React.FC = () => {
  const images = useGalleryStore((state) => state.images);
  const setImages = useGalleryStore((state) => state.setImages);
  const currentIndex = useGalleryStore((state) => state.currentIndex);
  const setCurrentIndex = useGalleryStore((state) => state.setCurrentIndex);

  useEffect(() => {
    // Fetch images from Rick and Morty API
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setImages(data.results.map((character: any) => character.image));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSlideUp = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSlideDown = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <div className="flex gap-10 justify-center">
        <button
          onClick={handleSlideUp}
          disabled={currentIndex === 0}
          className=""
        >
          Previous
        </button>
        <div className="w-full h-full flex gap-8">
          <div
            style={{ backgroundImage: `url(${images[currentIndex - 1]})` }}
            className="w-20 h-[289px] bg-center bg-cover duration-500"
          ></div>
          <div
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className="w-[289px] h-[289px] bg-center bg-cover duration-500 border-8 border-fft-yellow"
          ></div>
          <div
            style={{ backgroundImage: `url(${images[currentIndex + 1]})` }}
            className="w-20 h-[289px] bg-center bg-cover duration-500"
          ></div>
        </div>
        <button
          onClick={handleSlideDown}
          disabled={currentIndex === images.length - 1}
          className=""
        >
          Next
        </button>
      </div>
      <div className="flex ">
        {images.map((currentIndex, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            .
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
