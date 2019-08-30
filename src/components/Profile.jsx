import React from "react";
import ProfilePic from "../reactBolivia.png";

const Profile = ({ name, job }) => {
  return (
    <>
      <section className="mb-2">
        <img
          src={ProfilePic}
          alt={name}
          className="border border-white rounded-circle p-2"
          width="80"
        />
      </section>
      <section className="pt-1">
        <h5 className="text-white text-strong">{name}</h5>
        <span className="text-dark text-bold">{job}</span>
      </section>
    </>
  );
};

export default Profile;
