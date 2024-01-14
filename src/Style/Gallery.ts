import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const modalCloseDrop = css({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 90,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
});

const modalBackdrop = css({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 100,
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  animation: `${fadeIn} 0.5s ease forwards`,
});

const modalContent = css({
  position: "absolute",
  width: "90vw",
  height: "90vh",
  background: "transparent",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  verticalAlign: "middle",
  mouseEvents: "none",
  pointerEvents: "none",
});

const galleryContainer = css({
  width: "85vw",
  margin: "0 auto",
});

const imageStyle = css({
  width: "100%",
  height: "80%",
  objectFit: "contain",
  zIndex: 101,
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const GalleryStyle = {
  modalBackdrop,
  modalContent,
  galleryContainer,
  imageStyle,
  modalCloseDrop,
};

export default GalleryStyle;
