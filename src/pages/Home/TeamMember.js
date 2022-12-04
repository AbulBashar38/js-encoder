import React from "react";
import basar from "../../assets/images/basar.jpg";
import sajal from "../../assets/images/sajal.jpg";
import jessan from "../../assets/images/jessan.jpg";
import prasad from "../../assets/images/prasad.jpg";
import MemberCard from "./MemberCard";
const TeamMember = () => {
  const memberInfo = [
    {
      id: 1,
      name: "Jessan Khan",
      img: jessan,
    },
    {
      id: 2,
      name: "Prashad",
      img: prasad,
    },
    {
      id: 3,
      name: "Sojol khan",
      img: sajal,
    },
    {
      id: 4,
      name: "Abul Basar",
      img: basar,
    },
  ];
  return (
    <section
      id="career"
      className="lg:container lg:mx-auto lg:mt-20 mt-5 lg:pt-10 px-5"
    >
      <div className="flex">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="lg:pr-20"
        >
          <h6 className="font-bold text-primary text-lg lg:my-8 my-4">
            OUR TEAM
          </h6>
          <h1 className="font-bold lg:text-5xl text-3xl text-neutral">
            Meet Experience Team <span className="text-accent">Member</span>
          </h1>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="lg:pl-24 pl-10 text-md"
        >
          <p className="mt-5">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give.
          </p>
          <button className="btn btn-accent my-10 text-white">
            JOIN WITH US
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:gap-20 gap-5 lg:mt-24 mb-10">
        {memberInfo.map((info) => (
          <MemberCard info={info} key={info.id}></MemberCard>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
