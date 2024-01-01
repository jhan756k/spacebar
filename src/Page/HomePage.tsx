/** @jsxImportSource @emotion/react */
import { useState, useRef, RefObject } from "react";
import HomePageStyle from "../Style/HomePage";
import Header from "../Components/Header";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground: RefObject<HTMLDivElement> = useRef(null);

  return (
    <div>
      <div className="homediv" css={HomePageStyle.homediv}>
        <div className="alldiv" css={HomePageStyle.alldiv}>
          <Header />
          <div className="background" css={HomePageStyle.background}>
            <div className="titletextdiv" css={HomePageStyle.titletextdiv}>
              <div
                className="title"
                css={[HomePageStyle.commonStyles, HomePageStyle.title]}
              >
                Space Bar
              </div>
              <div
                className="titleexp"
                css={[HomePageStyle.commonStyles, HomePageStyle.titleexp]}
              >
                A groundbreaking washing machine designed for space
              </div>
              <div className="titlebtndiv" css={HomePageStyle.titlebtndiv}>
                <button
                  className="aboutbtn"
                  css={[HomePageStyle.commonStyles, HomePageStyle.aboutbtn]}
                >
                  About
                </button>
                <button
                  className="developbtn"
                  css={[HomePageStyle.commonStyles, HomePageStyle.developbtn]}
                >
                  Development
                </button>
              </div>
              <div
                className="thumbnaildiv"
                css={[HomePageStyle.commonStyles, HomePageStyle.thumbnaildiv]}
              >
                <img
                  src="Assets/thumbnail.jpg"
                  alt=""
                  className="thumbnail"
                  css={HomePageStyle.thumbnail}
                />
                <input
                  type="image"
                  src="Assets/playbtn.png"
                  alt=""
                  className="playbtn"
                  onClick={() => setModalOpen(true)}
                  css={HomePageStyle.playbtn}
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
          css={HomePageStyle.modalBackground}
        >
          <div className="modal">
            <video
              className="titlevid"
              controls
              autoPlay
              css={HomePageStyle.titlevid}
            >
              <source src="Assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
