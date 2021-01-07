import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement();
const Project = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    // <div
    //   className="max-w-xs p-4 m-4 duration-500 transform rounded-lg bg-hero-image sm:w-full md:w-1/3 hover:scale-110"
    //   onClick={() => setIsModalOpen(!isModalOpen)}
    // >
    <div
      className="max-w-xs mx-4 my-4 rounded-lg shadow-lg md:w-1/3"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      <div className="relative flex flex-col items-center justify-center">
        <img
          className="block w-auto h-auto rounded-xl "
          src={props.image}
          alt="avatar"
        />
        <p className="absolute flex items-center justify-center text-lg font-bold text-center text-white ">
          {props.title}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        contentLabel="onRequestClose Example"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
        className="absolute mt-12 bg-blue-300 outline-none rounded-xl top-10 bottom-10 right-10 left-10"
      >
        {props.title}
      </Modal>
    </div>
  );
};

export default Project;
