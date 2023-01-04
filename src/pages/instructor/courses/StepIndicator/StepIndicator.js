import React, { useState } from "react";
import "./StepIndicator.css";
// import { TiTick } from "react-icons/ti";
const Stepper = (props) => {
  const steps = ["step-1","step-2","step-3","step-4","step-5"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  
  return (
    <>
    <div>
      <div className="flex text-[16px] text-gray-500 font-normal p-3 justify-center">{props.stepsData[currentStep - 1].header}</div>
      <div className="flex text-[28px] font-medium justify-center">{props.stepsData[currentStep - 1].descp}</div>
      <div className="Steps p-6">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <div>hii</div> : i + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full m-auto">{props.stepsData[currentStep - 1].stepComponent}</div>
      {!complete && (
        <button
          className="btn bg-slate-300"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
        </div>
    </>
  );
};

export default Stepper;