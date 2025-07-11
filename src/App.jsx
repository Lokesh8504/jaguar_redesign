// App.js
import React from "react";
import Loader from "./components/Loader";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div className="w-[100vw]">
      {" "}
      {/* Add padding-bottom to ensure content is not hidden */}
      <Loader />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
};

export default App;
