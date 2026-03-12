import React, { useState, Profiler } from "react";

const Child = () => {
    const [toggle,setToggle]=useState(false);

  console.log("child rendered");

  return <div>
    <h2>Child Component</h2>
    <button onClick={()=>setToggle(!toggle)}>toggle(current state:{toggle})</button>
  </div>
}
// id is the name you gave to the Profiler instance.
//phase tells wether it is mount phase or update phase
//actual duration tells the time taken to render the component for this render.
// base duration tells estimated render time if React had to render the entire subtree without memoization
// startTime shows the timestamp when React started rendering this update(0ms → App started 168ms → first child render started 169ms → render finished)
// commitTime shows the time when React finished rendering and applied DOM updates
// Why React Profiler Exists
// React applications can become slow due to Large component trees, Expensive calculations, Unnecessary re-renders, Inefficient state updates, Large lists
function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
) {
  console.log("Profiler Data:");
  console.log("Component:", id);
  console.log("Phase:", phase);
  console.log("Render time:", actualDuration);
  console.log("baseDuration:", baseDuration);
  console.log("startTime:", startTime);
  console.log("commitTime:", commitTime);
}
function ProductList({ search }) {
  console.log("ProductList rendered");

  const products = ["Laptop", "Phone", "Tablet", "Camera"];

  const filtered = products.filter(p =>
    p.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {filtered.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  );
}
function ProductSection() {
  const [search, setSearch] = useState("");

  console.log("ProductSection rendered");

  const products = ["Laptop", "Phone", "Tablet", "Camera"];

  const filtered = products.filter(p =>
    p.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </>
  );
}
function Footer() {
  console.log("footer rendered");

  return <h3>footer Component</h3>;
}
export default function ProfilerComp() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <Profiler id="ChildComponent" onRender={onRenderCallback}>
//         <Child />
//       </Profiler>
//     </div>
//   );

const [search, setSearch] = useState("");

  return (
    <div>
      <h2>Product Search</h2>
       <Profiler id="ProductSectionProfiler" onRender={onRenderCallback}>
        <ProductSection />
      </Profiler>
      {/* <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Profiler id="ProductListProfiler" onRender={onRenderCallback}>
        <ProductList search={search} />
      </Profiler> */}
      <Profiler id="CounterProfiler" onRender={onRenderCallback}>
        <Footer />
      </Profiler>
    </div>
  );

}
