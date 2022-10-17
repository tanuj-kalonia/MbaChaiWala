import { useEffect } from "react";

import IntroVideo from "./component/IntroVideo"
import Section from "./component/Section";
import data from "./data/data.json"
import Footer from "./component/Footer.jsx"
import Misc from "./component/Misc.jsx"

import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss"
import "./styles/footer.scss"
import "./styles/Misc.scss"
import "./styles/MediaQuerry.scss"

import frestTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png"
import tedTalksImg from "./assets/in-the-news.gif"
import franchiseImg from "./assets/franchise.gif"
import baratImg from "./assets/image1.png"
import mapImg from "./assets/locations.png"
import albumImg from "./assets/mba-cares.gif"
import coursesImg from "./assets/image2.png"
import chaiWalaImg from "./assets/image3.png"


const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {

  const { freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`
    cursor.style.left = `${e.pageX - 14}px`

    const element = e.target;
    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    }
    else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    }
    else {
      cursor.classList.remove("cursorHoverMini");
      cursor.classList.remove("cursorHover");
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => {
      window.removeEventListener("mousemove", dotCursor)
    }
  }, [])


  return (
    <div className="App">
      <IntroVideo />

      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnText={freshTopic.btn}
        imgSrc={frestTopicImg}
        imgSize="60%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnText={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        imgSize="50%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={tedTalks.heading}
        text={freshTopic.text}
        btnText={tedTalks.btn}
        imgSrc={tedTalksImg}
        imgSize="50%"
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnText={franchise.btn}
        imgSrc={franchiseImg}
        imgSize="60%"
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Section
        h3={map.heading}
        text={map.text}
        hasBtn={false}
        imgSrc={mapImg}
        imgSize="60%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
      />

      <Section
        h3={courses.heading}
        text={courses.text}
        btnText={courses.btn}
        imgSrc={coursesImg}
        imgSize="30%"
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      <Section
        h3={album.heading}
        text={album.text}
        btnText={album.btn}
        imgSrc={albumImg}
        imgSize="61%"
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Section
        h3={barat.heading}
        text={barat.text}
        btnText={barat.btn}
        imgSrc={baratImg}
        imgSize="50%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnText={chaiwala.btn}
        imgSrc={chaiWalaImg}
        imgSize="70%"
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer />
      <Misc />
    </div>
  );
}

export default App;
