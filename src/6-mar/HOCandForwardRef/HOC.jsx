export default function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <Component {...props} />;
  };
}