import { useState, useTransition } from "react";

const bigList = Array.from({ length: 200000 }, (_, i) => `item ${i}`);

const PerformanceHooks = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(bigList);

  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;

    // HIGH PRIORITY (typing should be instant)
    setQuery(value);

    // LOW PRIORITY (heavy filtering)
    startTransition(() => {
      const filtered = bigList.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setList(filtered);
    });
  }
console.log(list);

  return (
    <div style={{ padding: 20 }}>
      <h2>With useTransition</h2>

      <input
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />

      {isPending && <p>Updating list...</p>}

      {list.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );

  //   const id = useId();

  //   return (
  //     <div>
  //       <label htmlFor={id}>Name</label>
  //       <input id={id} type="text" />
  //     </div>
  //   );
};

export default PerformanceHooks;
