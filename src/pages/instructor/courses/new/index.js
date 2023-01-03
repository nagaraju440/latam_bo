import Stepper from "../StepIndicator/StepIndicator";
import NewCoursePage1 from "./NewCoursePage1";
import NewCoursePage2 from "./NewCoursePage2";
import NewCoursePage3 from "./NewCoursePage3";
import NewCoursePage4 from "./NewCoursePage4";
import NewCoursePage5 from "./NewCoursePage5";


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
    header: "NUEVO CURSO",
    descp: "¿Qué curso estarás enseñando?",
    stepComponent: <NewCoursePage1 />,
  },
  {
    header: "NUEVO CURSO",
    descp: "Alcance",
    stepComponent: <NewCoursePage2/>,
    
  },
  {
    header: "NUEVO CURSO",
    descp: "Información extra",
    stepComponent: <NewCoursePage3 />,
  },
  {
    header: "NUEVO CURSO",
    descp: "Presupuesto",
    stepComponent: <NewCoursePage4 />,
  },
  {
    header: "NUEVO CURSO",
    descp: "Nuevo Gasto",
    stepComponent: <NewCoursePage5 />,
  },

];