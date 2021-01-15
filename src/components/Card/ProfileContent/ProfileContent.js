import React from "react";
const ProfileContent = (props) => {
  return (
    <div className="max-w-md mx-4 my-8 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">
          A little about me
        </h1>

        <p className="py-2 text-gray-600 ">
          Currently a third-year software-engineering student attending
          Conestoga College, seeking a full-time development position for the
          upcoming spring of 2021. I am a Full-Stack Developer who is keen on
          improving both my Frontend and Backend skills through formal
          experience. I enjoy spending my spare time learning about the newest
          frameworks and technologies that can make my life easier coding.
          <br />
          <br />
          Outside of development, I enjoy working out and long-distance running
          to better my physical health. My recent endeavours include learning
          how to cook something other than eggs and spending quality time with
          my family.
          <br />
          <br />
          As time flies by, I realize that I should appreciate the present and
          look forward to the future.
        </p>
      </div>
    </div>
  );
};

export default ProfileContent;
