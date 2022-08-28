import React, { useState, useEffect } from 'react'

function Countdown({ setCanBuy }) {
    const saleDate = new Date('2022-08-29T18:00:00').getTime();
    const currentTime = new Date().getTime()
    const gap = saleDate - currentTime
    
    const second = 1000;
    const minute = second * 60
    const hour = minute * 60
    const day= hour * 24
    
    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    
    if(gap <= 0) setCanBuy(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setDays(Math.floor(gap / day))
            setHours(Math.floor((gap % day) / hour))
            setMinutes(Math.floor((gap % hour) / minute))
            setSeconds(Math.floor((gap % minute) / second))
        }, 1000)
        return () => clearInterval(interval)
    }, [seconds])

  return (
    <div className='flex justify-center items-start w-4/5 gap-2'>
        <div className='flex flex-col justify-center items-center w-1/5'>
            <h4 className='text-2xl text-black font-bold bg-white p-2 rounded-sm'>{days}</h4>
            <p>Days</p>
        </div>
        <span className='text-2xl font-bold'>:</span>
        <div className='flex flex-col justify-center items-center w-1/5'>
            <h4 className='text-2xl text-black font-bold bg-white p-2 rounded-sm'>{hours}</h4>
            <p>Hours</p>
        </div>
        <span className='text-2xl font-bold'>:</span>
        <div className='flex flex-col justify-center items-center w-1/5'>
            <h4 className='text-2xl text-black font-bold bg-white p-2 rounded-sm'>{minutes}</h4>
            <p>Minutes</p>
        </div>
        <span className='text-2xl font-bold'>:</span>
        <div className='flex flex-col justify-center items-center w-1/5'>
            <h4 className='text-2xl text-black font-bold bg-white p-2 rounded-sm'>{seconds}</h4>
            <p>Seconds</p>
        </div>

    </div>
  )
}

export default Countdown