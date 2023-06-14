import useStore from '../../stores/useStore.ts'
import ConfirmationBack from '../confirmation/ConfirmationBack.tsx'


const PrevButton = () => {

  const showConfirmationBack = useStore((state) => state.showConfirmationBack)
  const setShowConfirmationBack = useStore((state) => state.setShowConfirmationBack)
  const prevAccordion = useStore((state) => state.prevAccordion)
  const activeIndex = useStore((state) => state.activeIndex)
  const phases = useStore((state) => state.phases)

  const isFirstAccordion = activeIndex === 0

  const handlePrevClick = () => {
    if (isFirstAccordion) {
      alert('Du bist in der ersten Phase, du kannst nicht weiter zurück.')
    } else {
      setShowConfirmationBack(true)
    }
  }

  const handleCancel = () => {
    setShowConfirmationBack(false)
  }

  const handleConfirm = () => {
    setShowConfirmationBack(false)
    prevAccordion()

    let payload = {
      name: phases[activeIndex! - 1].title.toUpperCase(),
      controllable: true,
      number: activeIndex! - 1,
      state: 'STOPPED',
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          handlePrevClick()
        }}
      >
        <svg
          width='63'
          height='62'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.598 31 47.899 4.586v52.828L2.599 31Z'
            fill='#000'
          />
          <path
            fill='#000'
            d='M7.794 57.564H0V5.091h7.794z'
          />
        </svg>
      </button>
      {showConfirmationBack && (
        <ConfirmationBack
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}

export default PrevButton