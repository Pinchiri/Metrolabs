import React from "react";
import GuideCard from "@/components/guideCard/guideCard";

const GuidesView = ({ manuals }) => {
  return (
    <div className="h-screen pl-10 mt-14 text-2xl font-bold">
      <p className="font-b612 text-stratos tracking-tighter pt-5 pb-10 text-3xl">
        Manuales de Laboratorio
      </p>

      {manuals.map((manual, index) => (
        <GuideCard
          key={index}
          title={manual.title || "Átomos y Elementos"}
          subtitle={manual.subtitle || "Subhead"}
          pdfUrl={manual.url}
        />
      ))}
    </div>
  );
};

export default GuidesView;
