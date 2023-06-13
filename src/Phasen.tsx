import React from 'react'
import Controlling from './Controlling'

type Props = {}

const Phasen = (props: Props) => {
  return (
    <div className="flex justify-between">
            <p className="font-sourceserif text-2xl text-black w-1/2">
              Starte eine Phase, indem Du den Play-button drückst. Pausiere, um
              die Medien auf den Cubes anzuhalten. Drücke den Stop-button, um
              eine Phase anzuhalten und die nächste Phase freizuschalten
            </p>
            <Controlling />
    </div>
  )
}

export default Phasen