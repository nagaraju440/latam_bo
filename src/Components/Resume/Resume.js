import React from "react";
import Button from "./Button";
import Content from "./Content";

function Resume() {
  return (
    <div className="flex flex-col justify-around">
      <Content />
      <Button name="Send Request"/>
    </div>
  );
}

export default Resume;
