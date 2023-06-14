import React, { useState } from 'react'
import useStore from '../../stores/useStore.js'

import PhasenItem from './PhasenItem.js'

const Phasen = () => {
  const phases = useStore((state) => state.phases)
  const activeIndex = useStore((state) => state.activeIndex)
  const setActiveIndex = useStore((state) => state.setActiveIndex)
  const nextAccordion = useStore((state) => state.nextAccordion)

  return (
    <div className=''>
      <div className='relative top-0 left-0'>
        {phases.map(
          (phase, index) =>
            phase.title !== 'None' && (
              <PhasenItem
                key={index}
                index={index}
                title={phase.title}
                // ?????        
                nextAccordion={nextAccordion} id={0}              
                />
            )
        )}
      </div>
    </div>
  )
}

export default Phasen