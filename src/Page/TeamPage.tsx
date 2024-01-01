/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import TeamPageStyle from "../Style/TeamPage";

const TeamPage = () => {
  return (
    <div>
      <div className="teamdiv" css={TeamPageStyle.teamDivStyle}>
        <Header />
      </div>
    </div>
  );
};

export default TeamPage;
