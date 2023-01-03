import React from "react";
import Form from "./UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "./UiCore/FormComponent/InputFormFeild/InputFormFeild";
import NewCoursePage1 from "./pages/instructor/courses/new/NewCoursePage1";
import StepIndicator from './pages/instructor/courses/StepIndicator/StepIndicator';
import { NordicWalking } from "@mui/icons-material";
import NormalCloseSvg from "./assets/icons/NormalCloseIcon";


export default function Modal({ visible, onClose ,children }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 ">
      <div className="card relative bg-white rounded-md w-[650px] mx-auto py-5 min-h-[330px] mt-12">
        <div className="font-bold">
          <button className="flex ml-auto p-2 top-1 right-1 absolute right-0" onClick={onClose}>
          <NormalCloseSvg/>
          </button>
          <div className="px-12">
          </div>
          {children}
        </div>
      </div>
    </div>

    // <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center">
    //   <div
    //     className="card  bg-white p-3 rounded-md w-[500px] h-[500px] mt-12"
    //   >
    //     <div className="font-bold">
          
    //       <button
    //         className="flex ml-auto p-2"
    //         onClick={onClose}
    //       >
    //         <NormalCloseSvg/>
    //       </button>
    //     </div>
    //     {children}
    //     {/* <div>ello modal</div> */}
    //     {/* <StepIndicator/>
    //   <NewCoursePage1/> */}
    //   </div>
      
    // </div>
  );
}
