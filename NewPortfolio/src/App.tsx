import "./App.css";
import Firstpage from "./Firstpage";
import Secondpage from './Secondpage';
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";

import Projects from './Projects'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Firstpage />
        <Secondpage />
        <Thirdpage />
        <Fourthpage />
        
       <Projects/>

      <footer
        className="footer"
        style={{
          background: "#D9D9D9",
          padding: "5px",
          justifyItems: "center",
          height: "5vh",
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
