import React from "react";
import LinkToPage from "./LinkToPage";
import GuideLandingCard from "./GuideLandingCard/GuideLandingCard";
import { guidesURL } from "@/constants/urls";

const EssentialGuidesLanding = ({ guides }) => {
  //FIXME - Divide this in View/Container
  const guidesList = [
    {
      title: "Practica 1",
      subhead: "Quimica General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet",
    },
    {
      title: "Practica 2",
      subhead: "Quimica General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet",
    },
    {
      title: "Practica 3",
      subhead: "Quimica General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet",
    },
    {
      title: "Practica 4",
      subhead: "Quimica General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="w-full flex flex-col lg:justify-center mt-10 mb-10">
      <p className="text-stratos px-4 text-3xl sm:text-5xl xl:ml-10 lg:w-1/2 tracking-tighter font-b612 font-bold">
        Guías Esenciales del Laboratorio
      </p>
      <div className="xl:w-10/12 xl:ml-20 grid grid-cols-2 sm:grid-cols-3  lg:gap-6  lg:grid-cols-4 ml-2 lg:ml-20">
        {guides &&
          guides.map((guide, index) => (
            <GuideLandingCard
              key={index}
              title={guide.title}
              subhead={guide.subtitle}
              textBody={guide.description}
              downloadLink={guide.url}
            />
          ))}
      </div>
      <div className="flex flex-col justify-center w-full lg:w-auto">
        <div className="self-end mr-8 xl:mr-52 mt-4">
          <LinkToPage
            text={"Ver más guías"}
            link={guidesURL}
          />
        </div>
      </div>
    </div>
  );
};

export default EssentialGuidesLanding;
