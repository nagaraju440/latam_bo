import React from "react";

export default function Modal({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center">
      <div
        className="card  bg-white p-3 rounded-md w-[500px] h-[500px] mt-12"
      >
        <div className="font-bold">
          Modal sample
          <button
            className="float-right p-1 hover:animate-pulse"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
