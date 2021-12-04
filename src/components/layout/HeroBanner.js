import React from "react";
import spaceshipPic from "../../img/spaceship-placeholder.png";

function HeroBanner({ type, title, lead }) {
  return (
    <>
      <section className={`${type} hero-banner py-4`}>
        <div className="container grid">
          <div>
            <h2 className="xl">{title}</h2>
            <p className="lead">{lead}</p>
          </div>
          <img src={spaceshipPic} alt="" />
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
