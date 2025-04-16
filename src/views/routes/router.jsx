import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Home from "../index";
import StarRating from "../starRatingPage";
import UserCpf from "../userCpf";
import Feedback from "../feedback";
import RegisterCpf from "../registerCpf";
import Comment from "../comment";
import Login from "../login";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Login"
        element={
          <ProtectedRoute>
            <Login/>
          </ProtectedRoute>
        }
      />
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
        <Route
        path="/RegisterCpf"
        element={
          <ProtectedRoute>
            <RegisterCpf/>
          </ProtectedRoute>
        }
      />
       <Route
        path="/Comment"
        element={
          <ProtectedRoute>
            <Comment/>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
