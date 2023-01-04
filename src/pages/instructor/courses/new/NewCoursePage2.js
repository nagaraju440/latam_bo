import Form from "../../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import UiButton from "../../../../UiCore/FormComponent/UiButton/UiButton";
import * as yup from 'yup'
import SelectComponent from "../../../../components/SelectComponent/SelectComponent";


const schema = yup.object().shape({
  name: yup.string().required(),
  mode: yup.string().required(),
  zoomLink: yup.string().required(),
  "pr/pb": yup.string().required(),
  isit: yup.string().required(),
});

const SelectBoxOptions = [
  { name: "option 1" },
  { name: "option 2" },
  { name: "option 3" },
  { name: "option 4" },
];
const NewCoursePage2 = () => {
  const handleSubmit = (data) => {
    console.log("data is", data);
  };
  return (
    <div>
      
      <Form
        onSubmit={handleSubmit}
        schema={schema}
      >
        <div className="flex flex-col space-y-4 m-10 w-[400px]">
          <div className="font-light">Elige el / los lugares donde se va a publicar esta actividad.</div>

          <SelectComponent
            name="mode"
            placeholder="type the course"
            selectOptionsData={SelectBoxOptions}
          />
            <SelectComponent
            name="mode"
            placeholder="type the course"
            selectOptionsData={SelectBoxOptions}
          />
           <SelectComponent
            name="mode"
            placeholder="type the course"
            selectOptionsData={SelectBoxOptions}
          />
          <div className="flex flex-row justify-around">
          <UiButton text="PREVIOUS" widthStyle="w-[175px]" color="bg-[#D7D7D7]" type="submit" />
          <UiButton text="NEXT" widthStyle="w-[175px]" color="bg-[#7677F4]"  type="submit" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewCoursePage2;
