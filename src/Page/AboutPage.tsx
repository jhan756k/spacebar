/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutPageStyle from "../Style/AboutPage";

const AboutPage = () => {
  return (
    <div>
      <AboutPageStyle.AboutDiv>
        <Header />
        <AboutPageStyle.ProblemDiv>
          <h1 css={AboutPageStyle.commonStyles}>
            Effective, sustainable
            <br /> laundry in space
          </h1>
          <p css={AboutPageStyle.commonStyles}>
            spacebar ensures clean and effective laundry, while maintaining
            <br />
            water reusability.{" "}
            <a href="/team" css={AboutPageStyle.teamLinkStyle}>--&gt; about our team</a>
          </p>
          <video autoPlay loop muted css={AboutPageStyle.commonStyles}>
            <source src="./Assets/model.mp4" type="video/mp4" />
          </video>
          <hr css={AboutPageStyle.commonStyles} />
          <h1 css={[AboutPageStyle.commonStyles, { animationDelay: "0.4s" }]}>
            1. The Problem
          </h1>
          <AboutPageStyle.ProblemImgDiv>
            <AboutPageStyle.ProblemImg>
              <img
                src="./Assets/prob1.jpg"
                alt="Problem1"
                css={AboutPageStyle.commonStyles}
              />
              <h3>
                Astronauts on the ISS excersize 2 hours every day to keep fit
              </h3>
            </AboutPageStyle.ProblemImg>
            <img
              src="./Assets/arrow.png"
              alt="arrow"
              css={AboutPageStyle.ArrowStyle}
            />
            <AboutPageStyle.ProblemImg>
              <img
                src="./Assets/prob2.jpg"
                alt="Problem1"
                css={AboutPageStyle.commonStyles}
              />
              <h3>Fresh clothes are continuously needed for astronauts</h3>
            </AboutPageStyle.ProblemImg>
            <img
              src="./Assets/arrow.png"
              alt="arrow"
              css={AboutPageStyle.ArrowStyle}
            />
            <AboutPageStyle.ProblemImg>
              <img
                src="./Assets/prob3.jpg"
                alt="Problem1"
                css={AboutPageStyle.commonStyles}
              />
              <h3>Laundry is not possible due to the lack of water in space</h3>
            </AboutPageStyle.ProblemImg>
            <img
              src="./Assets/arrow.png"
              alt="arrow"
              css={AboutPageStyle.ArrowStyle}
            />
            <AboutPageStyle.ProblemImg>
              <img
                src="./Assets/prob4.jpg"
                alt="Problem1"
                css={AboutPageStyle.commonStyles}
              />
              <h3>Used clothes are stored along with other wastes</h3>
            </AboutPageStyle.ProblemImg>
          </AboutPageStyle.ProblemImgDiv>
        </AboutPageStyle.ProblemDiv>
        <Footer />
      </AboutPageStyle.AboutDiv>
    </div>
  );
};

export default AboutPage;
