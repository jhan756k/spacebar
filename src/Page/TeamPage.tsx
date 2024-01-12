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
          <img
            src="./Assets/conrad.png"
            alt="Team"
            css={[
              TeamPageStyle.commonStyles,
              TeamPageStyle.teamImgStyle,
              { animationDelay: "0.6s" },
            ]}
          />
        </TeamPageStyle.TeamPageContent>
        <Footer />
      </TeamPageStyle.TeamDivStyle>
    </div>
  );
};

export default TeamPage;
