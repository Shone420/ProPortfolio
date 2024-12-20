import "./App.css";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Posts from "./Posts";

import Video from "./Video"

import Projects from "./Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      {/* <Firstpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage /> */}

      {/* <Projects/> */}

      <Routes>
        <Route
          path="/ProPortfolio/"
          element={
            <div>
              <Firstpage />
              <Secondpage />
              <Thirdpage />
              <Fourthpage />
            </div>
          }
        />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Video" element={<Video/>} />
        <Route path="/ProPortfolio/Posts/" element={<Posts />} /> 

      </Routes>

      {/* <Chat /> */}


      <footer
        className="footer"
        style={{
          background: "#D9D9D9",
          color: "black",
          padding: "5px",
          justifyItems: "center",
          height: "5vh"
        }}
      >
        {" "}
        {/* Footer section */}
        <p>
          &copy; {new Date().getFullYear()} Shone Thomas. All Rights Reserved.
        </p>{" "}
        {/* Dynamic copyright year */}
      </footer>
    </>
  );
}

export default App;
