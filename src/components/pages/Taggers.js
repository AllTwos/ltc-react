import React from "react";
import HeroBanner from "../layout/HeroBanner";
import { Link } from "react-router-dom";
import phoenixPic from "../../img/PhoenixEquipPage.png";
import heroPic from "../../img/HeroEquipPage.png";

function Taggers() {
  return (
    <>
      <HeroBanner
        type="taggers"
        title="Taggers"
        lead="Pick the tagger that best suits your event"
      />

      {/* Taggers Phoenix */}
      <section className="phoenix bg-off-white py-4">
        <div className="container grid">
          <img src={phoenixPic} alt="" />
          <div>
            <h2 className="md">Phoenix</h2>
            <p className="lead">Indoor/Outdoor</p>
            <p className="my-1">
              The Phoenix is a great choice for indoor / outdoor play, day or
              night. With the Phoenix you can play team 1 vs. team 2 or free for
              all. This tagger can be set to 10 or 25 lives depending on how
              long you would like the game to last. This tagger has unlimited
              ammunition reloads and temporary shield capability. No matter what
              mode you choose to play, the Phoenix is going to keep the party
              going!
            </p>
            <p className="lead">Per Tagger: $16</p>
            <p className="lead">10 Tagger Package: $144</p>
            <p className="lead">20 Tagger Package: $279</p>
            <Link to="/rent-simple" className="btn btn-primary my-2">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Taggers Hero Tagger */}
      <section className="hero-tagger py-4">
        <div className="container grid">
          <img src={heroPic} alt="" />
          <div>
            <h2 className="md">Hero</h2>
            <p className="lead">Keep it Simple</p>
            <p className="my-1">
              What can we say, everyone loves a Hero! The Hero laser tagger is
              no exception. This tagger is super easy and fun to use. With the
              Hero you can play up to four teams, this means you can play as few
              as team 1 vs. 2 or all four teams at once in a massive battle. The
              Hero has multiple styles to choose from that can be swapped
              through during game-play, adding engaging opportunities for each
              player. This dynamic tagger has a set of nine lives and can be
              reset quickly and with ease. A perfect choice for indoor play!
            </p>
            <p className="lead">Per Tagger: $14</p>
            <p className="lead">10 Tagger Package: $126</p>
            <p className="lead">20 Tagger Package: $246</p>
            <Link to="/rent-simple" className="btn btn-primary my-2">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Taggers;
