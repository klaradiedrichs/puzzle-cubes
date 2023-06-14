import useActionStore from '../../stores/useActionStore.js'
import usePerformanceBotStore from '../../stores/usePerformanceBotStore.ts'

const ToggleButtons = () => {
//   const { appState, addAppState, updateAppState, existsAppState } = usePerformanceBotStore()

  const { state, setState, actions, activeIndices, setActiveIndex } = useActionStore()

  const handleClick = (index: number) => {
    const updatedActiveIndices = [...activeIndices]
    const indexExists = updatedActiveIndices.includes(index)

    if (indexExists) {
      const indexToRemove = updatedActiveIndices.indexOf(index)
      updatedActiveIndices.splice(indexToRemove, 1)
    } else {
      updatedActiveIndices.push(index)
    }

    setActiveIndex(updatedActiveIndices)
    setState(!state)

    let payload = {
      sender: actions[index].title,
      action: actions[index].title,
      state: indexExists ? 'STOPPED' : 'STARTED',
      //timestamp: Date.now(),
    }

  }

  const isActive = (index: number) => activeIndices.includes(index)

  return (
    <div className='text-white font-normal flex flex-wrap gap-x-32 gap-y-8 justify-center mb-9'>
      {actions.map((action, index) => {
        let buttonClass = 'border-[1px] font-sourceSansPro rounded-full w-fit-content px-7 h-[31px] shadow-2xl shadow-white border-b-4'

        if (isActive(index)) {
          buttonClass += ' bg-toggleOn-yellow'
        } else {
          buttonClass += ' bg-black'
        }

        return (
          <button
            // vorher: index = {index}
            // aber:  the index prop is not a valid attribute for the button element in HTML
            // If you need to pass the index prop to the button element, you can use a different attribute name that is valid in HTML. 
            // For example, you can use a data attribute:
            data-index={index}
            title={action.title}
            key={action.title}
            onClick={() => handleClick(index)}
            value={action.title}
            className={buttonClass}
          >
            {action.title}
          </button>
        )
      })}
    </div>
  )
}

export default ToggleButtons