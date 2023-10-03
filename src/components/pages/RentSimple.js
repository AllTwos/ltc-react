import React from "react";

import HeroBanner from "../layout/HeroBanner";

function RentSimple() {
  const mailString =
    "mailto:lasertagca@gmail.com?subject=Laser Tag Booking&body=Name:%0D%0APhone:%0D%0APostal Code:%0D%0ADate of Event:%0D%0AType of Tagger and Amount:";
  return (
    <>
      <HeroBanner
        type="rent"
        title="Rent / Contact"
        lead="Simply send us an email and we'll get back to you!"
      />
      <div className="container">
        <div
          className="my-1"
          style={{
            width: "10%",
            height: "2px",
            background: "var(--primary-color)",
          }}
        ></div>
        <h1>
          Email:{" "}
          <a href={mailString}>
            <span
              style={{
                color: "var(--primary-color)",
                fontSize: "0.7em",
              }}
            >
              lasertagca@gmail.com
            </span>
          </a>
        </h1>
        <h3>Include:</h3>
        <ul>
          <li>Name</li>
          <li>Phone</li>
          <li>Postal Code</li>
          <li>Date of Event</li>
          <li>Type of Tagger and Amount</li>
        </ul>
        <div style={{ margin: "10rem 0" }}></div>
      </div>
    </>
  );
}

export default RentSimple;
