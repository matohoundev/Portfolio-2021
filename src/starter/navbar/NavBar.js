import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Anchor } from "antd";

const { Link } = Anchor;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    if (window.innerWidth > 1024) {
      setToggleMenu(false);
    }

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Fragment>
      {toggleMenu && (
        <div
          className="nav-bg"
          data-aos="nav-slide"
          data-aos-duration="300"
        ></div>
      )}
      <nav>
        <Anchor>
          <Link href="/" className="navbar-brand" title="AM" />
        </Anchor>
        {(toggleMenu || largeur > 1023) && (
          <div className="navbar-collapse" onClick={toggleNavSmallScreen}>
            <ul
              className="navbar-nav"
              data-aos="nav-fade-right"
              data-aos-duration="300"
            >
              <li>
                <Anchor>
                  <Link href="/#project" title="Projet" />
                </Anchor>
              </li>
              <li>
                <Anchor>
                  <Link href="/#contact" title="Contact" />
                </Anchor>
              </li>
            </ul>
          </div>
        )}
        <button onClick={toggleNavSmallScreen} className="navbar-toggler">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </Fragment>
  );
};

export default Navbar;
