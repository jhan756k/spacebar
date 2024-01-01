/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import HeaderStyle from "../Style/Header";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (hamburgerOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [hamburgerOpen]);

  return (
    <div css={HeaderStyle.mediaQueries}>
      <div className="wrap" css={HeaderStyle.wrapStyle}>
        <div className="itemlist" css={HeaderStyle.itemListStyle}>
          <div className="logodiv" css={HeaderStyle.logoDivStyle}>
            <a href="/" className="logoimg">
              <img
                src="Assets\spacebar.png"
                alt="monkey"
                className="logoitem"
                css={HeaderStyle.logoItemStyle}
              />
            </a>
          </div>
          <div className="pagediv" css={HeaderStyle.pageDivStyle}>
            <HeaderStyle.PDivItem href="/">
              <i className="bi-insta" css={HeaderStyle.biInstaStyle} />
              space_bar
            </HeaderStyle.PDivItem>
            <HeaderStyle.PDivItem href="/">Home</HeaderStyle.PDivItem>
            <HeaderStyle.PDivItem href="/team">Team</HeaderStyle.PDivItem>
            <HeaderStyle.PDivItem href="/about">About</HeaderStyle.PDivItem>
            <HeaderStyle.PDivItem href="/blog">Blog</HeaderStyle.PDivItem>
          </div>
          <div className="hamburgerdiv" css={HeaderStyle.hamburgerDivStyle}>
            <Hamburger
              toggled={hamburgerOpen}
              toggle={setHamburgerOpen}
              color={hamburgerOpen ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
        {hamburgerOpen && (
          <div
            className="burgerblack"
            onClick={() => setHamburgerOpen(false)}
            css={HeaderStyle.burgerBlackStyle}
          />
        )}
        <div
          className="hamburgermenu"
          style={{
            visibility: hamburgerOpen ? "visible" : "hidden",
            transform: hamburgerOpen ? "translateX(0)" : "translateX(100%)",
            transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
          css={HeaderStyle.hamburgerMenuStyle}
        >
          <div
            className="hamburgermenulist"
            css={HeaderStyle.hamburgerMenuListStyle}
          >
            <div className="paneltitle" css={HeaderStyle.panelTitleStyle}>
              Menu
            </div>
            <HeaderStyle.hamburgerMenuItem href="/">
              Home
            </HeaderStyle.hamburgerMenuItem>
            <HeaderStyle.hamburgerMenuItem href="/team">
              Team
            </HeaderStyle.hamburgerMenuItem>
            <HeaderStyle.hamburgerMenuItem href="/about">
              About
            </HeaderStyle.hamburgerMenuItem>
            <HeaderStyle.hamburgerMenuItem href="/blog">
              Blog
            </HeaderStyle.hamburgerMenuItem>
            <hr className="menudivide" css={HeaderStyle.menuDivideStyle} />
            <a href="/" className="instaham" css={HeaderStyle.instaHamStyle}>
              <i className="ham-insta" css={HeaderStyle.hamInstaStyle} />
              space_bar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
