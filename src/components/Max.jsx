import React from 'react'
import coins from '../img/coins.png'

function Max() {
  return (
    <div className='flex flex-col items-center gap-5 w-full lg:w-1/3'>
        <div className='flex flex-col items-center gap-5 border border-neutral-500 rounded-lg w-4/5 justify-center p-4'>
            <h2 className='font-bold text-3xl'>Congratulations</h2>  
            <p>You’re maxed out! You’ve already reserved the max amount of 500KDA. Stay tuned from the team for updates on how to claim your tokens after this IDO is over. </p>
            <img className='w-1/2' src={coins} alt="Coins" />

        </div>
    </div>
  )
}

export default Max