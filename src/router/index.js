import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

// import Campaign from "../pages/Campaign";
// import Login from "../pages/Login";
// import Register from "../pages/Register/Register";
// import Profile from "../pages/Profile/Profile";
// import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
// import PageKOLDetail from "../pages/Details/PageKolDetail/PageKolDetail";
// import VerifyRegister from "../pages/VerifyRegister/VerifyRegister";
// import ResetPassword from "../pages/ForgotPassword/ResetPassword";
// import Chat from "../pages/Chat/Chat";
// import Fields from "../pages/Fields/Fields";
// import NotFound from "../pages/NotFound/NotFound";
// import PageDetail from "../pages/Details/PageEntDetail/PageDetail";
// import HomeAdmin from "../pages/Admin/HomeAdmin";
// import PaymentResult from "../pages/Payment/PaymentResult";
// import BookingDetails from "../pages/Booking/BookingDetails";
// import ResgisterKol from "../pages/ResgisterKol/ResgisterKol";

import { ProtectedRoute } from "../context/ProtectedRoute.context";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';
import SignUp from "../pages/Signup/Signup";
import ForgotPassWord from "../pages/ForgotPassWord/ForgotPassWord";
import ChangePassWord from "../pages/ChangePassWord/ChangePassWord";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={
            <MainLayout>
              <Home />
            </MainLayout>}
        />
        <Route
          path="/home" element={
            <MainLayout>
              <Home />
            </MainLayout>}
        />
        <Route
          path="/login" element={
            <MainLayout>
              <Login />
            </MainLayout>}
        />
        <Route
          path="/signup" element={
            <MainLayout>
              <SignUp />
            </MainLayout>}
        />
        <Route
          path="/change-password" element={
            <MainLayout>
              <ChangePassWord />
            </MainLayout>}
        />
        <Route
          path="/forgot-password" element={
            <MainLayout>
              <ForgotPassWord />
            </MainLayout>}
        />
        <Route
          path="/field/:id" element={
            <MainLayout>
              <Home />
            </MainLayout>}
        />
        <Route
          path="kols/:id"
          element={
            <MainLayout>
              <p>Page</p>
            </MainLayout>}
        />
        <Route
          path="chat/:id"
          element={
            <MainLayout>
              <p>Page</p>
            </MainLayout>}
        />
        <Route
          path="ents/:id"
          element=
          {
            <MainLayout>
              <ProtectedRoute Component={ <p>Page</p>} />
            </MainLayout>
          }
        />

        <Route
          path="/vnpay/return"
          element={<ProtectedRoute Component={ <p>Page</p>} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
