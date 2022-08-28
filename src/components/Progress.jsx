import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import kapy from '../img/kapy.png'
import kda from '../img/kda.png'

function Progress() {

  const [percent, setPercent] = useState(9) // needs to be updated based on progress of transactions
  return (
    <div className='flex flex-col items-center gap-5  w-4/5 lg:w-1/3'>
        <h2 className='font-bold text-3xl'>Progress</h2>
        <ProgressBar percent={percent} />
        <div className='flex gap-2 items-center'>
          <img className='w-6 h-6' src={kda} alt="KDA" />
          <p>40,445</p>
          <p>KDA locked</p>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='w-6 h-6' src={kapy} alt="KAPY" />
          <p>500,000,000,000</p>
          <p>KAPY locked</p>
        </div>
    </div>
  )
}

export default Progress