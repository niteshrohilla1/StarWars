import React from "react";
import DetailCard from "./DetailCard";

export default function DetailGrid({ details }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-8">
      {details.map((item, index) => (
        <DetailCard key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
