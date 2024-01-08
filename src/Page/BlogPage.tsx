/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlogPageStyle from "../Style/BlogPage";

const AboutPage = () => {
  return (
    <div>
      <div css={BlogPageStyle.blogDivStyle}>
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
