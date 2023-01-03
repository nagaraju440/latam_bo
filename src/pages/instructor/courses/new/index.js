import Stepper from "../StepIndicator/StepIndicator";
import NewCoursePage1 from "./NewCoursePage1";

const NewCourse=()=>{
    return(
        <div>
            {/* <NewCoursePage1/> */}
            <Stepper  stepsData={stepsData} />
        </div>
    )
}

export default NewCourse;


const stepsData = [
  {
    header: "header 1",
    descp: "description 1",
    stepComponent: <NewCoursePage1 />,
  },
  {
    header: "header 2",
    descp: "description 2",
    stepComponent: <NewCoursePage1 />,
    
  },
  {
    header: "header 3",
    descp: "description 1",
    stepComponent: <NewCoursePage1 />,
  },
  {
    header: "header 4",
    descp: "description 4",
    stepComponent: <NewCoursePage1 />,
  },

];