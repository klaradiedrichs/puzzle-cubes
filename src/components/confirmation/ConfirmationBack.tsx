import useTimerStore from "../../stores/useTimerStore.js";


type Props = {

    onCancel: () => void;
    onConfirm: () => void;

}

const ConfirmationBack = ({ onCancel, onConfirm } : Props) => {

  const stopTimer = useTimerStore((state) => state.stopTimer);
  const handleStop = () => {
    stopTimer();
  };
  
  return (
    <div className="popup-space">
      <div className="popup-window">
        <div onClick={onCancel} className="popup-cancel">
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
            Wenn Du in die letzte Phase{" "}
            <span className="font-bold">zurückgehst</span>, setzt Du die
            aktuelle Phase auf den Anfang zurück.
          </p>
          <p>
            Dein <span className="font-bold">aktueller Spielstand</span> wird{" "}
            <span className="font-bold">nicht</span> gespeichert.
          </p>
          <div className="popup-buttonposition">
            <button
              onClick={() => {
                handleStop();
                onConfirm();
              }}
              className="popup-button px-14"
            >
              Zurück
            </button>
            <button
              onClick={onCancel}
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

export default ConfirmationBack;