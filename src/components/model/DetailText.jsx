import React from "react";

export default function DetailText({ label, value }) {
  return (
    <p>
      <b className="text-blue-300">{label}:</b> {value}
    </p>
  );
}
