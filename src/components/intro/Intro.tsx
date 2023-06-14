import React from 'react';
import useStore from '../../stores/useStore.ts';
import Timer from './Timer.js';

type Props = {
  index: number | null;
};

const Intro: React.FC<Props> = ({ index}) => {
  const phases = useStore((state) => state.phases);

  // Find the phase with the given index
  const phase = phases.find((p) => p.id  === index! +1 );

  if (!phase) {
    return null; // If the phase is not found, you can handle this case accordingly
  }


  return (
    <div className="w-full">
      <section className="cursor-pointer text-white py-8">
          <h2 className="text-4xl md:text-8xl uppercase pr-24 font-martin tracking-wide whitespace-nowrap">
            Videopuzzle
            <sup className="text-2xl -top-16 left-2">2023</sup>
          </h2>
          <div className="flex gap-8">
            <div className="text-black py-4 flex w-[610px] h-[140px]">
              <p className="font-sourceserif text-2xl text-black  ">{phase.content}</p>
            </div>
            <Timer />
          </div>
      </section>
    </div>
  );
};

export default Intro;


// import React from 'react';
// import useStore from '../../stores/useStore.ts';
// import Timer from './Timer.js';

// type Props = {
//   index: number;
//   id: number;
//   content?: string;
// };

// const Intro: React.FC<Props> = ({ index }) => {
//   const { activeIndex } = useStore();
//   const phases = useStore((state) => state.phases);
//   const isActive = activeIndex === index;

//   return (
//     <div className="w-full">
//       <section className="flex flex-col cursor-pointer text-white py-8 gap-8">
//         <article>
//           <h2 className="text-4xl md:text-8xl uppercase pr-24 font-martin tracking-wide whitespace-nowrap">
//             Videopuzzle
//             <sup className="text-2xl -top-16 left-2">2023</sup>
//           </h2>
//           <div className="flex justify-between">
//             <div className={`${isActive === true ? 'flex' : 'hidden'} text-black bg-white px-9 py-6 flex-wrap h-[304px]`}>
//               {phases.map((phase, index) => (
//                 <p key={index} className="font-sourceserif text-2xl text-black w-1/2">
//                   {phase.content}
//                 </p>
//               ))}
//             </div>
//             <Timer />
//           </div>
//         </article>
//       </section>
//     </div>
//   );
// };

// export default Intro;


// import React, { useState } from 'react'
// import useStore from '../../stores/useStore.js'
// import Timer from './Timer.js';

// type Props = {
//     index: number,
//     id: number,
//     content?: string,
// }
// const Intro = ({index} : Props) => {

//   const {
//     activeIndex
//   } = useStore()

//   const phases = useStore((state) => state.phases)
  
//   const isActive = activeIndex === index

//   return (
//     <div className="w-full">
//       <section className="flex flex-col cursor-pointer text-white py-8 gap-8 ">
//         <article>
//           <h2 className="text-4xl md:text-8xl uppercase pr-24 font-martin tracking-wide whitespace-nowrap">
//             Videopuzzle
//             <sup className="text-2xl -top-16 left-2">2023</sup>
//           </h2>
//           <div className="flex justify-between">
//             <div className={`${isActive === true ? 'flex' : 'hidden'} text-black bg-white px-9 py-6 flex-wrap h-[304px] `}>
//               {phases.map(
//                 (phase, index) =>
//                  (
//                     <p key={index} className="font-sourceserif text-2xl text-black w-1/2">
//                       {phase.content}
//                     </p>
//                   )
//               )}              
//             </div>
//             <Timer />
//           </div>
//         </article>
//       </section>
//     </div>
//   )
// }

// export default Intro