


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
import ReactHookForm from "./3-mar/Form";
import { EmployeeProvider, UserProvider } from "./4-mar/context/context";
import FormPage, { DisplayEmployee } from "./4-mar/practice";
import Hooks from "./4-mar/Hooks";
import PerformanceHooks from "./5-mar/PerformanceHooks";
import CustomHooks from "./5-mar/CustomHooks";
import Routing from "./6-mar/routingWithoutReactRouter/Routing";
import BrowserRouterComp from "./6-mar/routingWithReactRouter/BrowserRouter";
import DynamicRouting from "./6-mar/routingWithReactRouter/DynamicRouting/DynamicRouting";
import NewRouter from "./6-mar/routingWithReactRouter/loader/NewRouter";
import OtherRouters from "./6-mar/routingWithReactRouter/OtherRouters";
import HOCExample from "./6-mar/HOCandForwardRef/UsersList";
// import StrictModeComp from "./3-mar/StrictMode";

function App() {
  return (
    <>
    <HOCExample/>
    {/* <OtherRouters/> */}
    {/* <NewRouter/> */}
    {/* <DynamicRouting/> */}
    {/* <BrowserRouterComp/> */}
    {/* <Routing/> */}
    {/* <CustomHooks/> */}
    {/* <PerformanceHooks/> */}
      {/* <Hooks /> */}
      {/* <FormPage />
      <EmployeeProvider>
        <DisplayEmployee />
      </EmployeeProvider> */}

      {/* <ReactHookForm/> */}
      {/* <UnControlledForm /> */}
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
