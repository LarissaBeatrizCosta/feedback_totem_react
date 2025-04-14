import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Home from "../index";
import StarRating from "../starRatingPage";
import UserCpf from "../userCpf";
import Feedback from "../feedback";
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
      <Route
        path="/UserCpf"
        element={
          <ProtectedRoute>
            <UserCpf />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Feedback"
        element={
          <ProtectedRoute>
            <Feedback />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
