import React from "react";
import Container from "../../Layout/Container";
import "../../css/Banner.css";
import Buttons from "../../components/Buttons";

const Banner = () => {
  return (
    <div className="bgImg p-20">
      <Container>
        <div className="flex justify-between p-5 my-16">
          <div className="w-1/2 space-y-6 flex items-center justify-center">
            <div>
            <h1 className="text-4xl font-bold leading-[52px] mb-5">
              Your Path to Health and Healing Begins Here!
            </h1>
            <p className="leading-7">
              Welcome to our esteemed Doctor's House, where exceptional care and
              healing converge. Nestled in a serene setting, our dedicated team
              of compassionate healthcare professionals is committed to
              providing personalized and comprehensive medical services. From
              routine check-ups to advanced treatments, we prioritize your
              well-being and strive to optimize your health at every step.
            </p>
            <Buttons>All Services</Buttons>
            </div>
          </div>
          <div className="w-1/2 flex items-center ml-14 justify-center">
            <div className="parent"></div>
            <div className="circle">
              <div className="childOne"></div>
              <div className="childTwo"></div>
              <div className="childThree"></div>
              <div className="childFour"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
