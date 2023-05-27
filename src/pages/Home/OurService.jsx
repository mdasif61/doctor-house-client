import React, { useState } from "react";
import Container from "../../Layout/Container";
import "../../css/OurService.css";
import doctor from "../../../public/images/doctor1.jpg";

const OurService = () => {
  const [tab, setTab] = useState("Preventive");

  return (
    <Container>
      <div className="service p-5 my-16">
        <div className="row-span-2 flex items-center justify-center">
          <img
            className="rounded-l-full w-full border-white border-8 shadow-xl"
            src={doctor}
            alt="doctor"
          />
        </div>
        <div className="px-10 flex flex-col justify-center">
          <h1 className="text-2xl mb-3 font-bold">Our Service</h1>
          <p className="leading-8 text-gray-500">
            Our clinic offers a comprehensive range of medical treatments
            designed to address a wide spectrum of health conditions and promote
            overall well-being. Our experienced medical professionals are
            skilled in providing advanced and evidence-based therapies to
            deliver effective results.
          </p>
        </div>
        <div className="px-10 flex justify-between cursor-pointer">
          <div>
            <h1
              onClick={() => setTab("Preventive")}
              className={`${
                tab === "Preventive"
                  ? "bg-[#7E679B] rounded-full py-3 px-6 text-white font-bold"
                  : "py-3 px-6 border-[#7E679B] border-2 rounded-full"
              }`}
            >
              Preventive Dentistry
            </h1>
          </div>
          <div>
            <h1
              onClick={() => setTab("Restorative")}
              className={`${
                tab === "Restorative"
                  ? "bg-[#7E679B] rounded-full py-3 px-6 text-white font-bold"
                  : "py-3 px-6 border-[#7E679B] border-2 rounded-full"
              }`}
            >
              Restorative Dentistry
            </h1>
          </div>
          <div>
            <h1
              onClick={() => setTab("Cosmetic")}
              className={`${
                tab === "Cosmetic"
                  ? "bg-[#7E679B] rounded-full py-3 px-6 text-white font-bold"
                  : "py-3 px-6 border-[#7E679B] border-2 rounded-full"
              }`}
            >
              Cosmetic Dentistry
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

// // habib@programming-hero.com
// https://docs.google.com/presentation/d/16CtBAxKzgOcYIwI0gXkRnL79Dk6xg40_/preview?rtpof=true&sd=true&slide=id.p3

// https://docs.google.com/forms/d/e/1FAIpQLSdfOprujrhN4J2_xevQqYaOJYx1Gtf7BJd5cvbeBonaIwIzyQ/viewform

export default OurService;
