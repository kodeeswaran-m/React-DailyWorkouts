import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useFetch from ".";
const itemsData = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple",
  "Watermelon",
];
const Practice = () => {
  const [query, setQuery] = useState("");
  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch("https://dummyjson.com/users", (res) => res.users);
  const filteredData = users
    ?.map((user) => user.firstName)
    .filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  return (
    <div>
      <h2>list of data</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search..."
      />
      <ul>
        {filteredData?.length > 0 ? (
          filteredData.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>no data found</p>
        )}
      </ul>
    </div>
  );
  //custom hook use
  // const {
  //   data: users,
  //   loading,
  //   error,
  //   refetch,
  // } = useFetch("https://dummyjson.com/users", (res) => res.users);

  //   if (error) return <p>{error}</p>;
  //   if (loading) return <p>loading....</p>;

  //   return (

  //     <div>
  //         <button onClick={()=>refetch()}>refetch</button>
  //       {users?.map((item, index) => (
  //         <div key={item.id}>{item.firstName}</div>
  //       ))}
  //     </div>
  //   );
  //RHF and useFieldArray
  //   const {
  //     register,
  //     control,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     defaultValues: {
  //       name: "",
  //       skills: [{ value: "" }],
  //     },
  //   });
  //   const { fields, remove, append } = useFieldArray({
  //     control,
  //     name: "skills",
  //   });
  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };
  //   return (
  //     <div>
  //       <h2>skill form</h2>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <div>
  //           <label>Name</label>
  //           <input
  //             type="text"
  //             {...register("name", { required: "Name is required" })}
  //           />
  //           {errors.name && <p>{errors.name?.message}</p>}
  //         </div>
  //         <div>
  //           <label>Skills</label>
  //           {fields.map((field, index) => (
  //             <div key={field.id}>
  //               <input
  //                 type="text"
  //                 {...register(`skills.${index}.value`, {
  //                   required: "skill is required",
  //                 })}
  //                 placeholder={`Skill${index + 1}`}
  //               />
  //               <button
  //                 type="button"
  //                 onClick={() => remove(index)}
  //                 disabled={fields.length === 1}
  //               >
  //                 remove
  //               </button>
  //               {errors.skills?.[index]?.value && (
  //                 <p>{errors.skills?.[index]?.value?.message}</p>
  //               )}
  //             </div>
  //           ))}
  //           <button type="button" onClick={() => append({ value: "" })}>
  //             add
  //           </button>
  //         </div>
  //         <button type="submit">submit</button>
  //       </form>
  //     </div>
  //   );
  // RHF differnet modes of validations
  //   const [showPassword, setShowPassword] = useState(false);
  //   const {
  //     register,
  //     handleSubmit,
  //     trigger,
  //     formState: { errors, isValid },
  //   } = useForm({ mode: "onBlur" });
  //   //   const {
  //   //     register,
  //   //     handleSubmit,
  //   //     formState: { errors, isValid },
  //   //   } = useForm({ mode: "onChange" });
  //   const onSubmit = async (data) => {
  //     const isValid = await trigger("password");
  //     if (!isValid) return;
  //     console.log(data);
  //   };
  //   return (
  //     <div>
  //       <h2>user form </h2>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <div>
  //           <input
  //             type="text"
  //             placeholder="enter name"
  //             autoComplete="new-name"
  //             {...register("name", { required: "Name is required" })}
  //           />
  //           {errors.name && <p>{errors.name.message}</p>}
  //         </div>
  //         <div>
  //           <input
  //             type="email"
  //             placeholder="enter email"
  //             autoComplete="new-email"
  //             {...register("email", {
  //               required: "email is required",
  //               pattern: {
  //                 value: /^\S+@\S+$/i,
  //                 message: "email must be valid",
  //               },
  //             })}
  //           />
  //           {errors.email && <p>{errors.email?.message}</p>}
  //         </div>
  //         <input
  //           type={showPassword ? "password" : "text"}
  //           placeholder="enter password"
  //           autoComplete="new-password"
  //           {...register("password", {
  //             required: "password is required",
  //             minLength: {
  //               value: 8,
  //               message: "Min 8 character is required",
  //             },
  //           })}
  //         />
  //         <button onClick={() => setShowPassword(!showPassword)}>
  //           {showPassword ? "show" : "hide"}
  //         </button>
  //         <div>
  //             <div><input type="checkbox" {...register("remember me")} id="rememberMe" /> <label htmlFor="rememberMe">Accepting the terms and condition</label></div>
  //           <button type="submit" disabled={!isValid}>
  //             submit
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   );
};

export default Practice;
