import React from "react";
// counter in class comp with props 
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default ClassCounter;

// Example with compomnent life cycle method
// class Lifecycle extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("cnstructor");

//     this.state = { count: 0 };
//   }

//   componentDidMount() {
//     console.log("component did mount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("should component update");
//     return true;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("component did update");
//   }

//   componentWillUnmount() {
//     console.log("component will unmount");
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button
//           onClick={() =>
//             this.setState({ count: this.state.count + 1 })
//           }
//         >
//           increase
//         </button>
//       </div>
//     );
//   }
// }
// export default Lifecycle;

// basic structure
// class MyComp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return <h1>{this.state.count}</h1>;
//   }
// }
// export default MyComp;

// destructuring the props
// class Welcome extends React.Component {
//   render() {
//     const { name } = this.props;
//     return <h1>Hello {name}</h1>;
//     // return <h1>Hello {this.props.name}</h1>;
//   }
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }

// class Welcome {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

// export default Welcome;
