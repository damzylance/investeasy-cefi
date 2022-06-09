import React from "react";
import "./borrow.css";
import { Select } from "antd";
import Header from "../Globalcomponents/Header/Header";
const { Option } = Select;
function Borrow() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <h1>Borrow</h1>
        <Select
          defaultValue="lucy"
          style={{
            width: "100%",
          }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </section>
  );
}

export default Borrow;
