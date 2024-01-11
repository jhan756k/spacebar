import { css } from "@emotion/react";
import styled from "@emotion/styled";

const wrapStyle = css({
  display: "block",
  width: "100vw",
  position: "relative",
  top: 0,
  backgroundColor: "transparent",
});

const itemListStyle = css({
  fontSize: 23,
  padding: "0 4% 0 5%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const biInstaStyle = css({
  "&::before": {
    verticalAlign: "middle",
    content: '""',
    backgroundImage:
      'url("https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico")',
    backgroundSize: "cover",
    width: 25,
    height: 25,
    display: "inline-block",
    marginRight: 5,
  },
});

const logoDivStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 15,
});

const pageDivStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 8,
});

const logoItemStyle = css({
  objectFit: "contain",
  maxWidth: 250,
});

const PDivItem = styled.a({
  textDecoration: "none",
  color: "#FBC139",
  margin: "0 20px",
  "&:hover": {
    color: "white",
  },
});

const hamburgerDivStyle = css({
  display: "none",
  zIndex: 101,
});

const hamburgerMenuStyle = css({
  position: "fixed",
  top: 0,
  left: "35%",
  zIndex: 100,
  width: "80vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 1)",
  display: "grid",
  justifyContent: "left",
  alignItems: "left",
  overflow: "hidden",
});

const burgerBlackStyle = css({
  position: "fixed",
  top: 0,
  zIndex: 99,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  overflow: "hidden",
});

const hamburgerMenuListStyle = css({
  margin: "30px 0 0 0",
});

const panelTitleStyle = css({
  fontSize: 40,
  fontWeight: "bold",
  margin: "30px 0 30px 25px",
  color: "purple",
});

const hamburgerMenuItem = styled.a({
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "left",
  textAlign: "left",
  textDecoration: "none",
  color: "black",
  fontSize: 30,
  fontWeight: "bold",
  margin: "20px 0 20px 25px",
});

const menuDivideStyle = css({
  width: "50vw",
  height: 2,
  backgroundColor: "black",
  border: "none",
  margin: "20px 0 20px 25px",
});

const instaHamStyle = css({
  fontSize: 30,
  fontWeight: "bold",
  textDecoration: "none",
  color: "black",
});

const hamlogoStyle = css({
  backgroundSize: "cover",
  width: 35,
  height: 35,
  display: "inline-block",
  margin: "0 0 0 25px",
});

const mediaQueries = css({
  "@media (max-width: 980px)": {
    ".pagediv": {
      display: "none",
    },
    ".hamburgerdiv": {
      display: "block",
    },
  },
});

const HeaderStyle = {
  wrapStyle,
  itemListStyle,
  biInstaStyle,
  logoDivStyle,
  pageDivStyle,
  logoItemStyle,
  PDivItem,
  hamburgerDivStyle,
  hamburgerMenuStyle,
  burgerBlackStyle,
  hamburgerMenuListStyle,
  panelTitleStyle,
  hamburgerMenuItem,
  menuDivideStyle,
  instaHamStyle,
  hamlogoStyle,
  mediaQueries,
};

export default HeaderStyle;
