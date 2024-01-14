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

const AboutDiv = styled.div({
  background: "rgb(21, 23, 25)",
  position: "absolute",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
  width: "100%",
  overflow: "hidden",
});

const teamLinkStyle = css({
  color: "#A96E28",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  "&:hover": {
    cursor: "pointer",
    color: "#FBC139",
  },
});

const ProblemDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
  marginTop: "70px",
  "& h1": {
    color: "#FBC139",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "0",
  },
  "& p": {
    color: "#A96E28",
    fontSize: "25px",
    textAlign: "center",
    margin: "0 0 20px 0",
    animationDelay: "0.1s",
  },
  "& video": {
    width: "60vw",
    height: "auto",
    marginTop: "20px",
    animationDelay: "0.2s",
    border: "2px solid #FBC139",
    borderRadius: "20px",
  },
  "& hr": {
    width: "95vw",
    border: "1px dashed #A96E28",
    borderRadius: "20px",
    margin: "100px 0",
    animationDelay: "0.3s",
  },
});

const ProblemImgDiv = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "50px",
  marginBottom: "30px",
  overflow: "hidden",
});

const ProblemImg = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "50px",
  width: "200px",
  "& img": {
    width: "200px",
    margin: "20px",
    border: "2px solid #FBC139",
    borderRadius: "50%",
    animationDelay: "0.5s",
  },
  "& h3": {
    color: "#A96E28",
    fontSize: "20px",
    fontWeight: "400",
    margin: "0",
    animationDelay: "0.5s",
  },
});

const ArrowStyle = css({
  width: "150px",
  verticalAlign: "middle",
  paddingBottom: "110px",
  animationDelay: "0.5s",
});

const problemAbstract = css({
  color: "#A96E28",
  fontSize: "15px",
  fontWeight: "400",
  width: "80%",
  margin: "0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  "& img": {
    width: "400px",
    margin: "20px",
    borderRadius: "20px",
    border: "2px solid #FBC139",
  },
});

const SolutionDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
  marginTop: "100px",
  "& h1": {
    color: "#FBC139",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "0",
  },
  "& p": {
    color: "#A96E28",
    fontSize: "25px",
    textAlign: "center",
    margin: "0 0 20px 0",
    animationDelay: "0.1s",
  },
  "& hr": {
    width: "95vw",
    border: "1px dashed #A96E28",
    borderRadius: "20px",
    margin: "100px 0",
    animationDelay: "0.3s",
  },
});

const SolutionExp = css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "space-evenly",
  marginTop: "50px",
});

const ExplainTwoDiv = styled.div({
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "50px",
  width: "40%",
  "& h1": {
    color: "#FBC139",
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "0",
  },
  "& h3": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "#A96E28",
    fontSize: "23px",
    fontWeight: "400",
    margin: "0",
    textAlign: "justify",
    justifyContent: "center",
    "& img": {
      display: "block",
      width: "90%",
      margin: "20px",
      borderRadius: "20px",
      border: "2px solid #FBC139",
    },
    "@media (max-width: 1000px)": {
      textAlign: "center",
    },
  },
});

const AboutPageStyle = {
  AboutDiv,
  commonStyles,
  ProblemDiv,
  ProblemImgDiv,
  ProblemImg,
  ArrowStyle,
  teamLinkStyle,
  problemAbstract,
  SolutionDiv,
  SolutionExp,
  ExplainTwoDiv,
};

export default AboutPageStyle;
