import { useErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComp from "./ErrorBoundaryClassComp";

const Dashboard = () => {
  return (
    <>
      {/* //classComponent Error Boundary */}
      {/* <ErrorBoundaryComp>
        <Demo />
      </ErrorBoundaryComp> */}

      {/* // functional component error boundary(provided by a external library) */}
      {/* <ErrorBoundary fallback={<p>Something went wrong from external package error boundary!!</p>}>
        <Demo />
      </ErrorBoundary> */}

      {/* //logging the error and info in the EB library */}
      {/* <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Retry</button>
          </div>
        )}
        onError={(error, info) => {
          console.log(error);
          console.log(info);
        }}
      >
        <Demo />
      </ErrorBoundary> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MyComponent />
      </ErrorBoundary>
    </>
  );
};

export default Dashboard;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>API Error Occurred</h2>
      <p>{error.message}</p>

      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}
function MyComponent() {
  const { showBoundary } = useErrorBoundary();

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/invalid-endpoint",
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      showBoundary(error);
    }
  }

  return <button onClick={fetchData}>Load Data</button>;
}

const Demo = () => {
  throw new Error("Something went wrong!");
  return <p>demo component from dashboard error boundary</p>;
};
