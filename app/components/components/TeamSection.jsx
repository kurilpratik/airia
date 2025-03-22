import React from "react";
import pratik from "../../image/image/tar.png";
import piyush from "../../image/image/pri.png";
import shubham from "../../image/image/sh.png";
import kartik from "../../image/image/kr3.png";
import akriti from "../../image/image/ak.png";
import Image from "next/image";
const TeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      name: "pratik Kuril",
      role: "Leader",
      img: pratik,
    },
    { name: "Piyush Vishwakarma", role: "Developer", img: piyush },
    { name: "Akriti chaturvedi", role: "UI/UX", img: akriti },
    { name: "Shubham", role: "Operations", img: shubham },
    { name: "Kartik Singh", role: "Manager", img: kartik },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      {/* Header section */}
      <div className="flex items-center gap-4  mb-8">
        <span className=" px-4 py-2 text-xl font-bold rounded-xl">
          Team
        </span>
        <p className="text-gray-800">
          Meet the skilled and experienced team behind our successful idea
          implementation.
        </p>
      </div>

      {/* Team members grid */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border hover:shadow-md transition-all hover:bg-lime-300 border-gray-200 rounded-3xl p-6 relative"
          >
            {/* Linkedin icon */}
            <div className="absolute   top-6 right-6 bg-black rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">in</span>
            </div>

            {/* Profile placeholder (simplified) */}
            <div className=" w-16 h-16 rounded-full mb-4">
              <Image
                src={member.img}
                className="w-full h-full rounded-full object-cover"
                alt={member.name}
              />
              <div className="w-16 h-16"></div>
            </div>

            {/* Name and role */}
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>
          </div>
        ))}
      </div>

      {/* "See all team" button */}
    </div>
  );
};

export default TeamSection;
