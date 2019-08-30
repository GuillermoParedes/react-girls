import React from "react";

const Feature = ({ title, description }) => {
  return (
    <section className="mb-5 mt-5">
      <h5 className="text-dark">{title}</h5>
      <p className="text-white">{description}</p>
    </section>
  );
};
export default Feature;
