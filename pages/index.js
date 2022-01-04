import TopBar from "../components/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import AuthorIntro from "../components/AuthorIntro";
import CardItem from "../components/CardItem";
import CardListItem from "../components/CardListItem";
import { getAllBlogs } from "../lib/api";

export default function Home({ blogs }) {
  return (
   <PageLayout>

      <AuthorIntro />

      <hr />
      <div
        style={{ position: "relative", height: "500px" }}
        class="custom-shape-divider-top-1640978491 "
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            // position: "absolute",
            top: "0%",
            left: "0",
            opacity: "0.8",
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 74"
            width="100%"
            height={120}
            preserveAspectRatio="none"
          >
            <path
              d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
              class="shape-fill"
            ></path>
          </svg>
          <div style={{ zIndex: "1", backgroundColor: "#000000" }}>
            <Container>
              <Row className="mb-5">
                {blogs.map((blog) => (
                  <Col key={blog.slug} md="4">
                    <CardItem
                      title={blog.title}
                      subtitle={blog.subtitle}
                      date={blog.date}
                      image={blog.coverImage}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
      </PageLayout >

  );
}

//This function is called during the build(build time)
//Provides props to your page and create a static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

//getStaticProps is index.html page build and it will keep refreshing the page for any changes
//automatically generated as static HTML + JSON (uses getStaticProps)
