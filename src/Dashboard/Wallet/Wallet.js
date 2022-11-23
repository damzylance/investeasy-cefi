import React from "react";
import "./wallet.css";
import Header from "../Globalcomponents/Header/Header";
import Currencycard from "./Currencycard";
import bitcoinLogo from "./logos/bitcoin-logo.svg";
import bnbLogo from "./logos/bnb-logo.svg";
import solLogo from "./logos/sol-logo.svg";
import ethLogo from "./logos/eth-logo.svg";
import { AiFillPlusCircle } from "react-icons/ai";

function Wallet() {
  const wallets = [
    {
      label: "Bitcoin",
      ticker: "BTC",
      logo: bitcoinLogo,
      unit: "1",
      value: "16,000,000",
    },
    {
      label: "Solana",
      ticker: "SOL",
      logo: solLogo,
      unit: "30",
      value: "200,000",
    },
    {
      label: "Binance Coin",
      ticker: "BNB",
      logo: bnbLogo,
      unit: "3,000",
      value: "10,000,000",
    },
  ];
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <h1 className="sectionHeader">Wallets</h1>
        <div className="balanceContainer">
          <div className="nairaWallet">
            <div className="walletDescription">
              <p>Fiat Wallet Balance </p>
              <p className="span">NGN</p>
            </div>
            <div className="nairaBalance">
              <p className="balance">₦20,000</p>
            </div>
            <div className="walletButtons">
              <button>Deposit</button>
              <button> Withdraw</button>
            </div>
          </div>
        </div>
        <div>
          {wallets.map((wallet, index) => {
            return (
              <Currencycard
                key={index}
                logo={wallet.logo}
                label={wallet.label}
                ticker={wallet.ticker}
                unit={wallet.unit}
                value={wallet.value}
              />
            );
          })}
        </div>
        <button
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <AiFillPlusCircle size={20} /> Add New Wallet
        </button>
      </div>
    </section>
  );
}

export default Wallet;
