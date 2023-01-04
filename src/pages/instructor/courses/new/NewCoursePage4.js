import Form from "../../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import UiButton from "../../../../UiCore/FormComponent/UiButton/UiButton";
import * as yup from "yup";
import Accordion from "../../../../components/Accordion";
import NormalInputFormField from "../../../../UiCore/FormComponent/NormalInputFeild/NormalInputField";
import BudgetInputField from "../../../../UiCore/FormComponent/BudgetInputField/BudgetInputField";
import Iicon from "../../../../assets/icons/iicon";
const schema = yup.object().shape({
  name: yup.string().required(),
  mode: yup.string().required(),
  zoomLink: yup.string().required(),
  "pr/pb": yup.string().required(),
  isit: yup.string().required(),
});
const NewCoursePage4 = () => {
  const handleSubmit = (data) => {
    console.log("data is", data);
  };
  return (
    <div>
      <Accordion name="Participantes" id="pa" >
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-2 gap-5 text-base text-gray-500 text-left ">
            
          <div className=" flex flex-row  items-center" >Participantes totales <span className="text-red-500">* </span> </div>
          <div><NormalInputFormField name="1" /></div>
          <div className="items-center">Cuanta genta del taller</div>
          <div><NormalInputFormField name="1" /></div>
          <div className=" flex flex-row gap-2 items-center">Regular full<span><Iicon/> </span> </div>
          <div><NormalInputFormField name="1" /></div>
          <div className=" flex flex-row gap-2 items-center">Regular de tallers <span><Iicon/> </span></div>
          <div><NormalInputFormField name="1" /></div>
          <div className=" flex flex-row gap-2 items-center">Repitents <span><Iicon/> </span></div>
          <div><NormalInputFormField name="1" /></div>
          <div className=" flex flex-row gap-2 items-center">Referidos memberesia <span><Iicon/> </span></div>
          <div><NormalInputFormField name="1" /></div>
          <div className=" flex flex-row gap-2 items-center">Repitents memberesia <span><Iicon/> </span></div>
          <div><NormalInputFormField name="1" /></div>
          
          </div>
          
          

        </Form>
      </Accordion>
      <Accordion name="Gastos" id="gasto">
        <Form onSubmit={() => {}}>
        <div className="grid grid-cols-3 gap-3 text-gray-500">
            
            <div className="flex flex-row gap-2 items-center ">Hall Rental <Iicon/> </div>
            <div><BudgetInputField name="Amount1" placeholder="Amount" /></div>
            {/* <div><SelectComponent /></div> */}
            <div><BudgetInputField name="Status1" placeholder="Status" /></div>
            <div className="flex flex-row gap-2 items-center">Materials <Iicon/></div>
            <div><BudgetInputField name="Amount2" placeholder="Amount" /></div>
            <div><BudgetInputField name="Status2" placeholder="Status" /></div>
            <div className="flex flex-row gap-2 items-center">Tickets <Iicon/></div>
            <div><BudgetInputField name="Amount3" placeholder="Amount" /></div>
            <div><BudgetInputField name="Status3" placeholder="Status" /></div>
            <div className="flex flex-row gap-2 items-center">Combustible <Iicon/></div>
            <div><BudgetInputField name="Amount4" placeholder="Amount" /></div>
            <div><BudgetInputField name="Status4" placeholder="Status" /></div>
        </div>
        </Form>
      </Accordion>

      {/* <Accordion>
        <div>hello bhuuuuuu</div>
    </Accordion> */}
    </div>
  );
};

export default NewCoursePage4;
