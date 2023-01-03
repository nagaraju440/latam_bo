import React from "react";
import Form from "./UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "./UiCore/FormComponent/InputFormFeild/InputFormFeild";
import NewCoursePage1 from "./pages/instructor/courses/new/NewCoursePage1";
import StepIndicator from './pages/instructor/courses/StepIndicator/StepIndicator';


export default function Modal({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center">
      <div
        className="card  bg-white p-3 rounded-md w-[500px] h-[500px] mt-12"
      >
        <div className="font-bold">
          
          <button
            className="float-right p-1 hover:animate-pulse"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <StepIndicator/>
      <NewCoursePage1/>
      </div>
      
    </div>
  );
}
