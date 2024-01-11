/** @jsxImportSource @emotion/react */
import FooterStyle from "../Style/Footer";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div css={FooterStyle.footer}>
        <div className="fdiv1">
          <div className="fdiv2">
            <div className="ftop">
              <div css={FooterStyle.footerLogo}>
                <img src="Assets\yellow.png" alt="" />
                <h2>
                  Our innovation, spacebar&trade;, revolutionizes space washing
                  machines by ingeniously addressing existing challenges.
                </h2>
              </div>
              <div
                css={[
                  FooterStyle.footerItems,
                  {
                    width: "280px",
                  },
                ]}
              >
                <h1>Contact</h1>
                <a href="tel:01085517793" target="_blank">
                  <FaPhoneAlt css={FooterStyle.footerTextIcon} /> (+82) 10 8551
                  7793
                </a>
                <a href="mailto:jhan756k@gmail.com" target="_blank">
                  <IoMdMail css={FooterStyle.footerTextIcon} />{" "}
                  jhan756k@gmail.com
                </a>
                <a href="https://github.com/jhan756k" target="_blank">
                  <ImGithub css={FooterStyle.footerTextIcon} /> jhan756k
                </a>
                <a
                  href="https://www.google.com/maps/place/Korean+Minjok+Leadership+Academy/data=!3m1!4b1!4m6!3m5!1s0x3563affa2612a7cd:0xab647412adc594ac!8m2!3d37.4588684!4d128.1456915!16zL20vMDhkdDBx?entry=ttu"
                  target="_blank"
                >
                  <FaLocationDot css={FooterStyle.footerTextIcon} /> 800
                  Bonghwa-ro, Anheung-myeon, Gangwon-do, Korea
                </a>
              </div>
              <div
                css={[
                  FooterStyle.footerItems,
                  {
                    width: "120px",
                  },
                ]}
              >
                <h1>Sitemap</h1>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/team">Team</a>
                <a href="/blog">Blog</a>
              </div>
            </div>
            <div className="fbottom">
              <div>
                <h1
                  css={{
                    color: "#FBC139",
                    fontSize: "20px",
                    margin: "10px",
                  }}
                >
                  © 2024 spacebar&trade;. All rights reserved.
                </h1>
              </div>
              <div css={FooterStyle.footerSocial}>
                <a
                  href="https://www.instagram.com/slash_spacebar?igsh=MThxbDdyNTdybTd5OA%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <FaInstagram css={FooterStyle.footerIcon} />
                </a>
                <a href="https://github.com/jhan756k/spacebar" target="_blank">
                  <AiFillGithub css={FooterStyle.footerIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
