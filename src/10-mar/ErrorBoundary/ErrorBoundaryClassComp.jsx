import React from "react";

class ErrorBoundaryComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("error:", error);
    console.log("info:", info);
  }
  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false,
      retryKey: prev.retryKey + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Failed to load component.</h2>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }

    return <div key={this.state.retryKey}>{this.props.children}</div>;
  }
}

export default ErrorBoundaryComp;
