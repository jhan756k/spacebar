import { css, keyframes } from "@emotion/react";

const fadeInUp = keyframes({
  from: {
    transform: "translate(0px, 20px)",
    opacity: 0,
  },
  to: {
    visibility: "visible",
    transform: "translate(0px, 0)",
    opacity: 1,
  },
});

const commonStyles = css({
  visibility: "hidden",
  animation: `${fadeInUp} 0.5s ease backwards`,
  animationFillMode: "forwards",
});

const homediv = css({
  background:
    "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(45, 19, 50, 1) 99%, rgba(41, 15, 40, 1) 100%)",
  position: "absolute",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
  width: "100%",
  overflow: "hidden",
});

const background = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

const titletextdiv = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "70px",
  width: "100vw",
});

const title = css({
    color: "#FBC139",

  // #d9e3ea #9ba9b4
  fontWeight: "bold",
  fontSize: "60px",
  marginBottom: "10px",
  animationDelay: "0.1s",
});

const titleexp = css({
  color: "#A96E28",
  fontSize: "25px",
  textAlign: "center",
  animationDelay: "0.2s",
});

const titlebtndiv = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px",
  marginBottom: "50px",
});

const buttonBase = css({
  fontSize: "18px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "0.2s",
  width: "180px",
  height: "50px",
  borderRadius: "3px",
  "@media (max-width: 430px)": {
    width: "150px",
    height: "40px",
  },
});

const developbtn = css([
  buttonBase,
  {
    border: "2px solid #33363a",
    backgroundColor: "#33363a",
    color: "#FBC139",
    marginLeft: "10px",
    animationDelay: "0.3s",
    "&:hover": {
      backgroundColor: "#FBC139",
      color: "black",
      border: "2px solid white",
    },
  },
]);

const aboutbtn = css([
  buttonBase,
  {
    border: "2px solid #FBC139",
    backgroundColor: "#FBC139",
    color: "black",
    marginRight: "10px",
    animationDelay: "0.4s",
    "&:hover": {
      backgroundColor: "#33363a",
      color: "#FBC139",
      border: "2px solid white",
    },
  },
]);

const thumbnaildiv = css({
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  animationDelay: "0.5s",
});

const thumbnail = css({
  width: "65vw",
  objectFit: "contain",
  border: "2px solid #FBC139",
  borderRadius: "20px",
});

const playbtn = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
  borderRadius: "50%",
  width: "7vw",
  opacity: 0.7,
});

const titlevid = css({
  marginTop: "50px",
  aspectRatio: "16/9",
  width: "75vw",
  objectFit: "contain",
});

const modalBackground = css({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 100,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const mediaQueries = css({
  "@media (max-width: 980px)": {
    ".thumbnail": {
      width: "90vw",
    },
    ".playbtn": {
      width: "10vw",
    },
    ".titlevid": {
      width: "90vw",
    },
  },
});

const HomePageStyle = {
  commonStyles,
  homediv,
  background,
  titletextdiv,
  title,
  titleexp,
  titlebtndiv,
  developbtn,
  aboutbtn,
  thumbnaildiv,
  thumbnail,
  playbtn,
  titlevid,
  modalBackground,
  mediaQueries,
};

export default HomePageStyle;
