import {
  useContext,
  useState,
  useEffect,
  useOptimistic,
  useActionState,
} from "react";
import { useFormStatus } from "react-dom";
import { TodoContext } from "./Context";

async function addComment(prevState, formData) {
  const comment = formData.get("comment");
  await new Promise((res) => setTimeout(res, 1000));
  if (!comment) {
    return { error: "Comment cannot be empty" };
  }
  return { success: true, comment };
}
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "postinfg..." : "post"}
    </button>
  );
}

const PracticeComp = () => {
  const [state, formAction] = useActionState(addComment, {});
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimistic] = useOptimistic(
    comments,
    (prev, newComment) => [...prev, newComment],
  );
  async function handleSubmit(formData) {
    const comment = formData.get("comment");
    addOptimistic(comment);
    await formAction(formData);
  }
  useEffect(() => {
    if (state?.success) {
      setComments((prev) => [...prev, state.comment]);
    }
  }, [state]);
  return (
    <div>
      <form action={handleSubmit}>
        <input name="comment" placeholder="write comment" />
        <SubmitButton />
      </form>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}

      <h3>comments</h3>
      {optimisticComments.map((c, i) => (
        <p key={i}>{c}</p>
      ))}
    </div>
  );

  //   const [query, setQuery] = useState("");
  //   const [debouncedQuery, setDebouncedQuery] = useState("");
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setDebouncedQuery(query);
  //     }, 500);
  //     return () => clearTimeout(timer);
  //   }, [query]);
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       if (!debouncedQuery) {
  //         setProducts([]);
  //         return;
  //       }
  //       const res = await fetch(
  //         `https://dummyjson.com/products/search?q=${debouncedQuery}`,
  //       );
  //       const data = await res.json();
  //       setProducts(data.products);
  //     };
  //     fetchProducts();
  //   }, [debouncedQuery]);
  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         placeholder="search products"
  //         value={query}
  //         onChange={(e) => setQuery(e.target.value)}
  //       />

  //       {products.map((item) => (
  //         <div key={item.id}>
  //           <h4>{item.title}</h4>
  //           <p>{item.description}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );

  //    const [items, setItems] = useState([]);
  //   const [skip, setSkip] = useState(0);
  //   const limit = 10;

  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  //     );
  //     const data = await res.json();

  //     setItems(prev => [...prev, ...data.products]);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, [skip]);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (
  //         window.innerHeight + window.scrollY >=
  //         document.body.offsetHeight - 50
  //       ) {
  //         setSkip(prev => prev + limit);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  //   return (
  //     <div>
  //       {items.map((item, index) => (
  //         <div key={index}>
  //           <h4>{item.title}</h4>
  //           <p>{item.description}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );

  //   const { todos, dispatch } = useContext(TodoContext);
  //   const [text, setText] = useState("");

  //   const addTodo = () => {
  //     dispatch({ type: "ADD_TODO", payload: text });
  //     setText("");
  //   };

  //   return (
  //     <div>
  //       <input value={text} onChange={e => setText(e.target.value)} />
  //       <button onClick={addTodo}>Add</button>

  //       {todos.map(todo => (
  //         <div key={todo.id}>
  //           {todo.text}
  //           <button onClick={() =>
  //             dispatch({ type: "DELETE_TODO", payload: todo.id })
  //           }>
  //             delete
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   );
};

export default PracticeComp;
