import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement();
const Project = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="max-w-xs mx-4 my-8 duration-500 transform rounded-lg shadow-lg cursor-pointer hover:scale-110"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      <div className="relative flex flex-col items-center justify-center">
        <img
          className="block w-auto h-auto rounded-xl "
          src={props.image}
          alt="avatar"
        />
        <p className="absolute flex items-center justify-center p-4 text-lg font-bold text-center text-white ">
          {props.title}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        contentLabel="onRequestClose Example"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
        className="absolute max-w-screen-lg p-4 mx-auto mt-10 overflow-y-auto bg-blue-300 outline-none mb-14 rounded-xl top-10 bottom-10 right-10 left-10"
      >
        <div className="flex flex-col items-center space-y-4 text-white">
          <p className="text-3xl font-bold text-center">{props.title}</p>
          <img
            className="block mx-auto min-w-screen"
            src={props.image}
            alt="avatar"
          />
          <div className="flex justify-center"></div>
          <p className="text-center">{props.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
