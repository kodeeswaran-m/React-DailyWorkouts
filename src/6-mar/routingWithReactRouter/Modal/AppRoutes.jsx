import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Gallery from "./Gallery";
import Photo from "./Photo";
import Modal from "./Modal";

export default function AppRoutes() {
  const location = useLocation();

  const state = location.state;

  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Gallery />} />
        <Route path="/photo/:id" element={<Photo />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/photo/:id"
            element={
              <Modal>
                <Photo />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}
