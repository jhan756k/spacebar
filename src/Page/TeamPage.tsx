/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import TeamPageStyle from "../Style/TeamPage";
import Footer from "../Components/Footer.tsx";

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
