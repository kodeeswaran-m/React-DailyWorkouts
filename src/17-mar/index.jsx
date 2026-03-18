

import axios from "axios";
import { useCallback, useEffect, useState } from "react"

const useFetch=(url, select)=>{
  const [data, setData]=useState(null);
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState(null);

  const fetchData=useCallback(async()=>{
    if(!url) return;
    setLoading(true);
    setError(null);
    try{
      const result=await axios.get(url);
      console.log(result.data);
          const finalData = select
        ? select(result.data)
        : result.data;
      
      setData(finalData)
    }
    catch(err){
      console.log(err);
    }
    finally{
      setLoading(false);
    }
  },[url]);
  useEffect(()=>{
    fetchData()
  },[fetchData]);
  const refetch=()=>{
    fetchData();
  }
  return {data, loading, error, refetch};
}
export default useFetch;


// import React, { useState } from "react";

// const CounterWithHistory = () => {
//   const [history, setHistory] = useState([0]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const currentValue = history[currentIndex];

//   const updateValue = (newValue) => {
//     // Remove future states (important for redo logic)
//     const updatedHistory = history.slice(0, currentIndex + 1);

//     setHistory([...updatedHistory, newValue]);
//     setCurrentIndex(updatedHistory.length);
//   };

//   const increment = () => {
//     updateValue(currentValue + 1);
//   };


//   const decrement = () => {
//     updateValue(currentValue - 1);
//   };

//   const undo = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   const redo = () => {
//     if (currentIndex < history.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Counter with Undo/Redo</h2>

//       <h1>{currentValue}</h1>

//       <div style={styles.buttons}>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>

//       <div style={styles.buttons}>
//         <button onClick={undo} disabled={currentIndex === 0}>
//           Undo
//         </button>

//         <button
//           onClick={redo}
//           disabled={currentIndex === history.length - 1}
//         >
//           Redo
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "50px"
//   },
//   buttons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "10px"
//   }
// };

// export default CounterWithHistory;




// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);

//   const {
//     register,
//     handleSubmit,
//     trigger,
//     getValues,
//     formState: { errors }
//   } = useForm({
//     mode: "onBlur"
//   });

//   const nextStep = async () => {
//     let isValid = false;

//     if (step === 1) {
//       isValid = await trigger(["name", "email"]);
//     } else if (step === 2) {
//       isValid = await trigger(["city", "pincode"]);
//     }

//     if (isValid) setStep((prev) => prev + 1);
//   };

//   const prevStep = () => setStep((prev) => prev - 1);

//   const onSubmit = (data) => {
//     console.log("Final Data:", data);
//     alert(JSON.stringify(data, null, 2));
//   };

//   return (
//     <div>
//       <h2>Multi step Form</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>

//         {step === 1 && (
//           <>
//             <h3>Personal Info</h3>

//             <div >
//               <label>Name</label>
//               <input
//                 {...register("name", {
//                   required: "Name is required"
//                 })}
//               />
//               {errors.name && <p >{errors.name.message}</p>}
//             </div>

//             <div>
//               <label>Email</label>
//               <input
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^\S+@\S+$/i,
//                     message: "Invalid email"
//                   }
//                 })}
//               />
//               {errors.email && <p >{errors.email.message}</p>}
//             </div>
//           </>
//         )}


//         {step === 2 && (
//           <>
//             <h3>Address</h3>

//             <div >
//               <label>City</label>
//               <input
//                 {...register("city", {
//                   required: "City is required"
//                 })}
//               />
//               {errors.city && <p >{errors.city.message}</p>}
//             </div>

//             <div >
//               <label>Pincode</label>
//               <input
//                 {...register("pincode", {
//                   required: "Pincode is required",
//                   pattern: {
//                     value: /^[0-9]{6}$/,
//                     message: "Invalid pincode"
//                   }
//                 })}
//               />
//               {errors.pincode && (
//                 <p >{errors.pincode.message}</p>
//               )}
//             </div>
//           </>
//         )}


//         {step === 3 && (
//           <>
//             <h3>Review</h3>
//             <pre >
//               {JSON.stringify(getValues(), null, 2)}
//             </pre>
//           </>
//         )}

//         <div >
//           {step > 1 && (
//             <button type="button" onClick={prevStep}>
//               Back
//             </button>
//           )}

//           {step < 3 && (
//             <button type="button" onClick={nextStep}>
//               Next
//             </button>
//           )}

//           {step === 3 && <button type="submit">Submit</button>}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MultiStepForm;














