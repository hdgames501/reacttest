import React from 'react'
import Countdown from './Countdown'

function Status({ setCanBuy }) {
  return (
    <div className='flex flex-col items-center gap-5 w-full lg:w-1/3'>
        <h2 className='font-bold text-3xl'>Status</h2>
        <p className='text-black font-bold bg-white rounded-3xl px-5 py-2'><a href="https://t.me/jodieinu/" target="_blank">Join us on our Telegram!</a></p>
        
        <p className='font-bold text-lg'>Whitelist Sale Starts in:</p>
        <Countdown setCanBuy={setCanBuy}/>
        
    </div>
  )
}

export default Status