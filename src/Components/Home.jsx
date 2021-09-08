import React from "react";
import Commom from "../assets/Commom";
const Home = (props) => {
  return (
    <>
      <div style={{ height: '55px' }}></div>
      <Commom
        name="Grow your business with"
        imgsrc="https://ik.imagekit.io/levister/images/img2_bxbHfDekz.png?updatedAt=1631085696724"
        visit="/service"
        btname="Our Services"
        mode={props.mode}
      />
    </>
  );
};

export default Home;
