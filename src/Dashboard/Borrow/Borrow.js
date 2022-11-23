import React from "react";
import "./borrow.css";
import { Select, Form, InputNumber, Input, Col, Row } from "antd";
import { AiFillAccountBook } from "react-icons/ai";
import bitcoinLogo from "./logos/bitcoin-logo.svg";
import ethLogo from "./logos/eth-logo.svg";
import bnbLogo from "./logos/bnb-logo.svg";
import solLogo from "./logos/sol-logo.svg";
import Header from "../Globalcomponents/Header/Header";
import "antd/dist/antd.css";
import { FormContext } from "antd/lib/form/context";
const { Option } = Select;
function Borrow() {
  const coinList = [
    { coinName: "Bitcoin", coinTicker: "BTC", logo: bitcoinLogo },
    { coinName: "Binance Coin", coinTicker: "BNB", logo: bnbLogo },
    { coinName: "Ethereum", coinTicker: "ETH", logo: ethLogo },
  ];
  const paymentFreq = ["Weekly", "Monthly", "3 Months", "6 Months"];
  const unlockSystem = ["Installment", "All-in"];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <h1 className="sectionHeader">Borrow</h1>
        <Form>
          <div className="section-1">
            <Form.Item
              label="Which Coin do you wish to borrow?"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
              >
                {coinList.map((coin, index) => {
                  return (
                    <Option value={coin.coinName} key={index}>
                      <div className="optionWrapper">
                        <div className="currencyIcon">
                          <img src={coin.logo} alt="" />
                        </div>
                        <div className="currencyName">
                          <p>{coin.coinName}</p>
                          <p>{coin.coinTicker}</p>
                        </div>
                      </div>
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <div className="equalHalves">
              <div className="fieldWrapper">
                <label htmlFor="">How many units</label>
                <div className="inputWrapper">
                  <input
                    required
                    type="number"
                    name=""
                    id=""
                    placeholder="Unit"
                  />
                </div>
              </div>
              <div className="fieldWrapper">
                <label htmlFor="">Amount</label>
                <div className="inputWrapper">
                  <span>NGN</span>
                  <input
                    required
                    type="number"
                    name=""
                    id=""
                    placeholder="Amount"
                  />
                </div>
              </div>
            </div>
            <div className="fieldWrapper">
              <label htmlFor="">Insert Your Payment plan</label>
              <div className="inputWrapper">
                <span>NGN</span>
                <input
                  required
                  type="text"
                  name=""
                  id=""
                  placeholder="Payment Plan"
                />
              </div>
            </div>
            <Form.Item
              label="Your payment Frequency?"
              name="paymentFrequency"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                defaultValue="Weekly"
                onChange={handleChange}
              >
                {paymentFreq.map((freq, index) => {
                  return (
                    <Option value={freq} key={index}>
                      <div className="optionWrapper">
                        <p style={{ marginTop: "20px" }}>{freq}</p>
                      </div>
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="Coin Unlocking system?"
              name="unlockSystem"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                defaultValue="Installment"
                onChange={handleChange}
              >
                {unlockSystem.map((system, index) => {
                  return (
                    <Option value={system} key={index}>
                      <div className="optionWrapper">
                        <p style={{ marginTop: "20px" }}>{system}</p>
                      </div>
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <button type="button" style={{ color: "#fff" }} onClick>
              Continue
            </button>
          </div>
          <div className="hidden">Choose</div>
        </Form>
      </div>
    </section>
  );
}

export default Borrow;
