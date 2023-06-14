import useTimerStore from "../../stores/useTimerStore";
type Props = {

    onCancelNext: () => void;
    onConfirmNext: () => void;

}


const ConfirmationNext = ({ onCancelNext, onConfirmNext } : Props) => {
  const stopTimer = useTimerStore((state) => state.stopTimer);
  const handleStop = () => {
    stopTimer();
  };
  return (
    <div className="popup-space">
      <div className="popup-window">
        <div
          onClick={() => {
            onCancelNext();
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
            Möchtest Du diese Phase beenden und in die nächste Phase{" "}
            <span className="font-bold">skippen</span>?
          </p>
          <p>
            Die <span className="font-bold">ausgewählten Inhalte </span>
            werden in{" "}
            <span className="font-bold">die nächste Phase übernommen.</span>
          </p>
          <div className="popup-buttonposition">
            <button
              onClick={() => {
                handleStop();
                onConfirmNext();
              }}
              className="popup-button px-14"
            >
              Nächste
            </button>
            <button
              onClick={onCancelNext}
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

export default ConfirmationNext
