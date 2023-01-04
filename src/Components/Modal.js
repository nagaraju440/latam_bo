import React from "react";
import { ReactComponent as CloseButton } from "../Assets/Close.svg";
import Resume from "./Resume/Resume";

export default function Modal({ visible, onClose, children }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 ">
      <div className="card relative bg-white rounded-md w-[650px] mx-auto py-5 min-h-[330px] mt-12">
        <div className="font-bold">
            <CloseButton className="w-10 ml-auto p-2 top-1 right-1 absolute cursor-pointer" onClick={onClose}/>
          <div className="px-12">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
}
