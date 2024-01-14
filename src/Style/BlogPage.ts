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

const BlogDiv = styled.div({
  background: "rgb(21, 23, 25)",
  position: "absolute",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
  width: "100%",
  overflow: "hidden",
});

const GalleryDiv = styled.div({
  alignItems: "center",
  justifyContent: "center",
  marginTop: "70px",
  marginBottom: "150px",
  width: "100vw",
  overflow: "hidden",
});

const BlogPageStyle = {
  BlogDiv,
  commonStyles,
  GalleryDiv,
};

export default BlogPageStyle;
