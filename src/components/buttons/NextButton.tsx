import useStore from "../../stores/useStore.ts";
import ConfirmationNext from "../confirmation/ConfirmationNext.tsx"
import usePerformanceBotStore from "../../stores/usePerformanceBotStore.ts";


type Props = {

  phasesLength: number;
}

const NextButton = ({ phasesLength }: Props) => {

  const showConfirmationNext = useStore((state) => state.showConfirmationNext)
  const setShowConfirmationNext = useStore((state) => state.setShowConfirmationNext)
  const nextAccordion = useStore((state) => state.nextAccordion)
  const activeIndex = useStore((state) => state.activeIndex)
  const phases = useStore((state) => state.phases)

  const isLastAccordion = activeIndex === phasesLength - 1

  const handleNextClick = () => {
    if (isLastAccordion) {
      alert('Du hast die letzte Phase erreicht.')
    } else {
      setShowConfirmationNext(true)
    }
  }

  const handleCancel = () => {
    setShowConfirmationNext(false)
  }

  const handleConfirm = () => {
    setShowConfirmationNext(false)
    nextAccordion()

    let payload = {
      // name: phases[activeIndex + 1].title.toUpperCase(),
      // Fehlermeldung weil activeIndex null sein könnten
      // deshalb: 
      // Add a type assertion (!) to tell TypeScript that you are certain that activeIndex is not null at that point:
      name: phases[activeIndex! + 1].title.toUpperCase(),
      controllable: true,
      number: activeIndex! + 1,
      state: 'STOPPED',
    }

  }

  return (
    <div>
      <button onClick={handleNextClick}>
        <svg
          width='68'
          height='66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M65.196 33 16.299 61.146V4.854L65.196 33Z'
            fill='#000'
          />
          <path
            fill='#000'
            d='M59.588 4.693H68v55.914h-8.412z'
          />
        </svg>
      </button>
      {showConfirmationNext && (
        <ConfirmationNext
          onCancelNext={handleCancel}
          onConfirmNext={handleConfirm}
        />
      )}
    </div>
  )
}

export default NextButton