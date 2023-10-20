import React, { useContext } from "react";
import { AuthContext } from "./auth.context";
// import Login from "../pages/Login";
import NotAdmin from './../pages/NotFound/NotAdmin';

export function ProtectedRoute({ Component, role }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // return <Login />;
  }
  if (role === "ADMIN") {
    if (user.role === role) {
      return <Component />;
    } else return <NotAdmin />;
  } else return <Component />;
}
