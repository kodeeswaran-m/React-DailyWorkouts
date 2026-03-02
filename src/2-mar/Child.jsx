

// Counter example to understamd state and props behaviour
// import { useState } from "react";
// const Counter = ({ start=0 }) => {
//   const [count, setCount] = useState(start);
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count=>count + 1)}>+</button>
//     </>
//   );
// };
// export default Counter;

// props without destructuring
// const Child = (props) => {
//   return <button onClick={props.submit}>{props.name}</button>
// };
// export default Child;

// props with destructuring
// const Child = ({name,submit}) => {
//   return (
//    <button  onClick={submit}>{name}</button>
//   )
// }
// export default Child
