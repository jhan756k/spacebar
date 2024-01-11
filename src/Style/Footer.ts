import { css } from "@emotion/react";

const footer = css({
  position: "relative",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  margin: "100px 0 20px 0",
  "& .fdiv1": {
    display: "flex",
    margin: "0 10vw 0 10vw",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
  "& .fdiv2": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
  "& .ftop": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    "& h1": {
      display: "block",
      color: "#FBC139",
      margin: 0,
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "left",
    },
    "& a": {
      textDecoration: "none",
      color: "#FBC139",
      textAlign: "left",
      fontSize: "20px",
      margin: "10px 0 10px 0",
      "&:hover": {
        color: "white",
        transition: "all 0.2s",
        "& svg": {
          color: "white",
        },
      },
    },
  },
  "& .fbottom": {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
});

const footerLogo = css({
  width: "400px",
  objectFit: "contain",
  margin: "10px",
  "& img": {
    display: "block",
    width: "200px",
    objectFit: "contain",
  },
  "& h2": {
    margin: "10px 0 0 0",
    color: "#FBC139",
    fontSize: "20px",
    fontWeight: "normal",
    textAlign: "left",
  },
});

const footerItems = css({
  display: "flex",
  flexDirection: "column",
  width: "400px",
  margin: "10px",
});

const footerSocial = css({
  margin: "10px",
  verticalAlign: "middle",
});

const footerIcon = css({
  display: "inline-block",
  color: "#FBC139",
  margin: "0 10px 0 10px",
  width: "30px",
  height: "30px",
  objectFit: "contain",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.2)",
    transition: "all 0.2s",
    color: "white",
  },
});

const footerTextIcon = css({
  color: "#FBC139",
  verticalAlign: "middle",
});

const FooterStyle = {
  footer,
  footerLogo,
  footerItems,
  footerSocial,
  footerIcon,
  footerTextIcon,
};

export default FooterStyle;
