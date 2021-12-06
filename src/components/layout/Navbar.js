import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ title }) {
  const location = useLocation();

  //nav colour change
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        navbar.classList.add("nav-color");
      } else {
        navbar.classList.remove("nav-color");
      }
    };
  }, []);

  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">{title}</h1>
        <nav>
          <ul>
            <li>
              {/* className='checked' needs to be reactive */}
              <Link
                className={location.pathname === "/" ? "checked" : undefined}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/taggers" ? "checked" : undefined
                }
                to="/taggers"
              >
                Taggers
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/rent" ? "checked" : undefined
                }
                to="/rent"
              >
                Rent
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/contact" ? "checked" : undefined
                }
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Laser Tag Canada",
};

export default Navbar;
