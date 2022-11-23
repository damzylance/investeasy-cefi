import React from "react";

import Header from "../../Globalcomponents/Header/Header";
import "./editprofile.css";
function EditProfile() {
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <h1 className="sectionHeader"> Edit Profile</h1>
        <div className="formWrapper" style={{ margin: 0, padding: 0 }}>
          <div className="input-fields">
            <form style={{ margin: 0, padding: 0 }}>
              <div className="input-block profile">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={"Wasiu"}
                  id="firstname"
                  disabled
                />
              </div>
              <div className="input-block profile">
                <label htmlFor="firstname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={"Adegoke"}
                  id="lastname"
                  disabled
                />
              </div>
              <div className="input-block profile">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={"wasiuadegoke@gmail.com"}
                  id="email"
                  disabled
                />
              </div>
              <div className="input-block profile">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={"08065638286"}
                  id="phone"
                  disabled
                />
              </div>
              <div className="input-block profile">
                <label htmlFor="street">Street Address</label>
                <input
                  type="text"
                  name="street"
                  value={"44 Sholanke str. Akoka"}
                  id="street"
                  disabled
                />
              </div>
              <div className="input-block profile">
                <label htmlFor="street">City</label>
                <input
                  type="text"
                  name="city"
                  value={"Lagos"}
                  id="city"
                  disabled
                />
              </div>
              <button type="submit" style={{ margin: 15, cursor: "pointer" }}>
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;
