import React from "react";

function Footer({ copyright }) {
  return (
    <footer className="footer bg-primary-gray py-3">
      <div className="container">
        {/* hiding footer-sections in css for now until I can get more content  */}
        <div className="footer-sections grid grid-3">
          <div>
            <h2>About LTC</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur iusto tenetur vero sapiente officia esse.
            </p>
          </div>
          <div>
            <h2>Instagram</h2>
          </div>
        </div>
        {/* <hr />  */}
        <div className="footer-bottom flex">
          <div>
            <p>{`Copyright © ${copyright} All rights reserved`}</p>
          </div>
          <div className="social flex">
            <a
              href="https://www.instagram.com/canadalasertag/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
