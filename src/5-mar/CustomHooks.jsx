import useCounter from "./CustomHooks/useCounter";
import useFetch from "./CustomHooks/useFetch";
import useWindowSize from "./CustomHooks/useWindowSize";

const CustomHooks = () => {
  //useFetchHook
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
  );

  if (loading) return <h2>loading...</h2>;
  if (error) return <h2>error</h2>;

  return (
    <div>
      <h1>list of products</h1>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
  //useWindowSize Hook
  // const { width, height } = useWindowSize();
  // return (
  //   <p>
  //     {width} x {height}
  //   </p>
  // );
  //useCounter hook
  // const { count, increment, decrement } = useCounter();
  // return (
  //   <>
  //     <button onClick={decrement}>-</button>
  //     {count}
  //     <button onClick={increment}>+</button>
  //   </>
  // );
};

export default CustomHooks;
