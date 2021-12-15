import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navList } from "../../data";

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
            {navList.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <Link
                    className={
                      location.pathname === `${url}` ? "checked" : undefined
                    }
                    to={url}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
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
