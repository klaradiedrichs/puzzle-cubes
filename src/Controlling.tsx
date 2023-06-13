import React from 'react'
import Stop from "./assets/Stop.svg"
import Play from "./assets/Play.svg"

type Props = {}

const Controlling = (props: Props) => {
  return (
    <div className="flex justify-end ">
        <div>
            <button>
                <img src={Play}></img>
            </button>
            <button>
                <img src={Stop}></img>
            </button>
        </div>
    </div>
  )
}

export default Controlling 