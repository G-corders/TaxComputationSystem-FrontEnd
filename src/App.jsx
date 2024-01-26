import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.scss";
import Loginform from "./components/Loginform.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Sidenavbar from "./components/Sidenavbar.jsx";
import Header from "./components/Header.jsx";
import Incomedetails from "./components/Incomedetails.jsx";
import FileUpload from "./components/FileUpload.jsx";
import TaxView from "./components/TaxView.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Loginform />
      <PersonalDetails />
      <Sidenavbar/>
      <Incomedetails/>
      <FileUpload />
      <TaxView />
    </>
  );
}

export default App;
