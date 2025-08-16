// src/components/Achievements.jsx
import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "EY",
      thumbnail: "/images/EY-1.jpg",
    },
    {
      title: "Hackz",
      thumbnail: "/images/hackz-1.jpg",
    },
    {
      title: "Khushi",
      thumbnail: "/images/khushi-2.jpg",
    },
    {
      title: "CSI Club",
      thumbnail: "/images/csiclub-1.jpg",
    },
    {
      title: "Anchor",
      thumbnail: "/images/anchorblack-1.jpg",
    },
    {
      title: "Money",
      thumbnail: "/images/money-1.jpg",
    },
  ];

  return (
    <div>
      {achievements.map((ach, index) => (
        <div key={index}>
          <img src={ach.thumbnail} alt={ach.title} />
          <p>{ach.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
