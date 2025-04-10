import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Home from "../Home";
import Stars from "../Home/stars";
export default function AppRouter() {
  return (
    <Routes>
      {/* rota inicial */}
      <Route path="/" element={<Home />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Stars"
        element={
          <ProtectedRoute>
            <Stars />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
