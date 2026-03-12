import React, {
  startTransition,
  useActionState,
  useMemo,
  useOptimistic,
  useRef,
  useState,
} from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
async function login(formData) {
  await new Promise((res) => {
    setTimeout(() => {
      console.log(
        "msg from submit function",
        formData.get("email"),
        formData.get("password"),
      );
      res("form submitted!!");
    }, 9000);
  });
}
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Logging in..." : "Login"}</button>
  );
}

function FormStatusViewer() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <div style={{ marginTop: "20px" }}>
      <p>pending: {pending ? "Yes" : "No"}</p>

      <p>Method: {method}</p>

      <p>Action function: {action?.name}</p>

      {pending && (
        <div>
          <p>password: {data?.get("password")}</p>
          <p>email: {data?.get("email")}</p>
        </div>
      )}
    </div>
  );
}
async function submitUser(prevState, formData) {
  const name = formData.get("name");

  return {
    message: `Welcome ${name}`,
  };
}
async function addComment(prevState, formData) {
  const text = formData.get("comment");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    id: Date.now(),
    text,
  };
}
const FormHooks = () => {
  //useOptimisitc
    const [comments, setComments] = useState([]);
    const [optimisticComments, addOptimistic] = useOptimistic(
      comments,
      (state, newComment) => [...state, newComment],
    );
    const [_, formAction] = useActionState(async (prevState, formData) => {
      const text = formData.get("comment");
      const optimisticComment = {
        id: Date.now(),
        text,
        sending: true,
      };
      addOptimistic(optimisticComment);
      const savedComment = await addComment(prevState, formData);
      setComments((prev) => [...prev, savedComment]);
      return null;
    }, null);
    return (
      <div>
        <h2>Comments</h2>
        <form action={formAction}>
          <input name="comment" placeholder="Write a comment" />
          <button type="submit">Post</button>
        </form>
        <ul>
          {optimisticComments.map((c) => (
            <li key={c.id}>
              {c.text} {c.sending && "(Sending...)"}
            </li>
          ))}
        </ul>
      </div>
    );
  //useActionState
  //   const [state, formAction, isPending] = useActionState(submitUser, {
  //     message: "",
  //   });
  //   return (
  //     <form action={formAction}>
  //       <input name="name" placeholder="Enter name" />
  //       <button disabled={isPending}>
  //         {isPending ? "Submitting..." : "Submit"}
  //       </button>
  //       <p>{state.message}</p>
  //     </form>
  //   );
  //useFormStatus
  //   return (
  //     <form action={login}>
  //       <input name="email" />
  //       <input name="password" type="password" />
  //       <LoginButton />
  //       <FormStatusViewer />
  //     </form>
  //   );
  //react 19 form handling
  //     // const [email, setEmail] = useState("");
  //   function submitAction(formData) {
  //     console.log(formData.get("email"));
  //   }
  //   return (
  //     <form action={submitAction}>
  //       <input
  //         name="email"
  //         // value={email}
  //         // onChange={(e) => setEmail(e.target.value)}
  //         placeholder="Enter your Email"
  //       />
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // rendering count
  //   const [state, setState] = useState(0);
  //   const renderRef = useRef(0);
  //   renderRef.current++;
  //   console.log(renderRef.current);
  //   return (
  //     <div>
  //       <button onClick={() => setState(state + 1)}>click</button>
  //     </div>
  //   );
  //useMemo
  //  const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");
  //   const expensiveValue = (() => {
  //     console.log("Expensive calculation running");
  //     for(let i=0;i<1000000;i++);
  //     return count * 1000;
  //   })()
  //   return (
  //     <>
  //       <h2>{expensiveValue}</h2>
  //       <button onClick={() => setCount(count + 1)}>
  //         Increment
  //       </button>
  //       <input
  //         value={text}
  //         onChange={(e) => setText(e.target.value)}
  //       />
  //     </>
  //   );
};

export default FormHooks;
