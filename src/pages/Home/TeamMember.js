import React from "react";
import basar from "../../assets/images/basar.jpg";
import sajal from "../../assets/images/firozAlMamun.png";
import jessan from "../../assets/images/jessan.jpg";
import prasad from "../../assets/images/prasad.png";
import rased from "../../assets/images/rased.png";
import dip from "../../assets/images/dip.png";
import david from "../../assets/images/david.png";
import MemberCard from "./MemberCard";
const TeamMember = () => {
  const memberInfo = [
    {
      id: 1,
      name: "Mr.david",
      img: david,
      roll: "HR",
    },
    {
      id: 2,
      name: "Md. Mahamudul Hasan",
      img: jessan,
    },
    {
      id: 3,
      name: "Prashad Dey",
      img: prasad,
    },
    {
      id: 4,
      name: "Md Firoz Al Mamun",
      img: sajal,
    },
    {
      id: 5,
      name: "Md. Rasedul Islam",
      img: rased,
    },
    {
      id: 6,
      name: "Abul Basar",
      img: basar,
    },
    {
      id: 7,
      name: "Dip Jit Baroi",
      img: dip,
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
