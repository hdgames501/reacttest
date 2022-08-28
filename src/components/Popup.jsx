import React,{ useState, useContext } from 'react'
import coins from '../img/coins.png'
import { PactContext } from "../wallet/pact-wallet";

function Popup() {
  const { setSuccess } = useContext(PactContext);

  return (
    <div className="popup-inner">
        <img src={coins} alt="coins" />
        <p>Congratulations. You have successfully purchased JDE tokens!</p>
        <button className='popup-button' onClick={() => setSuccess(false)}>Close</button>
        <div className='popup-background'></div>
    </div>
  )
}

export default Popup