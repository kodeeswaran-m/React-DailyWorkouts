import { useNavigate } from "react-router-dom";

export default function Modal({ children }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)"
      }}
      onClick={() => navigate(-1)}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          margin: "100px auto",
          width: "300px"
        }}
      >
        {children}
      </div>
    </div>
  );
}