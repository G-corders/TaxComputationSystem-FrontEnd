import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Axios from "axios";
import Login from "./pages/Taxpayer/LoginPage.jsx";
import Signup from "./pages/Taxpayer/Signup.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingsBasicDetails from "./pages/Taxpayer/SettingsBasicDetails.jsx";
import SettingsFileUpload from "./pages/Taxpayer/SettingsFileUpload.jsx";
import SettingsIncomeDetails from "./pages/Taxpayer/SettingsIncomeDetails.jsx";
import TaxStatus from "./pages/Taxpayer/TaxStatus.jsx";
import VerifyUserEmail from "./pages/Taxpayer/VerifyUserEmail.jsx";
import UserHome from "./pages/Taxpayer/UserHome.jsx";
import Viewtax from "./pages/Taxpayer/Viewtax.jsx";
import TaxPayments from "./pages/Taxpayer/TaxPayments.jsx";
import ForgetPasswordPage from "./pages/Taxpayer/ForgetPasswordPage.jsx";
import ResetPasswordPage from "./pages/Taxpayer/ResetPasswordPage.jsx";
import LandingPage from "./pages/Taxpayer/LandingPage.jsx";
import SuperAdminDashboard from "./pages/SuperAdmin/SuperAdminDashboard.jsx";
import AdminLoginPage from "./pages/SuperAdmin/LoginPage.jsx";
import CreateFirstAdmin from "./pages/SuperAdmin/CreateFirstAdmin.jsx";
import ViewDetailsPage from "./pages/SuperAdmin/ViewDetailsPage.jsx";
import CreateNewAdminPage from "./pages/SuperAdmin/CreateNewAdminPage.jsx";








function App() {
  Axios.defaults.withCredentials = true;
  
  return (
    
  <BrowserRouter>
  <Routes>
    
    {/* Taxpayer Routes */}
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/settings/uploadfiles" element={<SettingsFileUpload/>}></Route>
    <Route path="/settings/income" element={<SettingsIncomeDetails/>}></Route>
    <Route path="/settings/basic" element={<SettingsBasicDetails/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/viewtax" element={<Viewtax/>}></Route>
    <Route path="/UserHomePage" element={<UserHome/>}></Route>
    <Route path="/TaxStatus" element={<TaxStatus/>}></Route>
    <Route path="/TaxPayments" element={<TaxPayments/>}></Route>
    <Route path="/verify-email" element={<VerifyUserEmail/>}></Route>
    <Route path="/forgotpassword" element={<ForgetPasswordPage/>}></Route>
    <Route path="/resetpassword" element={<ResetPasswordPage/>}></Route>
    

    {/* Data Entry routes */}


    {/* Super Admin Routes */}
    <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard/>}></Route>
    <Route path="/Admin/login" element={<AdminLoginPage/>}></Route>
    <Route path="/Create/FirstAdmin" element={<CreateFirstAdmin/>}></Route>
    <Route path="/view/details" element={<ViewDetailsPage/>}></Route>
    <Route path="/create/admin" element={<CreateNewAdminPage/>}></Route>

  </Routes>
  </BrowserRouter>    

  );
}

export default App;
