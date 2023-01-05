import React from "react";
import Form from "./UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "./UiCore/FormComponent/InputFormFeild/InputFormFeild";
import NewCoursePage1 from "./pages/instructor/courses/new/NewCoursePage1";
import StepIndicator from './pages/instructor/courses/StepIndicator/StepIndicator';
import NormalCloseSvg from "./assets/icons/NormalCloseIcon";


export default function Modal({ visible, onClose ,children }) {
  if (!visible) return null;
  return (
    <div className="inset-0">
      <div className="card relative bg-white rounded-[10px] w-[650px] mx-auto py-5 min-h-[330px]  mt-12 overflow-y-auto">
          <button className="flex ml-auto p-2 top-1 right-1 absolute " onClick={onClose}>
          <NormalCloseSvg/>
          </button>
          <div className="px-12">
          {children}
          </div>
      </div>
    </div>

  );
}
