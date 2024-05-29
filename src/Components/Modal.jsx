import React from "react";

function Modal({ modalOpen, closeModal, children }) {
  return (
    <>
      {modalOpen && (
        <div className="bg-slate-400/95 z-50 fixed  right-10  left-10 top-10 bottom-10 grid place-content-center  text-white">
          <button
            className="bg-red-300  rounded-full px-2 py-1 flex text-xl font-bold text-black justify-center items-center absolute top-5 right-5"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="opacity-100 w-full min-w-fit h-full min-h-fit text-white p-7 relative ">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
