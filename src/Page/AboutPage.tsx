/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutPageStyle from "../Style/AboutPage";

const AboutPage = () => {
  return (
    <div>
      <div css={AboutPageStyle.aboutDivStyle}>
        <Header />
        <div></div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
