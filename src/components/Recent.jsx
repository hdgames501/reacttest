import React from 'react'
import kapy from '../img/kapy.png'
import kda from '../img/kda.png'
import kKey from '../img/kKey.png'


function Recent() {

  return (
    <div className='border border-neutral-500 rounded-md w-full flex flex-col items-center py-4 gap-2'>
        <h2 className='font-bold text-3xl'>Recent Transactions</h2>
        <div className='flex font-bold w-4/5 justify-between'>
        {/* transactions pulled from the blockchain should be mapped through, returning the following: */}
          <div className='flex flex-col items-center gap-2 lg:flex-row lg:justify-between w-full'>
            <div className='flex'>
              <p>Date</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={kKey} alt="K Account Icon" />
              <p>K Account #</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img className='w-6 h-6' src={kda} alt="KDA" />
              <p>750 KDA for</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img className='w-6 h-6' src={kapy} alt="KAPY" />
              <p>10,002,293,444 KAPY</p>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:text-blue-400 font-bold' >View on Explorer</a>
          </div>

        </div>
        <button className='bg-gradient-to-r to-[#E176FC] via-[#F17E6F] from-[#EFBC71] text-black font-bold text-lg rounded-lg px-3 py-1'>Load more</button>
    </div>
  )
}

export default Recent