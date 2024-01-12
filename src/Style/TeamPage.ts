import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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

const TeamDivStyle = styled.div({
  background: "rgb(21, 23, 25)",
  position: "absolute",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
  width: "100%",
  overflow: "hidden",
});

const TeamPageContent = styled.div({
  display: "flex",
  flexDirection: "column",
  color: "#FBC139",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "70px",
  textAlign: "center",
  "& h1": {
    fontSize: "50px",
    fontWeight: "bold",
    margin: "0",
  },
});

const logoStyle = css({
  objectFit: "contain",
  width: "170px",
  margin: "0",
  verticalAlign: "middle",
});

const TeamImgDiv = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  width: "80%",
  marginTop: "10px",
  marginBottom: "70px",
});

const TeamImg = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    objectFit: "contain",
    width: "170px",
    margin: "20px",
    verticalAlign: "middle",
    border: "2px solid #FBC139",
    borderRadius: "50%",
  },
  "& h2": {
    fontSize: "25px",
    fontWeight: "500",
    margin: "0",
  },
  "& h3": {
    color: "#A96E28",
    fontSize: "20px",
    fontWeight: "400",
    fontStyle: "italic",
    margin: "10px",
  },
});

const TeamExpDiv = css({
  display: "flex",
  color: "#A96E28",
  fontSize: "30px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
  marginBottom: "70px",
  animationDelay: "0.1s",
});

const teamImgStyle = css({
  objectFit: "contain",
  width: "80%",
  marginTop: "100px",
  verticalAlign: "middle",
  border: "2px solid #FBC139",
  borderRadius: "20px",
  animationDelay: "0.8s",
});

const teamExpStyle = css({
  color: "#A96E28",
  fontSize: "28px",
  fontWeight: "400",
  textAlign: "justify",
  width: "75%",
  marginTop: "40px",
  animationDelay: "0.7s",
});

const TeamPageStyle = {
  TeamDivStyle,
  logoStyle,
  TeamPageContent,
  TeamImg,
  TeamImgDiv,
  TeamExpDiv,
  teamImgStyle,
  commonStyles,
  teamExpStyle,
};

export default TeamPageStyle;
