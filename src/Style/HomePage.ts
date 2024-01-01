import { css, keyframes } from '@emotion/react';

const fadeInUp = keyframes({
  from: {
    transform: 'translate(0px, 20px)',
    opacity: 0,
  },
  to: {
    visibility: 'visible',
    transform: 'translate(0px, 0)',
    opacity: 1,
  },
});

const commonStyles = css({
  visibility: 'hidden',
  animation: `${fadeInUp} 0.5s ease backwards`,
  animationFillMode: 'forwards',
});

const homediv = css({
  background: 'linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(99, 9, 121, 1) 36%, rgba(89, 0, 255, 1) 100%)',
  position: 'absolute',
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2000px',
  width: '100%',
  overflow: 'hidden',
});

const alldiv = css({
  background: 'rgba(21, 23, 25, 0.7)',
  position: 'inherit',
  height: 'inherit',
  width: 'inherit',
});

const background = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const titletextdiv = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '70px',
  width: '100vw',
});

const title = css({
  color: '#d9e3ea',
  fontWeight: 'bold',
  fontSize: '60px',
  marginBottom: '10px',
  animationDelay: '0.1s',
});

const titleexp = css({
  color: '#9ba9b4',
  fontSize: '23px',
  textAlign: 'center',
  animationDelay: '0.2s',
});

const titlebtndiv = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',
  marginBottom: '50px',
});

const buttonBase = css({
  fontSize: '18px',
  fontWeight: '400',
  cursor: 'pointer',
  transition: '0.2s',
  width: '180px',
  height: '50px',
  borderRadius: '2px',
  '@media (max-width: 430px)': {
    width: '150px',
    height: '40px',
  },
});

const developbtn = css([
  buttonBase,
  {
    border: '1px solid #33363a',
    backgroundColor: '#33363a',
    color: 'white',
    marginLeft: '10px',
    animationDelay: '0.3s',
    '&:hover': {
      backgroundColor: '#25282c',
      border: '1px solid #25282c',
    },
  }
]);

const aboutbtn = css([
  buttonBase,
  {
    border: '1px solid #5d5dff',
    backgroundColor: '#5d5dff',
    color: 'white',
    marginRight: '10px',
    animationDelay: '0.4s',
    '&:hover': {
      backgroundColor: '#4b4acf',
      border: '1px solid #4b4acf',
    },
  }
]);

const thumbnaildiv = css({
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  animationDelay: '0.5s',
});

const thumbnail = css({
  width: '65vw',
  objectFit: 'contain',
});

const playbtn = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  borderRadius: '50%',
  width: '8%',
  opacity: 0.7,
});

const titlevid = css({
  marginTop: '60px',
  width: '75vw',
  objectFit: 'contain',
});

const modalBackground = css({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const HomePageStyle = {
  commonStyles, homediv, alldiv, background, titletextdiv,
  title, titleexp, titlebtndiv, developbtn, aboutbtn,
  thumbnaildiv, thumbnail, playbtn, titlevid, modalBackground,
};

export default HomePageStyle;