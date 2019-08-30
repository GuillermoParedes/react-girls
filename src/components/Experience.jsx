import React from "react";

const Experience = ({ title, experiences }) => {
  return (
    <section>
      <h4 className="text-uppercase text-success">{title}</h4>
      <hr className="bg-white" />
      {experiences.map((e, i) => {
        return (
          <div key={i}>
            <h5 className="text-white">{e.title}</h5>
            <ol>
              {e.descriptions.map((d, ii) => {
                return (
                  <li className="text-success" key={ii}>
                    {d.value}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
