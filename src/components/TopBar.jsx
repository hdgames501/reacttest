import React, { useContext } from "react";
import logo from "../img/logo.png";
import mobileLogo from "../img/mobileLogo.png";
import { PactContext } from "../wallet/pact-wallet";

function TopBar() {
  const { openConnectWallet, account } = useContext(PactContext);

  const handleConnect = () => {
    openConnectWallet();
  };
  const isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;
  let kAccount = account?.account.slice(0,7) + '...' + account?.account.slice(-4)


  return (
    <div className="flex justify-between w-full items-center px-7 lg:px-28 mt-3 lg:mt-10">
      <img src={isMobile ? mobileLogo : logo} alt="Kapybara Logo" />
      <div className="flex gap-3">
        {/* ternary here
            <div>Wallet addy</div> */}
        <div className="flex items-center">
          {account?.account == null ? "" : kAccount}
        </div>
        <button
          onClick={handleConnect}
          className="px-6 py-2 bg-neutral-700 rounded-md text-xl font-bold"
        >
          {account?.account == null ? "Connect" : "Change Wallet"}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
