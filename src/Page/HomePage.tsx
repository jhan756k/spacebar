/** @jsxImportSource @emotion/react */
import { useState, useRef, RefObject } from "react";
import HomePageStyle from "../Style/HomePage";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground: RefObject<HTMLDivElement> = useRef(null);

  return (
    <div css={HomePageStyle.mediaQueries}>
      <div css={HomePageStyle.homediv}>
        <Header />
        <div css={HomePageStyle.background}>
          <div css={HomePageStyle.titletextdiv}>
            <div css={[HomePageStyle.commonStyles, HomePageStyle.title]}>
              Space Bar
            </div>
            <div css={[HomePageStyle.commonStyles, HomePageStyle.titleexp]}>
              A groundbreaking washing machine designed for space
            </div>
            <div css={HomePageStyle.titlebtndiv}>
              <button
                css={[HomePageStyle.commonStyles, HomePageStyle.aboutbtn]}
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                About
              </button>
              <button
                css={[HomePageStyle.commonStyles, HomePageStyle.developbtn]}
                onClick={() => {
                  window.location.href = "/blog";
                }}
              >
                Development
              </button>
            </div>
            <div css={[HomePageStyle.commonStyles, HomePageStyle.thumbnaildiv]}>
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
          <Footer />
        </div>
      </div>
      {modalOpen && (
        <div
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
          css={HomePageStyle.modalBackground}
        >
          <div>
            <iframe
              className="titlevid"
              src="https://www.youtube.com/embed/z4TMkO3Wl3k?si=jHqHKuyliUj9U3Dv"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              css={HomePageStyle.titlevid}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
