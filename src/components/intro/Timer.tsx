import { useEffect } from 'react'
import PrevButton from '../buttons/PrevButton.tsx'
import NextButton from '../buttons/NextButton.tsx'
import useStore from '../../stores/useStore.ts'
import useTimerStore from '../../stores/useTimerStore.ts'
import ConfirmationStop from "../confirmation/ConfirmationStop.tsx"
import Pause from '../../assets/Pause.svg'
import Stop from '../../assets/Stop.svg'
import Play from '../../assets/Play.svg'

function Timer() {
  const phases = useStore((state) => state.phases)
  const activeIndex = useStore((state) => state.activeIndex)
  const setActiveIndex = useStore((state) => state.setActiveIndex)
  const showConfirmationStop = useStore((state) => state.showConfirmationStop)
  const setShowConfirmationStop = useStore((state) => state.setShowConfirmationStop)

  const { time, isRunning, startTimer, stopTimer, pauseTimer, increment } = useTimerStore()

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time / 1000) % 60)
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const handleStart = () => {
    startTimer()

    let payload = {
      name: phases[activeIndex!].title.toUpperCase(),
      controllable: true,
      number: activeIndex,
      state: 'STARTED',
    }
  }

  const handleStop = () => {
    setShowConfirmationStop(true)
  }

  const handleCancelStop = () => {
    setShowConfirmationStop(false)
  }

  const handleConfirmStop = () => {
    setShowConfirmationStop(false)
    stopTimer()
    setActiveIndex(0)

    let payload = {
      name: phases[0].title.toUpperCase(),
      controllable: true,
      number: 0,
      state: 'STOPPED',
    }
  }

  const handlePause = () => {
    pauseTimer()

    let payload = {
      name: phases[activeIndex!].title.toUpperCase(),
      controllable: true,
      number: activeIndex,
      state: 'PAUSED',
    }
  }

  useEffect(() => {
    // Quick fix
    // vorher: let intervalId
    let intervalId: number | undefined

    if (isRunning) {
      intervalId = setInterval(() => {
        increment()
      }, 10)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  return (
    <>
      <div className='flex items-center justify-center gap-8'>
        <PrevButton />
        {isRunning === false ? (
          <button
            className='shadow-[0_3px_6px_0px_rgba(0,0,0,0)]'
            onClick={handleStart}
          >
            <img src={Play}></img>
          </button>
        ) : (
          <button onClick={handlePause}>
            <img src={Pause}></img>
          </button>
        )}
        <button onClick={handleStop}>
          <img src={Stop}></img>
        </button>
        <NextButton phasesLength={phases.length} />
        <div className='text-6xl font-martin tracking-wide w-28'>{formatTime(time)}</div>
      </div>
      {showConfirmationStop && (
        <ConfirmationStop
          onCancelStop={handleCancelStop}
          onConfirmStop={handleConfirmStop}
        />
      )}
    </>
  )
}

export default Timer