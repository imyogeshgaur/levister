import React from "react";
import web from "../images/img2.png";
import Commom from "../assets/Commom";
const Home = (props) => {
  return (
    <>
      <div style={{ height: '55px' }}></div>
      <Commom
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Our Services"
        mode={props.mode}
      />
    </>
  );
};

export default Home;
