import useTimerStore from "../../stores/useTimerStore.js";

type Props = {
    onCancelStop: () => void;
    onConfirmStop: () => void ;
}

const ConfirmationStop = ({ onCancelStop, onConfirmStop }: Props) => {
  const resetTimer = useTimerStore((state) => state.resetTimer);
  const handleReset = () => {
    resetTimer();
  };
  return (
    <div className="popup-space">
      <div className="popup-window">
        <div
          onClick={() => {
            onCancelStop();
          }}
          className="popup-cancel"
        >
          <svg
            width="80"
            height="81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4 4.467 71.038 72.41M4.917 76.41 75.955 4"
              stroke="#000"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="popup-text">
          <p>
            Möchtest Du diese Phase{" "}
            <span className="font-bold">stoppen und beenden</span>?
          </p>
          <p>
            Alle Phasen werden zurück gesetzt und{" "}
            <span className="font-bold">du startest von vorne</span>.
          </p>
          <div className="popup-buttonposition">
            <button
              onClick={() => {
                handleReset();
                onConfirmStop();
              }}
              className="popup-button px-14"
            >
              Stop
            </button>
            <button
              onClick={onCancelStop}
              className="popup-button px-8 bg-fft-yellow"
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStop;