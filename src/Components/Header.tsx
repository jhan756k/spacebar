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
      <div css={HeaderStyle.wrapStyle}>
        <div css={HeaderStyle.itemListStyle}>
          <div css={HeaderStyle.logoDivStyle}>
            <a href="/">
              <img
                src="Assets\spacebar.png"
                alt="monkey"
                css={HeaderStyle.logoItemStyle}
              />
            </a>
          </div>
          <div className="pagediv" css={HeaderStyle.pageDivStyle}>
            <HeaderStyle.PDivItem
              href="https://www.instagram.com/slash_spacebar?igsh=MThxbDdyNTdybTd5OA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <i css={HeaderStyle.biInstaStyle} />
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
            onClick={() => setHamburgerOpen(false)}
            css={HeaderStyle.burgerBlackStyle}
          />
        )}
        <div
          style={{
            visibility: hamburgerOpen ? "visible" : "hidden",
            transform: hamburgerOpen ? "translateX(0)" : "translateX(100%)",
            transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
          css={HeaderStyle.hamburgerMenuStyle}
        >
          <div css={HeaderStyle.hamburgerMenuListStyle}>
            <div css={HeaderStyle.panelTitleStyle}>Menu</div>
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
            <hr css={HeaderStyle.menuDivideStyle} />
            <a
              href="https://www.instagram.com/slash_spacebar?igsh=MThxbDdyNTdybTd5OA%3D%3D&utm_source=qr"
              target="_blank"
              css={HeaderStyle.instaHamStyle}
            >
              <i css={HeaderStyle.hamInstaStyle} />
              space_bar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
