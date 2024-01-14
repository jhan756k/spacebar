/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TeamPageStyle from "../Style/TeamPage";

const TeamPage = () => {
  return (
    <div>
      <TeamPageStyle.TeamDivStyle>
        <Header />
        <TeamPageStyle.TeamPageContent>
          <div css={[TeamPageStyle.commonStyles, { display: "flex" }]}>
            <h1>Team&nbsp;&nbsp;</h1>
            <img
              src="./Assets/slashyellow.png"
              alt="slash"
              css={TeamPageStyle.logoStyle}
            />
          </div>
          <div css={[TeamPageStyle.commonStyles, TeamPageStyle.TeamExpDiv]}>
            KMLA 27th Wavers (Class of 2025)
          </div>
          <TeamPageStyle.TeamImgDiv>
            <TeamPageStyle.TeamImg
              css={[TeamPageStyle.commonStyles, { animationDelay: "0.2s" }]}
            >
              <img src="./Assets/성주.png" alt="성주" />
              <h2>Sungjoo Kim</h2>
              <h3>Founder & CEO</h3>
            </TeamPageStyle.TeamImg>
            <TeamPageStyle.TeamImg
              css={[TeamPageStyle.commonStyles, { animationDelay: "0.3s" }]}
            >
              <img src="./Assets/민재.png" alt="민재" />
              <h2>Minjae Jeon</h2>
              <h3>Co-Founder & CTO</h3>
            </TeamPageStyle.TeamImg>
            <TeamPageStyle.TeamImg
              css={[TeamPageStyle.commonStyles, { animationDelay: "0.4s" }]}
            >
              <img src="./Assets/민용.png" alt="민용" />
              <h2>Minyong Kim</h2>
              <h3>Co-Founder & CFO</h3>
            </TeamPageStyle.TeamImg>
            <TeamPageStyle.TeamImg
              css={[TeamPageStyle.commonStyles, { animationDelay: "0.5s" }]}
            >
              <img src="./Assets/준희.png" alt="준희" />
              <h2>Jooney Han</h2>
              <h3>Co-Founder & COO</h3>
            </TeamPageStyle.TeamImg>
          </TeamPageStyle.TeamImgDiv>
          <h1 css={[TeamPageStyle.commonStyles, { animationDelay: "0.6s" }]}>
            About Us
          </h1>
          <h3 css={[TeamPageStyle.commonStyles, TeamPageStyle.teamExpStyle]}>
            &emsp;Our team, /slash, consists of four members. Seongju Kim, the Chief
            Executive Officer, Minyong Kim, the Chief Financial Officer, Minjae
            Jeon, the Chief Technology Officer, and Jooney Han, the Chief
            Operating Officer. Seongju is the leader of our team, supervising
            every decision we make as a team. Minjae and Jooney manage the
            technical parts of our innovation, and Minyong is in charge of the
            business and marketing aspects. In the process of creating spacebar,
            we were motivated by the current problems associated with the
            difficulty of laundry in space and got the inspiration for the
            design from traditional laundry methods, instead of using
            detergents. We together aim to solve the issue of laundry in space.
          </h3>
          <img
            src="./Assets/conrad.png"
            alt="Team"
            css={[TeamPageStyle.commonStyles, TeamPageStyle.teamImgStyle]}
          />
        </TeamPageStyle.TeamPageContent>
        <Footer />
      </TeamPageStyle.TeamDivStyle>
    </div>
  );
};

export default TeamPage;
