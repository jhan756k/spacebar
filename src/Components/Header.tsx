import "../Style/Header.css";

const Header = () => {
  return (
    <div>
      <div className="wrap">
        <div className="itemlist">
          <div className="logodiv">
            <a href="/" className="logoimg">
              <img
                src="src\Assets\spacebar.png"
                alt="monkey"
                className="logoitem"
              />
            </a>
          </div>

          <div className="pagediv">
            <a href="/" className="pdivitem">
              <i className="bi-insta" />
              space_bar
            </a>
            <a href="/" className="pdivitem">
              Home
            </a>
            <a href="/" className="pdivitem">
              Team
            </a>
            <a href="/" className="pdivitem">
              About
            </a>
            <a href="/" className="pdivitem">
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
