import React from "react";
import { useForm } from "react-hook-form";

function Residential(props) {
  const {} = useForm;
  return (
    <>
      <div className="kycInputBlock ">
        <label htmlFor="address">Street Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your street address"
          id="address"
          required
        />
      </div>
      <div className="kycInputBlock ">
        <label htmlFor="zipcode">Postal Code / Zip</label>
        <input
          type="text"
          name="zipcode"
          placeholder="Enter postal or zip code"
          id="zipcode"
        />
      </div>
      <div className="kycInputBlock ">
        <label htmlFor="zipcode">City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter your current city"
          id="city"
        />
      </div>
      <div className="kycInputBlock ">
        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          {props.countries}
        </select>
      </div>
    </>
  );
}

export default Residential;
