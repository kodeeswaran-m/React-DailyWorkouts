import React from "react";
import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom"

function Products() {

  const location = useLocation()

  return (
    <Link
      to="/products/1"
      state={{ backgroundLocation: location }}
    >
      Open Product
    </Link>
  )
}

import { useParams, useNavigate } from "react-router-dom"

const products = [
  { id: 1, name: "Laptop", description: "High performance laptop" },
  { id: 2, name: "Phone", description: "Latest smartphone" },
  { id: 3, name: "Headphones", description: "Noise cancelling headphones" }
]

function ProductModal() {

  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((p) => p.id === Number(id))

  function closeModal() {
    navigate(-1)
  }

  return (
    <div style={overlayStyle}>

      <div style={modalStyle}>

        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <button onClick={closeModal}>
          Close
        </button>

      </div>

    </div>
  )
}




function ProductPage() {

  const location = useLocation()

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          
          <Link
            to={`/products/${product.id}`}
            state={{ backgroundLocation: location }}
          >
            View {product.name}
          </Link>

        </div>
      ))}
    </div>
  )
}


 function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>
        Options
      </button>

      {open && 
        ReactDOM.createPortal(
          <div className="dropdown-menu">
            <div>Edit</div>
            <div>Delete</div>
            <div>Share</div>
            <div>Download</div>
          </div>,
          document.getElementById("dropdown-root")
        )}
    </div>
  );
}
function Tooltip({ children, text }) {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {/* 
      {show && (
        <div className="tooltip">
          {text}
        </div>
      )} */}
      {show &&
        ReactDOM.createPortal(
          <div className="tooltip">{text}</div>,
          document.getElementById("tooltip-root"),
        )}
    </div>
  );
}

function Modal({ close }) {
  return (
    <div className="modal">
      <h2>Modal Window</h2>
      <button onClick={close}>Close</button>
    </div>
  );

//   return ReactDOM.createPortal(
//     <div className="modal">
//       <h2>Modal Window</h2>
//       <button onClick={close}>Close</button>
//     </div>,
//     document.getElementById("modal-root"),
//   );
}
const PortalsComp = () => {
    // const [open, setOpen] = useState(false);

    // return (
    //   <div className="container">
    //     <h2>Dashboard</h2>
    //     <button onClick={() => setOpen(true)}>Open Modal</button>
    //     {open && <Modal close={() => setOpen(false)} />}
    //   </div>
    // );

  //   return (
  //     <div className="card">
  //       <Tooltip text="This is a tooltip message">
  //         <button>Hover me</button>
  //       </Tooltip>
  //     </div>
  //   );

//   return (
//     <div className="card">
//       <Dropdown />
//     </div>
//   );



 const location = useLocation()
  const state = location.state

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/products/:id" element={<ProductModal />} />
        </Routes>
      )}
    </>
  )
};

export default PortalsComp;

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const modalStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "8px",
  width: "300px"
}
