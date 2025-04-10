import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Home from "../index";
import StarRating from "../starRatingPage";
export default function AppRouter() {
  return (
    <Routes>
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
        path="/StarRating"
        element={
          <ProtectedRoute>
            <StarRating />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
