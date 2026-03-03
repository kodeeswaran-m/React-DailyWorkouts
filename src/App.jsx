import { StrictMode } from "react";
import MyComp from "./2-mar/ClassComp";
import Lifecycle from "./2-mar/ClassComp";
import ClassCounter from "./2-mar/ClassComp";
import Welcome from "./2-mar/ClassComp";
import Counter from "./2-mar/Parent";
import IndexAsKeyComp from "./2-mar/Parent";
import CourseList from "./2-mar/Parent";
import Parent from "./2-mar/Parent";
import ControlledForm from "./3-mar/Form";
import "./App.css";
import UnControlledForm from "./3-mar/Form";
// import StrictModeComp from "./3-mar/StrictMode";

function App() {
  return (
    <>
      <UnControlledForm />
      {/* <ControlledForm/> */}
      {/* <StrictModeComp/> */}

      {/* 02-march */}
      {/* Props, state, conditional rendering, list and event handling */}
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <CourseList/> */}
      {/* <IndexAsKeyComp/> */}

      {/* Class component */}
      {/* <Welcome name={"sam"}/> */}
      {/* <MyComp/> */}
      {/* <Lifecycle/> */}
      {/* <ClassCounter/> */}
    </>
  );
}

export default App;
