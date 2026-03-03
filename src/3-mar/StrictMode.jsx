import React, { useEffect } from "react";

// class StrictModeComp extends React.Component {
//   componentWillMount() {
//     console.log("Fetching data...");
//   }
//   componentWillUpdate() {
//     console.log("About to update");
//   }

//   render() {
//     return <div>Hello</div>;
//   }
// }

// const StrictModeComp = () => {
//   console.log("testing");
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("tick");
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   //   useEffect(() => {
//   //     console.log("Effect ran");

//   //     return () => {
//   //       console.log("Cleanup");
//   //     };
//   //   }, []);
//   console.log("end of testing");
//   return <div>Strict mode</div>;
// };

// export default StrictModeComp;
