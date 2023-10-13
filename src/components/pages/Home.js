import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ltcShowcase from "../../img/ltc-players-img-traced-2-guys-circle.png";
import astroMan1 from "../../img/balloonaut.png";
import astroMan2 from "../../img/astro-float-placeholder.jpg";

function Home() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Laser Tag Rentals Across Canada</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="laser tag rent, laser tag birthday, canada laser tag,"
        />
      </Helmet>
      {/* Showcase */}
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-content">
            <h1>Laser Tag Rentals Across Canada</h1>
            <p>
              From birthday parties to corporate events, LTC delivers right to
              your doorstep for any occasion.
            </p>
            <Link to="/rent-simple" className="btn btn-primary">
              Get Started
            </Link>
          </div>
          <img src={ltcShowcase} alt="" />
        </div>
      </section>

      {/* About */}
      <section className="about my-6">
        <div className="container text-center">
          <i className="fas fa-user-astronaut fa-5x"></i>
          <h2 className="lg">What we do</h2>
          <p className="lead">All through the magic of mail</p>
          <div className="card-container grid py-2">
            <div className="card">
              <img src={astroMan1} alt="" />
              <h2>The stuff you need</h2>
              <p>
                We ship only the laser tag equipment you want. No extra hassle,
                setup or items.
              </p>
            </div>
            <div className="card">
              <img src={astroMan1} alt="" />
              <h2>Right to your door</h2>
              <p>
                When we say anywhere in Canada, we mean it! Even if you're out
                in the middle of nowhere, we will find a way!
              </p>
            </div>
            <div className="card">
              <img src={astroMan1} alt="" />
              <h2>You're in control</h2>
              <p>
                Have a unique laser tag idea? Have at it! With LTC you're in
                control of the taggers and the way you want to play with them!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home CTA */}
      <div className="cta-home bg-off-white py-4">
        <div className="container grid">
          <img src={astroMan2} alt="" />
          <div>
            <h2 className="lg">Ready to secure your laser tag rental?</h2>
            <p>
              Planning your next event has never been easier - make it exciting
              and memorable. All it takes is a few seconds and a couple typie
              toos and clickidy clicks - then you're off to the races. Secure
              your rental today!
            </p>
            <Link to="rent-simple" className="btn btn-primary">
              Rent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
