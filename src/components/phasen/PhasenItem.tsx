import ConfirmationPhase from '../confirmation/ConfirmationPhase.tsx';
import useStore from '../../stores/useStore.js'

import usePerformanceBotStore from "../../stores/usePerformanceBotStore.ts";

// define the Props type to represent the props expected by the PhasenItem component
type Props = {
    index: number,
    id: number,
    title: string, 
    nextAccordion: () => void;
}

const PhasenItem = ({ index, id, title, nextAccordion} : Props) => {
  
    const {
    activeIndex,
    selectedIndex,
    setActiveIndex,
    setSelectedIndex,
    showConfirmationPhase,
    setShowConfirmationPhase,
    phases,
  } = useStore()

  const { appState, addAppState, updateAppState, existsAppState } = usePerformanceBotStore()

  const isActive = activeIndex === index

  const handlePhaseClick = () => {
    setSelectedIndex(index)
    setShowConfirmationPhase(true)
  }

  const handleCancelPhase = () => {
    setShowConfirmationPhase(false)
  }

  const handleConfirmPhase = () => {
    setShowConfirmationPhase(false)
    setActiveIndex(selectedIndex)

    // TODO: why state name and number?
    let payload = {
      name: phases[selectedIndex].title.toUpperCase(),
      controllable: true,
      number: selectedIndex,
      state: 'STOPPED',
    }

    appState.forEach((cube) => {
    })
  }

  return (
    <div key={id} className=''>
      {/* Phasen */}
      <div
        onClick={() => {
          handlePhaseClick()
          //onClick();
        }}
        className={`text-black border-b-8 border-l-8  border-black w-1/5
        ${isActive ? 'bg-white' : 'text-opacity-25 transparent'} 
        p-1.5 w-[194px] border-black flex justify-center
        ${title === 'Select' ? ' border-t-8' : ' h-[78px]'}  
        `}
      >
        <p className={` text-6xl font-martin tracking-wide uppercase `}>{title}</p>
      </div>

      {/* Beschreibung */}
      <div className='absolute left-[225px] top-0 bottom-0 right-0 '>
        <div className={`${isActive === true ? 'flex' : 'hidden'} text-black bg-white border-8 border-black px-9 py-6 flex-wrap h-[370px] w-full`}>
        {/* Content  */}
        </div>
      </div>
      {showConfirmationPhase && (
        <ConfirmationPhase
          onCancelPhase={handleCancelPhase}
          onConfirmPhase={handleConfirmPhase}
        />
      )}
    </div>
  )
}

export default PhasenItem



