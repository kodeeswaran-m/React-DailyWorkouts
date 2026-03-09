import { useParams } from "react-router-dom";

export default function Photo() {
  const { id } = useParams();

  return (
    <div>
      <h2>Photo {id}</h2>
      <p>This is the photo page</p>
    </div>
  );
}