/** @jsxImportSource @emotion/react */
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlogPageStyle from "../Style/BlogPage";
import Gallery from "../Components/Gallery";

const BlogPage = () => {
  return (
    <div>
      <BlogPageStyle.BlogDiv>
        <Header />
        <h1
          css={{
            textAlign: "center",
            color: "#FBC139",
            fontSize: "40px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            margin: "70px 0 20px 0",
          }}
        >
          Development Blog
        </h1>
        <h3
          css={{
            textAlign: "center",
            color: "#A96E28",
            fontSize: "25px",
            fontFamily: "sans-serif",
            fontWeight: "500",
            margin: "0",
          }}
        >
          Captures of the development process
          <br />
          <a
            href="/about"
            css={{
              color: "#A96E28",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              "&:hover": {
                cursor: "pointer",
                color: "#FBC139",
              },
            }}
          >
            &rarr; about our innovation
          </a>
        </h3>
        <BlogPageStyle.GalleryDiv>
          <Gallery />
        </BlogPageStyle.GalleryDiv>
        <Footer />
      </BlogPageStyle.BlogDiv>
    </div>
  );
};

export default BlogPage;
