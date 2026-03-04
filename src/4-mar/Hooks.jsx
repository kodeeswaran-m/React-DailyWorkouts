import {
  Children,
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
function expensiveCAlc() {
  console.log("function for expensive calculation");
  return 0;
}
const Child = () => {
  useEffect(() => {
    console.log("child");
    return () => console.log("child cleanup");
  }, []);
  return <div>child hook</div>;
};
// function reducer(state, action) {
//   switch (action.type) {
//     case "inc":
//       return { count: state.count + 1 };

//     case "dec":
//       return { count: state.count - 1 };

//     default:
//       return state;
//   }
// }
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "remove":
      return state.filter((_, i) => i !== action.index);

    default:
      return state;
  }
}
const Hooks = () => {
  // with and without useMemo
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);
//   function heavyCalculation(num) {
//     console.log("FROM HEAVY FUNCTION...");
//     return num * 2;
//   }
//     const result = heavyCalculation(count);
// //   const result = useMemo(() => {
// //     return heavyCalculation(count);
// //   }, [count]);
//   return (
//     <>
//       <h1>{result}</h1>
//       <button onClick={() => setCount(count + 1)}>count+</button>
//       <button onClick={() => setNumber(number + 1)}>number+</button>
//     </>
//   );

  // useReducer example
  //   const [todos, dispatch] = useReducer(reducer, []);
  //   const [item, setItem] = useState("");
  //   return (
  //     <>
  //     <input value={item} onChange={(e)=>setItem(e.target.value)}/>
  //       <button onClick={() => {dispatch({ type: "add", payload: item });setItem("")}}>
  //         add
  //       </button>
  //       {todos.map((todo, i) => (
  //         <div key={i}>
  //           {todo}
  //           <button onClick={() => dispatch({ type: "remove", index: i })}>
  //             del
  //           </button>
  //         </div>
  //       ))}
  //     </>
  //   );
  // usereducer example
  //   const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   return (
  //     <div>
  //       <p>{state.count}</p>
  //       <button onClick={() => dispatch({ type: "inc" })}>increment</button>
  //       <button onClick={() => dispatch({ type: "dec" })}>decrement</button>
  //     </div>
  //   );
  // useref to store the previous ref values
  //   const [count, setCount] = useState(0);
  //   const prevCount = useRef();
  //   useEffect(() => {
  //     prevCount.current = count;
  //   });
  //   return (
  //     <>
  //       <h1>current value {count}</h1>
  //       <h1>previous value {prevCount.current}</h1>
  //       <button onClick={() => setCount(count + 1)}>increment</button>
  //     </>
  //   );
  //useref to store data that persist across rendering
  //   const [toggle, setToggle] = useState(false);
  //   const renderCount = useRef(0);
  // //   renderCount.current++;
  //   console.log("Rendered", renderCount.current);
  //   return (
  //     <h1>
  //       <p>{renderCount.current}</p>
  //       <button onClick={() => setToggle(!toggle)}>click statechange </button>
  //       <button onClick={() => renderCount.current++}>click no statechange(increase the ref value) </button>
  //     </h1>
  //   );
  // useRef to access the dom element
  //   const inputRef = useRef();
  //   function focusInput() {
  //     inputRef.current.focus();
  //   }
  //   return (
  //     <>
  //       <input ref={inputRef} />
  //       <button onClick={focusInput}>focus</button>
  //     </>
  //   );
  // layout vs effect eg..
  //   const ref = useRef();
  // //   useEffect(() => {
  // //     ref.current.style.color = "red";
  // //   }, []);
  // //   useLayoutEffect(() => {
  // //     ref.current.style.color = "red";
  // //   }, []);
  // //   return <h1 ref={ref}>Hello</h1>;
  //useLayout effect it will run before browser paint and useEFFEct
  //   console.log("render");
  //   useEffect(() => {
  //     console.log("normal useeffect");
  //   });
  //   useLayoutEffect(() => {
  //     console.log("layout effect");
  //   });
  //   return <h1>Hello</h1>;
  //useEffect on API call
  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data.users);
  //         console.log(data.users)
  //       });
  //   }, []);
  //   return (
  //     <>
  //       {users.map((user) => (
  //         <div key={user.id}>{user.firstName}</div>
  //       ))}
  //     </>
  //   );
  //Stale closure in effect
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("effect", count);
  //   }, []);
  //   return <button onClick={() => setCount(count + 1)}>{count}</button>;
  // useeffect
  //   const [toggle, setToggle] = useState(false);
  //   useEffect(() => {
  //     console.log("runs on every render");
  //   });
  //   useEffect( () => {
  //     console.log("mount");
  //   }, []);
  //   useEffect( () => {
  //     console.log("when dep changes");
  //   }, [toggle]);
  //   return (
  //     <>
  //       <p>{toggle ? "1" : "0"}</p>
  //       <button onClick={() => setToggle(!toggle)}>toggle</button>
  //       {toggle&&<Child/>}
  //     </>
  //   );
  //array update
  //   const [item, setItem] = useState("");
  //   const [todo, setTodo] = useState([]);
  //   const addTodo = () => {
  //     if(item.trim()==="") return
  //     setTodo([...todo, item]);
  //     setItem("")
  //   };
  //   const removeTodo = (index) => {
  //     setTodo((prev) => prev.filter((_, i) => i !== index));
  //   };
  //   return (
  //     <>
  //       <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
  //       <button onClick={addTodo}>add</button>
  //       {todo.map((item, i) => (
  //         <div key={i}>
  //           {item}
  //           <button onClick={() => removeTodo(i)}>delete</button>
  //         </div>
  //       ))}
  //     </>
  //   );
  // updating the object and nested object
  //   const [user, setUser] = useState({
  //     name: "ram",
  //     age: 25,
  //     address: {
  //       city: "chennai",
  //       pincode: 606901,
  //     },
  //   });
  //   const updateAge = () => {
  //     setUser((prev) => ({
  //       ...prev,
  //       age: prev.age + 1,
  //       address: {
  //         ...prev.address,
  //         pincode: 99999,
  //       },
  //     }));
  //   };
  //   console.log(user);
  //   return (
  //     <>
  //       <h2>{user.name}</h2>
  //       <h2>{user.age}</h2>
  //       <button onClick={updateAge}>Increase Age</button>
  //     </>
  //   );
  //functional update in useState
  //   const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //     setCount((prev) => prev + 1);
  //     setCount((prev) => prev + 1);
  //   };
  //   return <button onClick={handleClick}>{count}</button>;
  //Lazy initialisation
  //   const [count, setCount] = useState(()=>expensiveCAlc());
  //   console.log("hooks component rendered");
  //   return (
  //     <div>
  //       <button onClick={() => setCount(count + 1)}>increase</button>
  //     </div>
  //   );
  //batching example
  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState("");
  //   const handleClick = () => {
  //     setCount(1);
  //     setName("raj");
  //     console.log("Update");
  //   };
  //   console.log("Component rendered");
  //   return (
  //     <button onClick={handleClick}>
  //       {count} {name}
  //     </button>
  //   );
};

export default Hooks;
