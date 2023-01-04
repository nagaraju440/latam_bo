import Form from "../../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import UiButton from "../../../../UiCore/FormComponent/UiButton/UiButton";
import * as yup from "yup";
import Accordion from "../../../../components/Accordion";
import NormalInputFormField from "../../../../UiCore/FormComponent/NormalInputFeild/NormalInputField";
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
          <div className="grid grid-cols-2 gap-5">
            
          <div>Participantes totales</div>
          <div><NormalInputFormField name="1" /></div>
          <div>Cuanta genta del taller</div>
          <div><NormalInputFormField name="1" /></div>
          <div>Regular full</div>
          <div><NormalInputFormField name="1" /></div>
          <div>Regular de tallers</div>
          <div><NormalInputFormField name="1" /></div>
          <div>Repitents</div>
          <div><NormalInputFormField name="1" /></div>
          <div>Referidos memberesia</div>
          <div><NormalInputFormField name="1" /></div>
          <div>Repitents memberesia</div>
          <div><NormalInputFormField name="1" /></div>
          
          </div>
          
          

        </Form>
      </Accordion>
      <Accordion name="Gastos" id="gasto">
        <Form onSubmit={() => {}}>
          <div>a</div>
          <NormalInputFormField name="1" />
          <div>b</div>
        </Form>
      </Accordion>

      {/* <Accordion>
        <div>hello bhuuuuuu</div>
    </Accordion> */}
    </div>
  );
};

export default NewCoursePage4;
