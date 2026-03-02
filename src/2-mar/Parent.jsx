import { useState } from "react";
//index cannnot be a key in list
export default function IndexAsKayComp() {
  const [items, setItems] = useState([
    { id: 1, name: "react" },
    { id: 2, name: "node" },
    { id: 3, name: "mongo" },
  ]);
  const deleteFirst = () => {
    setItems((prev) => prev.slice(1));
  };
  return (
    <div>
      <h2>index as key</h2>
      <button onClick={deleteFirst}>delete</button>

      {items.map((item, index) => (
        <Row key={index} name={item.name} />
      ))}
    </div>
  );
}
function Row({ name }) {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {name}
      </label>
    </div>
  );
}

// //List and key
// const courses = ["react", "node", "mongodb"];
// function CourseList() {
//   return (
//     <ul>
//       {courses.map((course,index) => (
//         <li key={index}>{course}</li>
//         // <li>{course}</li>
//       ))}
//     </ul>
//   );
// }
// export default CourseList;

//Conditional rendering
// function Parent() {
//   const isAdmin = true;
//   const count=0;// edge vase
//   return <>
//   {/* {isAdmin&&"Admin Page"} */}
//   {/* {count&&"admin"} */}
//   {count>0&&"admin"}
//   </>
// }
// export default Parent;
// function Parent() {
//   const isLoggedIn = false;
//   if(isLoggedIn) return "Dashboard";
//   else return "Login Page"
// }
// export default Parent;

// function Parent() {
//   const isLoggedIn = true;
//   return <div>{isLoggedIn ? "Dashboard" : "Login Formm"}</div>;
// }
// export default Parent;

// function Parent() {
//   const username = "sam";
//   return <div>{username||"Guest "}</div>;
// }
// export default Parent;

// function Parent({ status="error" }) {
//   switch (status) {
//     case "loading":
//       return <p>loading</p>;
//     case "error":
//       return <p>eror</p>;
//     default:
//       return <p>success</p>;
//   }
// }
// export default Parent;

// // Stale state issue
// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count=>count + 1);
//     setCount(count=>count + 1);
//     // setCount(count + 1);
//     // setCount(count + 1);
//   };
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={handleClick}>Add 2</button>
//     </>
//   );
// }
// export default Counter;

// // mutating the state directly
// import  { useState } from "react";
// const Parent = () => {
//   const [dataValue, setDataValue] = useState(4);
//   dataValue = 56;
//   return <div>{dataValue}</div>;
// };
// export default Parent;

// state lifting
// import { useState } from "react";
// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Display count={count} />
//       <Buttons increment={() => setCount((c) => c + 1)} />
//     </>
//   );
// }
// export default Parent;
// function Display({ count }) {
//   return <h1>{count}</h1>;
// }
// function Buttons({ increment }) {
//   return <button onClick={increment}>+</button>;
// }

// import React, { useState } from "react";
// import Child from "./Child";
// import Counter from "./Child";
// const Parent = () => {
//   const [greet, setGreet] = useState("");

//   function onSubmit() {
//     alert(greet);
//   }
//   return (
//     <div>
//       {/* <input placeholder="type greet msg..," value={greet} onChange={(e) => setGreet(e.target.value)} />
//       <Child name={"Submit"} submit={onSubmit} /> */}

//       {/* <Counter start={5}/> */}
//     </div>
//   );
// };

// export default Parent;
