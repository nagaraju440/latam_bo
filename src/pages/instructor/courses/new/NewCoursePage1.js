import Form from "../../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import UiButton from "../../../../UiCore/FormComponent/UiButton/UiButton";
import * as yup from 'yup'
const schema = yup.object().shape({
  name: yup.string().required(),
  mode: yup.string().required(),
  zoomLink: yup.string().required(),
  "pr/pb": yup.string().required(),
  isit: yup.string().required(),
});
const NewCoursePage1 = () => {
  const handleSubmit = (data) => {
    console.log("data is", data);
  };
  return (
    <div>
      
      <Form
        onSubmit={handleSubmit}
        schema={schema}
        // defaultValues={{
        //   isit: "is this course for another instructor",
        // }}
      >
        <div className="flex flex-col space-y-4 m-10 w-[400px]">
          <InputFormFeild label="name" name="name" />
          <InputFormFeild label="mode" name="mode" />
          <InputFormFeild label="zoom link" name="zoomLink" />
          <InputFormFeild label="private / public" name="pr/pb" />
          {/* <InputFormFeild label="" name="isit" /> */}
          <UiButton text="NEXT" style={{width:400}} type="submit" />
        </div>
      </Form>
    </div>
  );
};

export default NewCoursePage1;
