/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import PhotoAlbum from "react-photo-album";
import GalleryStyle from "../Style/Gallery";

const photos = [
  { src: "./Assets/sketch1.png", width: 1486, height: 1014, text: "Laundry brainstorm" },
  { src: "./Assets/sketch2.png", width: 1080, height: 872, text: "Cavitation effect visualization" },
  { src: "./Assets/sketch3.png", width: 2940, height: 1912, text: "3D modeling" },
  { src: "./Assets/sketch4.png", width: 1920, height: 1080, text: "Website development" },
  { src: "./Assets/sketch5.png", width: 1178, height: 1037, text: "3D printing our base model" },
  { src: "./Assets/sketch6.png", width: 1179, height: 884, text: "Circuit development by Minjae" },
  { src: "./Assets/sketch7.png", width: 1932, height: 857, text: "Laundry process with our detergent" },
  { src: "./Assets/sketch8.png", width: 998, height: 1655, text: "Diagram of the pipe system of spacebar" },
  { src: "./Assets/sketch9.png", width: 3016, height: 2439, text: "1st test" },
  { src: "./Assets/sketch10.png", width: 2208, height: 1046, text: "Business estimations" },
  { src: "./Assets/sketch11.png", width: 1990, height: 1368, text: "Final model decision" },
];

const Modal = ({ photo }) => {
  if (!photo) return null;

  return (
    <>
      <div css={GalleryStyle.modalBackdrop}>
        <div css={GalleryStyle.modalContent}>
          <img src={photo.src} alt="" css={GalleryStyle.imageStyle} />
          <p
            css={{
              color: "#FBC139",
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            {photo.text}
          </p>
        </div>
      </div>
    </>
  );
};

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const imgModalBackdrop = useRef(null);
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <div css={GalleryStyle.galleryContainer}>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          onClick={({ photo }) => {
            setSelectedPhoto(photo);
          }}
          componentsProps={{
            imageProps: {
              style: {
                border: "2px solid #FBC139",
                borderRadius: "10px",
                cursor: "pointer",
              },
            },
          }}
        />
      </div>
      {selectedPhoto && (
        <>
          <div
            ref={imgModalBackdrop}
            css={GalleryStyle.modalCloseDrop}
            onClick={(e) => {
              if (e.target === imgModalBackdrop.current) {
                handleCloseModal();
              }
            }}
          />
          <Modal photo={selectedPhoto} />
        </>
      )}
    </>
  );
};

export default Gallery;
