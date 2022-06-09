import React from "react";
import bitcoinLogo from "./logos/bitcoin-logo.svg";
import ethLogo from "./logos/eth-logo.svg";
import bnbLogo from "./logos/bnb-logo.svg";
import solLogo from "./logos/sol-logo.svg";
import { Link } from "react-router-dom";
import {
  AiFillBell,
  AiFillCustomerService,
  AiFillBank,
  AiOutlineSwap,
  AiFillFileText,
  AiFillAccountBook,
  AiOutlineSearch,
  AiFillCheckCircle,
  AiOutlineCheck,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { RiRefundFill } from "react-icons/ri";
import { FaMoneyCheckAlt, FaChevronCircleRight } from "react-icons/fa";
import "./home.css";
import borrowCrypto from "./images/borrowcrypto.png";
import kycImage from "./images/kycsecurity.png";
import Transactioncard from "./Transactioncard";
function Home() {
  return (
    <section className="dashContainer">
      <div className="dashWrapper">
        <div className="header">
          <div className="avatarWrapper">
            <div className="avatar">WA</div>
            <div className="avatarText">Damzylance</div>
          </div>
          <div className="notificationIcons">
            <AiFillCustomerService className="icon" />
            <AiFillBell className="icon" />
          </div>
        </div>
        <div className="main">
          <div className="borrowCard">
            <div className="borrowTexts">
              <p>Borrow Crypto without colleteral and interest charge today </p>
              <Link to="/dashboard/borrow">
                <button>Borrow Crypto</button>
              </Link>
            </div>
            <div className="borrowImage">
              <img src={borrowCrypto} alt="" />
            </div>
          </div>
          <div className="balanceCard">
            <div className="balanceTitle">Portfolio Overview</div>
            <div className="balance">
              <p>Portfolio Balance</p>
              <div className=" value">₦5,000,000</div>
            </div>
          </div>
        </div>
        <div className="featuredActions">
          <div className="featuredButton activeAction">
            <AiFillBank className="featuredIcon" />
            Borrow
          </div>
          <div className="featuredButton ">
            <RiRefundFill className="featuredIcon" />
            Refund
          </div>
          <div className="featuredButton ">
            <FaMoneyCheckAlt className="featuredIcon" />
            Withdraw
          </div>
          <div className="featuredButton ">
            <AiOutlineSwap className="featuredIcon" />
            Swap
          </div>
        </div>
        <div className="kycWrapper">
          <div className="kycLeft">
            <div className="kycImage">
              <img src={kycImage} alt="" />
            </div>
            <div className="kycText">
              <h2>KYC Verification</h2>
              <p className="kycDescription">
                Complete your Identity Verification to unlock all features
              </p>
            </div>
          </div>
          <div className="kycRight">
            <FaChevronCircleRight />
          </div>
        </div>
        <div className="section">
          <div className="sectionTitle">
            <h1>Recent Transaction</h1>
            <AiFillFileText className="sectionIcon" />
          </div>
          <div className="transactionsContainer">
            <Transactioncard typeTitle={"Borrow"} transactionValue={5000} />
            <Transactioncard typeTitle={"Withdraw"} transactionValue={5000} />
            <Transactioncard typeTitle={"Borrow"} transactionValue={5000} />
            <Transactioncard typeTitle={"Withdraw"} transactionValue={5000} />
            <Transactioncard typeTitle={"Borrow"} transactionValue={5000} />
            <Transactioncard typeTitle={"Withdraw"} transactionValue={5000} />
          </div>
          <div className="sectionFooter">
            <h2>View All</h2>
            <FaChevronCircleRight className="sectionFooterIcon" />
          </div>
        </div>
        <div className="section">
          <div className="sectionTitle">
            <h1>Recent Transaction</h1>
            <AiFillFileText className="sectionIcon" />
          </div>
          <div className="watchlistContainer">
            <div className="searchArea">
              <h3>Follow your favourite crypto</h3>
              <span>
                <AiOutlineSearch />
              </span>
            </div>
            <div className="favoriteCrypto">
              <div className="cryptoDetails">
                <img src={bitcoinLogo} alt="" />
                <div className="cryptoText">
                  <h4 className="cryptoName">Bitcoin</h4>
                  <p className="cryptoTicker">BTC</p>
                </div>
              </div>

              <AiOutlineCheckCircle className="selectIcon" />
            </div>
            <div className="favoriteCrypto">
              <div className="cryptoDetails">
                <img src={ethLogo} alt="" />
                <div className="cryptoText">
                  <h4 className="cryptoName">Ethereum</h4>
                  <p className="cryptoTicker">ETH</p>
                </div>
              </div>

              <AiOutlineCheckCircle className="selectIcon" />
            </div>
            <div className="favoriteCrypto">
              <div className="cryptoDetails">
                <img src={bnbLogo} alt="" />
                <div className="cryptoText">
                  <h4 className="cryptoName">Binance Coin</h4>
                  <p className="cryptoTicker">BNB</p>
                </div>
              </div>

              <AiOutlineCheckCircle className="selectIcon" />
            </div>
            <div className="favoriteCrypto">
              <div className="cryptoDetails">
                <img src={solLogo} alt="" />
                <div className="cryptoText">
                  <h4 className="cryptoName">Solana</h4>
                  <p className="cryptoTicker">SOL</p>
                </div>
              </div>

              <AiOutlineCheckCircle className="selectIcon" />
            </div>
            <div>
              <button>Add to Watchlist</button>
            </div>
          </div>
          <div className="sectionFooter">
            <h2>View more crypto</h2>

            <FaChevronCircleRight className="sectionFooterIcon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
