import { useState } from "react";
import HeroBanner from "../layout/HeroBanner";

function Rent() {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    postal: "",
    date: "",
    numTaggers: "",
    comments: "",
    tagger: ["", "Phoenix", "Hero", "Need more info"],
  };

  const [text, setText] = useState(initialState);

  const [address, setAddress] = useState("");

  //FUNCS
  //Text change
  function textChange(e) {
    let value = e.target.value;

    if (e.target.name === "tagger") {
      setText({
        ...text,
        [e.target.name]: [value],
      });
    } else {
      setText({
        ...text,
        [e.target.name]: value,
      });
    }
  }

  //Address Change
  function addressChange(e) {
    console.log(e.target.value);
  }

  //Tagger options restock state
  const taggerTypeRestock = () => {
    setText({
      ...text,
      tagger: ["", "Phoenix", "Hero", "Need more info"],
    });
  };

  //Submit form
  const submitRent = (e) => {
    e.preventDefault();
    //I think this is how I would extract all my diff states into one obj
    console.log({ address: address, ...text, tagger: text.tagger.toString() });
    setText({ ...initialState });
  };

  return (
    <>
      <HeroBanner
        type="rent"
        title="Rent"
        lead="Renting laser tag is easy with LTC. Spice up your next event and
        secure your order."
      />

      {/* Rent Form Section */}
      <section className="rent-form-section py-4">
        <div className="container">
          <div className="rent-content">
            <i className="fas fa-truck-loading fa-5x"></i>
            <h2 className="lg">Get Started</h2>
            <p className="lead">
              Fill out the form below to secure your date and taggers!
            </p>
          </div>
          {/* form */}
          <div className="rent-form">
            <form onSubmit={submitRent} method="POST" action="rentForm.php">
              <div className="form-control">
                <label htmlFor="name">Name/Organization</label>
                <input
                  onChange={textChange}
                  value={text.name}
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input
                  onChange={textChange}
                  value={text.phone}
                  type="tel"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  onChange={textChange}
                  value={text.email}
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>

              {/* Google Api Fetch Address, Google Autocomplete goes here */}

              <div className="form-control">
                <label htmlFor="postal">Postal Code</label>
                <input
                  onChange={textChange}
                  value={text.postal}
                  type="text"
                  name="postal"
                  id="postal"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date (of event)</label>
                <input
                  onChange={textChange}
                  value={text.date}
                  type="date"
                  name="date"
                  id="date"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="tagger">Laser Tagger</label>
                <select
                  onClick={taggerTypeRestock}
                  onChange={textChange}
                  name="tagger"
                  id="tagger"
                >
                  {text.tagger.map((tag) => {
                    return (
                      <option key={Math.random()} value={tag}>
                        {tag}
                      </option>
                    );
                  })}
                </select>
                <small>Please select one</small>
              </div>
              <div className="form-control">
                <label htmlFor="numTaggers">Number of Taggers</label>
                <input
                  onChange={textChange}
                  type="number"
                  value={text.numTaggers}
                  name="numTaggers"
                  id="numTaggers"
                />
              </div>
              <div className="form-control">
                <label htmlFor="comments">Questions/Comments</label>
                <textarea
                  onChange={textChange}
                  value={text.comments}
                  name="comments"
                  id="comments"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <input
                className="btn btn-outline"
                name="submit"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rent;
