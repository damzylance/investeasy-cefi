import React from "react";
import Header from "../../Globalcomponents/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Legalname from "./Legalname";
import Residential from "./Residential";
import Idverification from "./Idverification";
import Verifyphone from "./Verifyphone";
import axios from "axios";
import { BsChevronLeft } from "react-icons/bs";
import "./kyc.css";
function Kyc() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [countries, setCountries] = useState([]);
  const kyced = false;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/locations/countries", config)
      .then(function (response) {
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
        navigate("/login");
      });
  }, []);
  const displayCountries = countries.map((country) => {
    return (
      <option key={country.geoname_id} value={country.name}>
        {country.name}
      </option>
    );
  });
  const countryCodes = countries.map((country) => {
    return (
      <option
        style={{ width: "40px", padding: 0 }}
        key={country.geoname_id}
        value={country.phone}
      >
        {country.phone}
      </option>
    );
  });
  const [page, setPage] = useState(0);
  const titles = [
    "Legal Name",
    "Residential Address",
    "ID Verification",
    "Verify Phone",
  ];
  const displayContent = () => {
    if (page === 0) {
      return <Legalname />;
    } else if (page === 1) {
      return <Residential countries={displayCountries} />;
    } else if (page === 2) {
      return <Idverification />;
    } else {
      return <Verifyphone countryCode={countryCodes} />;
    }
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        {kyced ? (
          "KYC has been completed"
        ) : (
          <div className="kycForm">
            <div className="kycFormHeader">
              <BsChevronLeft
                size={20}
                onClick={() => {
                  navigate(-1);
                }}
              />
              <h1>{titles[page]}</h1>
            </div>
            <div className="kycFormContent">
              {" "}
              <form>{displayContent()}</form>
            </div>
            <div className="kycFooter">
              <div className="formProgress">
                <div className={page === 0 ? "activebar" : "bar"}></div>
                <div className={page === 1 ? "activebar" : "bar"}></div>
                <div className={page === 2 ? "activebar" : "bar"}></div>
                <div className={page === 3 ? "activebar" : "bar"}></div>
              </div>
              <div className="kycButtons">
                {page > 0 && <button onClick={prevPage}>Back</button>}
                <button
                  onClick={nextPage}
                  disabled={page === titles.length - 1}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Kyc;
