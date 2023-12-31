import { useState } from "react";
import "../Style/Header.css";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div>
      <div className="wrap">
        <div className="itemlist">
          <div className="logodiv">
            <a href="/" className="logoimg">
              <img
                src="Assets\spacebar.png"
                alt="monkey"
                className="logoitem"
              />
            </a>
          </div>
          <div className="pagediv">
            <a href="/" className="pdivitem">
              <i className="bi-insta" />
              space_bar
            </a>
            <a href="/" className="pdivitem">
              Home
            </a>
            <a href="/" className="pdivitem">
              Team
            </a>
            <a href="/" className="pdivitem">
              About
            </a>
            <a href="/" className="pdivitem">
              Blog
            </a>
          </div>
          <div className="hamburgerdiv">
            <Hamburger
              toggled={hamburgerOpen}
              toggle={setHamburgerOpen}
              color={hamburgerOpen ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
        {hamburgerOpen && <div className="burgerblack" />}
        <div
          className="hamburgermenu"
          style={{
            visibility: hamburgerOpen ? "visible" : "hidden",
            transform: hamburgerOpen ? "translateX(0)" : "translateX(100%)",
            transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
        >
          <div className="hamburgermenulist">
            <div className="paneltitle">Menu</div>
            <div className="hamburgermenuitem">
              <a href="/" className="hamburgermenuitem">
                Home
              </a>
            </div>
            <div className="hamburgermenuitem">
              <a href="/" className="hamburgermenuitem">
                Team
              </a>
            </div>
            <div className="hamburgermenuitem">
              <a href="/" className="hamburgermenuitem">
                About
              </a>
            </div>
            <div className="hamburgermenuitem">
              <a href="/" className="hamburgermenuitem">
                Blog
              </a>
            </div>
            <a href="/" className="instaham">
              <i className="ham-insta" />
              space_bar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
