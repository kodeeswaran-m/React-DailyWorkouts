import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const ReactHookForm = () => {
  // const { control, register, handleSubmit } = useForm({
  //   defaultValues: {
  //     users: [{ name: "" }],
  //   },
  // });
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "users",
  // });
  // console.log(fields);
  // // fields.map((field) => console.log(field));
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <h2>dynamic users</h2>
  //     {fields.map((field, index) => (
  //       <div key={field.id}>
  //         <input
  //           {...register(`users.${index}.name`)}
  //           placeholder="Enter name"
  //         />
  //         <button type="button" onClick={() => remove(index)}>
  //           Remove
  //         </button>
  //       </div>
  //     ))}
  //     <button type="button" onClick={() => append({ name: "" })}>
  //       Add User
  //     </button>
  //     <br />
  //     <br />
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue="raj"
        rules={{ required: "Email is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            // error={!!fieldState.error}
            // helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="role"
        control={control}
        defaultValue="admin"
        render={({ field }) => (
          <Select {...field}>
            <MenuItem value="admin">admin</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
        )}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );

  // const { control, handleSubmit, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  //   reset()
  // };
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <Controller
  //       name="username"
  //       control={control}
  //       defaultValue=""
  //       render={({ field }) => (
  //         <input {...field} placeholder="Enter username" />
  //       )}
  //     />
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   setValue,
  //   getValues,
  //   watch,
  //   formState: { isSubmitting, dirtyFields, touchedFields, errors },
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     age: "",
  //   },
  // });
  // const watchedName = watch("name");
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setValue("name", "Raj");
  //     setValue("email", "raj@gmail.com");
  //     setValue("age", "20");
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [setValue]);
  // const onSubmit = (data) => {
  //   console.log("data", data);
  //   console.log("getValues", getValues());
  //   reset();
  // };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <input
  //         {...register("name", { required: "name required" })}
  //         placeholder="enter name"
  //       />
  //       {errors.name && <p>{errors.name.message}</p>}
  //       <input
  //         {...register("email", {
  //           required: "email required",
  //           pattern: { value: /^\S+@\S+$/i, message: "invalid email" },
  //         })}
  //         placeholder="enter email"
  //       />
  //       {errors.email && <p>{errors.email.message}</p>}
  //       <input
  //       type="number"
  //         {...register("age", {
  //           required: "age required",
  //           min: {
  //             value: 18,
  //             message: "min age is 18",
  //           },
  //         })}
  //         placeholder="enter age"
  //       />
  //       {errors.age && <p>{errors.age.message}</p>}
  //       <button type="submit" disabled={isSubmitting}>
  //         submit
  //       </button>
  //     </form>

  //     <h1>form detail</h1>
  //     <p>dirty properties{JSON.stringify(dirtyFields)}</p>
  //     <p>touched properties{JSON.stringify(touchedFields)}</p>
  //     <p>watched name field : {watchedName}</p>
  //   </div>
  // );

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // function onSubmit(data) {
  //   console.log(data);
  // }
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <input
  //         {...register("username", {
  //           required: "username is required",
  //           pattern: {
  //             value: /^\w+$/i,
  //             message: "username required",
  //           },
  //         })}
  //         placeholder="enter user name"
  //       />
  //       <p>{errors.username?.message}</p>
  //       <input
  //         {...register("email", {
  //           required: "email required",
  //           pattern: {
  //             value: /^\S+@\S+$/i,
  //             message: "invalid email",
  //           },
  //         })}
  //         placeholder="enter email"
  //       />
  //       <p>{errors.email?.message}</p>
  //       <button type="submit">submit</button>
  //     </form>
  //   </div>
  // );
};
export default ReactHookForm;

// import React, { useRef } from "react";
// const UnControlledForm = () => {
// // const checkRef=useRef();
// // const handleSubmit=(e)=>{
// //   e.preventDefault();
// //   console.log(checkRef.current.checked);
// // }

// // return(
// //   <div>
// //     <form  onSubmit={handleSubmit}>
// //     <input type="checkbox" ref={checkRef} id={"checkBox"} />
// //     <label htmlFor="checkBox">terms and condition</label>
// //     <button type="submit">submit</button>
// //     </form>
// //   </div>
// // )

//   // const fileRef = useRef();
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(fileRef.current.files[0]);
//   // };
//   // return (
//   //   <form onSubmit={handleSubmit}>
//   //     <input type="file" ref={fileRef} />
//   //     <button>Upload</button>
//   //   </form>
//   // );

//   // const formRef = useRef();
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("formRef.current.elements", formRef.current.elements,formRef.current.elements.name.value)
//   //   const formData = new FormData(formRef.current);
//   //   console.log(Object.fromEntries(formData));
//   //   formRef.current.reset();
//   // };
//   // return (
//   //   <div>
//   //     <form ref={formRef} onSubmit={handleSubmit}>
//   //       <input
//   //         type="text"
//   //         name="name"
//   //         placeholder="enter  name"
//   //         defaultValue={"Raj"}
//   //       />
//   //       <input type="text" name="email" placeholder="enter email" defaultValue={"raj@gmail.com"}/>
//   //       <input type="text" name="empId" placeholder="enter employee ID" defaultValue={"ACE12939"}/>
//   //       <button type="submit">submit</button>
//   //     </form>
//   //   </div>
//   // );

//   //basic example
//   // const nameRef=useRef();
//   // const handleSubmit=(e)=>{
//   //   e.preventDefault();
//   //   console.log(nameRef.current.value)

//   // }
//   // return (
//   //   <div>
//   //     <form onSubmit={handleSubmit}>
//   //       <input ref={nameRef} placeholder='name' />
//   //       <button type='submit'>submit</button>
//   //     </form>

//   //   </div>
//   // )
// };
// export default UnControlledForm;

// import { useCallback, useState } from "react";
// import FormField from "./FormField";

// function ControlledForm() {
//   // checkbox, radio button and select
//   // const [checkBox, setCheckBox] = useState(false);
//   // const [gender, setGender] = useState("male");
//   // const [country, setCountry] = useState("india");
//   // const [display, setDisplay] = useState(false);

//   // return (
//   //   <div>
//   //     <div>
//   //       <input
//   //         type="checkbox"
//   //         id="checkBox"
//   //         checked={checkBox}
//   //         onChange={(e) => setCheckBox(e.target.checked)}
//   //       />
//   //       <label htmlFor="checkBox">Accept the condition</label>
//   //     </div>

//   //     <div>
//   //       <input
//   //         type="radio"
//   //         id="male"
//   //         value={"male"}
//   //         checked={gender === "male"}
//   //         onChange={(e) => setGender(e.target.value)}
//   //       />
//   //       <label htmlFor="male">Male</label>
//   //       <input
//   //         type="radio"
//   //         value={"female"}
//   //         checked={gender === "female"}
//   //         onChange={(e) => setGender(e.target.value)}
//   //       />
//   //       <label htmlFor="female">Female</label>
//   //     </div>
//   //     <div>
//   //       <select name="country" onChange={(e) => setCountry(e.target.value)}>
//   //         <option value="india">India</option>
//   //         <option value="us">US</option>
//   //         <option value="uae">UAE</option>
//   //       </select>
//   //     </div>
//   //     <div>
//   //       <button onClick={() => setDisplay(true)}>display</button>
//   //       <button onClick={() => setDisplay(false)}>HIde</button>
//   //     </div>
//   //     {display && (
//   //       <div>
//   //         <p>Terms and condition accepted : {checkBox ? "Yes" : "No"}</p>
//   //         <p>Selected country : {country}</p>
//   //         <p>Male : {gender}</p>
//   //       </div>
//   //     )}
//   //   </div>
//   // );

//   // multiple fields without callback
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   //   empId: "",
//   //   phoneNumber: "",
//   //   dob: new Date(),
//   // });
//   // const handleChange =useCallback( (e) => {
//   //   // console.log("event : ",e,"native Event", e.nativeEvent, "type",e.type)
//   //   const { name, value } = e.target;

//   //   setFormData((prev) => ({ ...prev, [name]: value }));
//   // },[]);
//   // return (
//   //   <>
//   //     <FormField
//   //       label={"name"}
//   //       name={"name"}
//   //       value={formData.name}
//   //       onChange={handleChange}
//   //     />
//   //     <FormField
//   //       label={"email"}
//   //       name={"email"}
//   //       value={formData.email}
//   //       onChange={handleChange}
//   //     />
//   //     <FormField
//   //       label={"employee ID"}
//   //       name={"empId"}
//   //       value={formData.empId}
//   //       onChange={handleChange}
//   //     />
//   //     <FormField
//   //       label={"name"}
//   //       name={"name"}
//   //       value={formData.phoneNumber}
//   //       onChange={handleChange}
//   //     />
//   //     <FormField
//   //       label={"dob"}
//   //       name={"dob"}
//   //       value={formData.dob}
//   //       onChange={handleChange}
//   //       type={"date"}
//   //     />
//   //   </>
//   // );

//   //editing the state before displaying
//   //   const [phoneNumber, setPhoneNumber] = useState("");
//   //   const handleChange = (e) => {
//   //     const value = e.target.value.replace(/\D/g, "");
//   //     setPhoneNumber(value);
//   //   };
//   //   return <div>
//   //     <input type="text" value={phoneNumber} onChange={handleChange}/>
//   //   </div>;
//   //multiple fields
//   // const [formData, setFormData]=useState({userName:"",email:""});
//   // function handleChange(e){
//   //     const{name,value}=e.target;
//   //     setFormData(prev=>({...prev,[name]:value}))
//   // }
//   // const handleSubmit=()=>{
//   //     console.log(formData);
//   //     setFormData({userName:"",email:""})
//   // }
//   // return(
//   //     <div>
//   //         <input name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter user name"/>
//   //         <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter email"/>
//   //         <button onClick={handleSubmit}>submit</button>
//   //     </div>
//   // )
//   // single field
//   // const [email, setEmail]=useState("");
//   // const showError=(email.length>0)&&!email.includes("@");
//   // console.log(showError, email.length>0, !email.includes("@"))
//   // return(
//   //     <div>
//   //         <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email..,"/>
//   //         {showError&&<p>email must contain @</p>}
//   //         <button onClick={()=>alert("submitted")}>submit</button>
//   //     </div>
//   // )

//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   // });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;

//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Submitted Data:", formData);
//   // };

//   // return (
//   //   <form onSubmit={handleSubmit}>
//   //     <div>
//   //       <label htmlFor="name">Name:</label>
//   //       <input
//   //       id="name"
//   //         type="text"
//   //         name="name"
//   //         value={formData.name}
//   //         onChange={handleChange}
//   //       />
//   //     </div>

//   //     <div>
//   //       <label>Email:</label>
//   //       <input
//   //         type="email"
//   //         name="email"
//   //         value={formData.email}
//   //         onChange={handleChange}
//   //       />
//   //     </div>

//   //     <button type="submit">Submit</button>
//   //   </form>
//   // );
// }
// export default ControlledForm;
