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
            <a href="/team" css={AboutPageStyle.teamLinkStyle}>
              --&gt; about our team
            </a>
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
              <h3 css={AboutPageStyle.commonStyles}>
                Astronauts on the ISS excersize 2 hours every day to keep fit
              </h3>
            </AboutPageStyle.ProblemImg>
            <img
              src="./Assets/arrow.png"
              alt="arrow"
              css={[AboutPageStyle.commonStyles, AboutPageStyle.ArrowStyle]}
            />
            <AboutPageStyle.ProblemImg>
              <img
                src="./Assets/prob2.jpg"
                alt="Problem1"
                css={AboutPageStyle.commonStyles}
              />
              <h3 css={AboutPageStyle.commonStyles}>
                Fresh clothes are continuously needed for astronauts
              </h3>
            </AboutPageStyle.ProblemImg>
            <img
              src="./Assets/arrow.png"
              alt="arrow"
              css={[AboutPageStyle.commonStyles, AboutPageStyle.ArrowStyle]}
            />
            <AboutPageStyle.ProblemImg>
              <img
                src="./Assets/prob3.jpg"
                alt="Problem1"
                css={AboutPageStyle.commonStyles}
              />
              <h3 css={AboutPageStyle.commonStyles}>
                Laundry is not possible due to the lack of water in space
              </h3>
            </AboutPageStyle.ProblemImg>
            <img
              src="./Assets/arrow.png"
              alt="arrow"
              css={[AboutPageStyle.commonStyles, AboutPageStyle.ArrowStyle]}
            />
            <AboutPageStyle.ProblemImg>
              <img
                src="./Assets/prob4.jpg"
                alt="Problem1"
                css={AboutPageStyle.commonStyles}
              />
              <h3 css={AboutPageStyle.commonStyles}>
                Used clothes are stored along with other wastes
              </h3>
            </AboutPageStyle.ProblemImg>
          </AboutPageStyle.ProblemImgDiv>
          <div css={AboutPageStyle.problemAbstract}>
            <div
              css={[AboutPageStyle.commonStyles, { animationDelay: "0.6s" }]}
            >
              <h2>
                - Water is non-reusable when artificial detergents are used
              </h2>
              <h2>- Colossal amount of weight & storage space needed </h2>
              <h2>- 150lbs of clothing per person every year</h2>
              <h2>- Intense & unpleasant odor</h2>
              <h2>- Hygiene issue</h2>
            </div>
            <img
              src="./Assets/spacelaundry.jpg"
              alt="sl"
              css={[AboutPageStyle.commonStyles, { animationDelay: "0.6s" }]}
            />
          </div>
        </AboutPageStyle.ProblemDiv>
        <AboutPageStyle.SolutionDiv>
          <h1 css={[AboutPageStyle.commonStyles, { animationDelay: "0.7s" }]}>
            2. Our Solution
          </h1>
          <h3
            css={[
              {
                animationDelay: "0.8s",
                color: "#A96E28",
                fontSize: "25px",
                fontWeight: "400",
                width: "60%",
                textAlign: "center",
              },
            ]}
          >
            spacebar creates a revolutionary laundry system for sustainable
            living in outer space. Our innovation can be illustrated in two
            essential parts:{" "}
            <span
              css={{
                textDecoration: "underline",
                fontStyle: "italic",
                textUnderlineOffset: "6px",
                fontWeight: "bold",
              }}
            >
              The unique laundry beating method and the dissolvable ammonia
              detergent.
            </span>
          </h3>
          <div css={AboutPageStyle.SolutionExp}>
            <AboutPageStyle.ExplainTwoDiv>
              <h1>Cavitation Effect</h1>
              <h3>
                &emsp;Inspired by the Korean ancestors’ laundry bat, spacebar
                utilizes the cavitation effect to launder clothes. When a
                laundry bat hits a textile, it creates ultrasonic waves in
                water, creating cavitation bubbles. As those bubbles pop, they
                eliminate contaminants from textiles without the need for a
                traditional detergent.
                <img src="./Assets/cavitation.png" alt="cavitation" />
                &emsp;Instead of a bat shape, spacebar utilizes tiny silver
                balls, leveraging silver’s exceptional cleansing properties
                which can kill 650 different types of bacteria and germs. Due to
                the geometrical property of the sphere, the contact point of the
                balls is minimized. Hence, the impact force is concentrated on a
                tiny point, generating powerful and high-pressure cavitation
                bubbles.
                <img src="./Assets/model.png" alt="silverball" />
                &emsp;As those high-pressure cavitation bubbles pop, they
                effectively eliminate various kinds of contaminations on the
                textile, conducting clean laundry. This unique structure also
                allows the minimization of water usage by directing water
                specifically between two washboards, reducing water usage to
                approximately 10% of traditional washing machines.
              </h3>
            </AboutPageStyle.ExplainTwoDiv>
            <div
              css={{
                width: "0px",
                height: "auto",
                margin: "0",
                border: "1px dashed #A96E28",
              }}
            />
            <AboutPageStyle.ExplainTwoDiv>
              <h1>Ammonia Detergent</h1>
              <h3>
                &emsp;We introduce a novel approach to detergent production by
                extracting ammonia from urine and converting it into an
                effective yet easily dissolvable cleaning agent.
                <img src="./Assets/ammonia.png" alt="ammonia" />
                &emsp;Alongside ammonia, we put various enzymes that possess cleansing
                ability into detergent to make our detergent even more
                effective. Namely, protease enzyme dissolves protein
                contamination, and lipase enzyme eliminates oily stains.
                Integrating with the ISS's water purification system, which can
                purify ammonia and enzymes, spacebar ensures the recycling of
                water for reuse, making the process sustainable and
                resource-efficient.
                <img src="./Assets/water.jpg" alt="water" />
              </h3>
            </AboutPageStyle.ExplainTwoDiv>
          </div>
        </AboutPageStyle.SolutionDiv>
        <Footer />
      </AboutPageStyle.AboutDiv>
    </div>
  );
};

export default AboutPage;
