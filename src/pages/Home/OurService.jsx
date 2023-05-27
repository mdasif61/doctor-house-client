import React, { useState } from "react";
import Container from "../../Layout/Container";
import "../../css/OurService.css";
import useServices from "../../hooks/useServices";
import doctor from '../../../public/images//doctor.jpg'
import Categorys from "./Categorys";

const OurService = () => {
  const [tab, setTab] = useState("Preventive Dentistry");
  const [services] = useServices();

  const serviceCategory = services.filter(service => service.
    category_name === tab)

  return (
    <Container>
      <div className="flex p-5 my-16">
        <div className="flex w-1/2 items-center justify-center">
          <img
            className="w-full border-white border-8 shadow-xl"
            src={doctor}
            alt="doctor"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
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
          <div className="flex flex-col p-10">
            <div className="flex justify-between cursor-pointer">
              <div>
                <h1
                  onClick={() => setTab("Preventive Dentistry")}
                  className={`${tab === "Preventive Dentistry"
                    ? "bg-[#7E679B] rounded-full px-4 py-2 text-white font-bold"
                    : "px-4 py-2 border-[#7E679B] border-2 rounded-full"
                    }`}
                >
                  Preventive Dentistry
                </h1>
              </div>
              <div>
                <h1
                  onClick={() => setTab("Restorative Dentistry")}
                  className={`${tab === "Restorative Dentistry"
                    ? "bg-[#7E679B] rounded-full px-4 py-2 text-white font-bold"
                    : "px-4 py-2 border-[#7E679B] border-2 rounded-full"
                    }`}
                >
                  Restorative Dentistry
                </h1>
              </div>
              <div>
                <h1
                  onClick={() => setTab("Cosmetic Dentistry")}
                  className={`${tab === "Cosmetic Dentistry"
                    ? "bg-[#7E679B] rounded-full px-4 py-2 text-white font-bold"
                    : "px-4 py-2 border-[#7E679B] border-2 rounded-full"
                    }`}
                >
                  Cosmetic Dentistry
                </h1>
              </div>
            </div>
            <div className="text-black flex justify-between gap-5 my-5 border p-5 rounded-lg border-blue-600">
              {
                serviceCategory.map(category =><Categorys
                key={category._id}
                category={category}
                ></Categorys>)
              }
            </div>
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
