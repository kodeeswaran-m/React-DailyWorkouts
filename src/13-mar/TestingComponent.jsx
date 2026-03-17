import React, { useState } from "react";
import Button from "./Button";
import UserForm from "./UserForm";
import Modal from "./Modal";
import UserTable from "./UserTable";

const TestingComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Button
        onClick={() => console.log("Button is clicked!!")}
        label={"click me:)"}
      /> */}
      {/* <UserForm onSubmit={(data) => console.log(data)} /> */}
      {/* <button onClick={() => setOpen(true)}>open modal</button>
      {open && (
        <Modal
          isOpen={open}
          onClose={() => setOpen(!open)}
          children={"Modal display message"}
        />
      )} */}
      <UserTable />
    </>
  );
};

export default TestingComponent;
