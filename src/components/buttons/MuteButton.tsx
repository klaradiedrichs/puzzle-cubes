import { useState } from "react";

const MuteButton = () => {
  const [toggleMute, setToggleMute] = useState<boolean>(true);

  const handleToggel = () => {
    setToggleMute(!toggleMute);
  };

  return (
    <>
      <button onClick={handleToggel}>
        {toggleMute === true ? (
          <svg
            width="29"
            height="33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.424 22.487H3a3 3 0 0 1-3-3v-5.469a3 3 0 0 1 3-3h3.545L24.505.688C26.504-.461 29 .983 29 3.29V29.71c0 2.308-2.496 3.751-4.496 2.601l-17.08-9.824Z"
              fill="#000"
            />
          </svg>
        ) : (
          <svg
            width="37"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 22.487h4.424l7.598 4.37L29 12.879v-9.59c0-2.307-2.496-3.75-4.496-2.6L6.545 11.018H3a3 3 0 0 0-3 3v5.47a3 3 0 0 0 3 3Zm26-5.366L17.715 28.406l6.79 3.905c2 1.15 4.495-.293 4.495-2.6V17.12Z"
              fill="#000"
            />
            <path
              d="M9 32 35 6"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default MuteButton;
