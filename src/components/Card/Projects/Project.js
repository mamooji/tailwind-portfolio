import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement();
const Project = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModalTrue = () => {
    setIsModalOpen(true);
  };
  return (
    <div
      className="max-w-xs mx-4 my-8 duration-500 transform rounded-lg shadow-lg cursor-pointer hover:scale-110"
      onClick={setModalTrue}
    >
      <div className="relative flex flex-col items-center justify-center">
        <img
          style={{ filter: "brightness(80%)" }}
          className="block object-cover h-60 rounded-xl "
          src={props.image}
          alt="avatar"
        />
        <p className="absolute flex items-center justify-center p-4 text-lg font-bold text-center text-white ">
          {props.title}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        contentLabel="Project Description"
        ariaHideApp={false}
        onRequestClose={(e) => {
          e.stopPropagation();
          setIsModalOpen(false);
        }}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="absolute max-w-screen-lg p-4 mx-auto mt-10 overflow-y-auto outline-none bg-gradient-to-r from-purple-400 to-red-500 mb-14 rounded-xl top-10 bottom-10 right-10 left-10"
      >
        <div className="flex flex-col items-center px-4 space-y-4 text-center text-white md:text-left ">
          <p className="text-3xl font-bold text-center">{props.title}</p>
          <img
            className="block mx-auto min-w-screen"
            src={props.image}
            alt="avatar"
          />
          <div className="flex flex-col items-center justify-center w-full space-y-4 md:flex-row-reverse md:justify-between md:space-y-0 ">
            <div className="flex space-x-4">
              <a
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
                className={`${
                  props.githubStatus ? " " : "pointer-events-none"
                }`}
              >
                <svg
                  className={`w-8 h-8 transition-all duration-500 ease-in-out rounded-full ${
                    props.githubStatus ? " " : "opacity-50"
                  } fill-current  hover:bg-purple-300`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={props.demoLink}
                className={`${props.demoStatus ? " " : "pointer-events-none"}`}
              >
                <svg
                  className={`w-8 h-8 transition-all duration-500 ease-in-out rounded-full ${
                    props.demoStatus ? " " : "opacity-50"
                  } fill-current  hover:bg-purple-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.617 0 0 114.615 0 256s114.617 256 256 256 256-114.615 256-256S397.383 0 256 0zm88.48 269.57l-128 80a16.008 16.008 0 01-16.238.422A15.994 15.994 0 01192 336V176c0-5.82 3.156-11.172 8.242-13.992a15.957 15.957 0 0116.238.422l128 80c4.676 2.93 7.52 8.055 7.52 13.57s-2.844 10.641-7.52 13.57z" />
                </svg>
              </a>
            </div>
            <p className="font-medium">{props.stack}</p>
          </div>
          <p>{props.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
