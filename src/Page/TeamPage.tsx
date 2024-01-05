/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import Footer from "../Components/Footer.tsx";
import TeamPageStyle from "../Style/TeamPage";

const TeamPage = () => {
  return (
    <div>
      <div css={TeamPageStyle.teamDivStyle}>
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default TeamPage;
