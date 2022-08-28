import React, { useContext, useState } from 'react'
import { PactContext } from "../wallet/pact-wallet";

function Buy({ handleBuy, canBuy }) {
    const { account, openConnectWallet } = useContext(PactContext);
    let kAccount = account?.account.slice(0,7) + '...' + account?.account.slice(-4)

    const [kdaAmount, setKdaAmount] = useState(0)
    const [kapyAmount, setKapyAmount] = useState(kdaAmount * 38461)
    const [error, setError] = useState(false)
    const [disBuy, setDisBuy] = useState(true)

    const handleKdaInput = (e) => {
        if(e.target.value < 1 || e.target.value > 500) {
            setDisBuy(true)
            setError(true)
        } else {
            setDisBuy(false)
            setError(false)
        }
        setKdaAmount(e.target.value)
        setKapyAmount(e.target.value * 38461)
    }

  return (
    <div className='flex flex-col items-center gap-5 w-full lg:w-1/3'>
        <div className='flex flex-col items-center gap-5 border border-neutral-500 rounded-lg w-4/5 justify-center py-4 px-2'>
            <h2 className='font-bold text-3xl'>Buy Now</h2>  
            <div className='flex flex-col items-center justify-center gap-3 w-full px-2'>
                <div className='flex items-center justify-center gap-2'>
                    <p>{account?.account == null ? "" : kAccount}</p>
                    <button onClick={() => openConnectWallet()} className='border border-neutral-500 rounded-xl flex py-1 px-2 font-bold text-sm'>DISCONNECT</button>
                </div>

                <div className='w-full flex justify-between px-4 mt-2'>
                    <p className="text-purple-700 font-bold">KADENA (KDA)</p>
                    
                </div>
                {error ? <p className='text-sm text-red-500'>Please enter between 100-500 KDA</p>  : ''}
                <input type='number' min="75" max="500" value={kdaAmount} onChange={handleKdaInput} className='bg-transparent w-full text-center rounded-full p-1 text-white font-bold border-2 border-white' placeholder={kdaAmount} />

                <div className='w-full flex justify-between px-4 mt-2'>
                    <p className="text-purple-700 font-bold">JODIE INU (JDE)</p>
                    
                </div>
                <p className='w-full text-center rounded-full p-1 text-white font-bold border-2 border-white' >{kapyAmount}</p>

               
                <button style={{display: `${canBuy ? 'block'  : 'none'}`}} disabled={disBuy} onClick={(kdaAmount) => handleBuy(kdaAmount)} value={kdaAmount} className="bg-gradient-to-r to-[#E176FC] via-[#F17E6F] from-[#EFBC71] w-full text-black font-bold text-lg rounded-full py-1 disabled:opacity-30">Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Buy