import React from "react";

const Experience = ({ title, experiences }) => {
  return (
    <section className="mb-5">
      <h4 className="text-left text-uppercase text-success">{title}</h4>
      <hr className="bg-dark" />
      {experiences.map((e, i) => {
        return (
          <div key={i}>
            <h5 className="text-left text-dark">{e.title}</h5>
            <ul className="text-left">
              {e.descriptions.map((d, ii) => {
                return (
                  <li className="text-success" key={ii}>
                    {d.value}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
