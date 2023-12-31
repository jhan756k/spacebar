import { useState, useRef, RefObject } from "react";
import "../Style/HomePage.css";
import Header from "../Components/Header";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground: RefObject<HTMLDivElement> = useRef(null);

  return (
    <div>
      <div className="homediv">
        <div className="alldiv">
          <Header />
          <div className="background">
            <div className="titletextdiv">
              <div className="title">Space Bar</div>
              <div className="titleexp">
                A groundbreaking washing machine designed for space
              </div>
              <div className="titlebtndiv">
                <button className="aboutbtn">About</button>
                <button className="developbtn">Development</button>
              </div>
              <div className="thumbnaildiv">
                <img
                  src="src/Assets/thumbnail.jpg"
                  alt=""
                  className="thumbnail"
                />
                <input
                  type="image"
                  src="src/Assets/playbtn.png"
                  alt=""
                  className="playbtn"
                  onClick={() => setModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div
          className="modalBackground"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="modal">
            <div className="modalBody">
              <video className="titlevid" controls autoPlay>
                <source src="src/Assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
