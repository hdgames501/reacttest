import React, { useState, useContext, useEffect } from "react";
import Pact from "pact-lang-api";

import {
  PactContext,
  TEST_NET_ID,
} from "../wallet/pact-wallet";
import Buy from "./Buy";
import Popup from "./Popup";

function Participate({ canBuy }) {
  const { openConnectWallet, account, useSetNetworkSettings, success } =
    useContext(PactContext);
    console.log("success", success)
  // Initialise network settings
  useSetNetworkSettings(TEST_NET_ID, "1");
  const handleBuy = useBuyTokens();

  if(success) {
    return <Popup />
  }

  if (account?.account) {
    return <Buy handleBuy={handleBuy} canBuy={canBuy}  />;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-bold text-3xl">Participate Now</h2>
      <div>
          <button
            onClick={openConnectWallet}
            className="bg-gradient-to-r to-[#E176FC] via-[#F17E6F] from-[#EFBC71] text-black font-bold text-lg rounded-lg px-3 py-1"
          >
            Connect Wallet
          </button>
        
      </div>
    </div>
  );
}

function useBuyTokens() {
  const { account, gasPrice, chainId, netId, sendTransaction, setSuccess } =
  useContext(PactContext);
  
  return (e) => {
    const value = Number(e.target.value)
    const pactCode = `(coin.transfer-create "${account.account}" "k:0594039b2c93fe0d13309a4fd8b0f478f3aea9938996012d1f7415bf05733709" (read-keyset "user-ks") ${value}.0)`;
    const cmd = {
      pactCode,
      caps: [
        Pact.lang.mkCap("Pay to mint", "Pay to mint", `coin.TRANSFER`, [
          account.account,
          "k:0594039b2c93fe0d13309a4fd8b0f478f3aea9938996012d1f7415bf05733709",
          value,
        ]),
        Pact.lang.mkCap("Gas capability", "Pay gas", "coin.GAS", []),
      ],
      sender: account.account,
      gasLimit: 10000.0,
      gasPrice,
      chainId,
      ttl: 600,
      envData: {
        "user-ks": account.guard,
        account: account.account,
      },
      signingPubKey: account.guard.keys[0],
      networkId: netId,
    };
    const previewContent = <p>You will buy {value} KDA of tokens</p>;
    sendTransaction(cmd, previewContent, `Buying ${value} KDA of tokens`, () => {
        setSuccess(true)
      }
    );
  };
}

export default Participate;
