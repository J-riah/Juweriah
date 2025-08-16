
import React from "react";

const AchievementDetail = () => {
  const achievements = [
    {
      title: "EY",
      images: ["/images/EY-1.jpg"],
    },
    {
      title: "Hackz",
      images: ["/images/hackz-1.jpg", "/images/hackz-2.jpg"],
    },
    {
      title: "Khushi",
      images: ["/images/khushi-1.jpg", "/images/khushi-2.jpg"],
    },
    {
      title: "CSI Club",
      images: ["/images/csiclub-1.jpg", "/images/concentrated-1.jpg"],
    },
    {
      title: "Anchor Black & Purple",
      images: ["/images/anchorblack-1.jpg", "/images/anchorpurple-1.jpg"],
    },
    {
      title: "Money & Colors",
      images: [
        "/images/money-1.jpg",
        "/images/red-1.jpg",
        "/images/black-1.jpg",
        "/images/pink-2.jpg",
        "/images/anchorblack-1.jpg",
        "/images/concentrated-1.jpg",
        "/images/anurag-1.jpg",
      ],
    },
  ];

  return (
    <div>
      {achievements.map((ach, index) => (
        <div key={index}>
          <h3>{ach.title}</h3>
          <div>
            {ach.images.map((img, i) => (
              <img key={i} src={img} alt={`${ach.title}-${i}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementDetail;
