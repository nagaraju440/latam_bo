import React from "react";
import { ReactComponent as Editbutton } from "../.././Assets/Vector.svg";

function EditButton() {
  return (
    <p className="border rounded-full border-bdcolor h-7 w-7 flex justify-center items-center mr-3 cursor-pointer">
      <Editbutton className="w-3.5 h-3.5" />
    </p>
  );
}

export default EditButton;
