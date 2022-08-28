import React, { useState } from 'react'
import Details from './Details'
import Participate from './Participate'
import Status from './Status'

function Content() {
  const [canBuy, setCanBuy] = useState(true)
  return (
    <div className='w-full lg:w-[1100px] flex justify-evenly lg:flex-row flex-col items-center gap-6 lg:gap-0 relative'>
        <Status setCanBuy={setCanBuy} /> 
        <Participate canBuy={canBuy} />
        <Details />
    </div>
  )
}

export default Content