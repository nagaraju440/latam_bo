import Form from "../../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import UiButton from "../../../../UiCore/FormComponent/UiButton/UiButton";
import * as yup from "yup";
import Accordion from "../../../../components/Accordion";
import NormalInputFormField from "../../../../UiCore/FormComponent/InputFormField/NormalInputField";
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
      <Accordion name="Participantes" id="pa">
        <Form onSubmit={() => {}}>
          <NormalInputFormField name="1" />
        </Form>
      </Accordion>

      <Accordion name="Gastos" id="gasto">
        <div>bhuvanesh</div>
      </Accordion>

      {/* <Accordion>
        <div>hello bhuuuuuu</div>
    </Accordion> */}
    </div>
  );
};

export default NewCoursePage4;
