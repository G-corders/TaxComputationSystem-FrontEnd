import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Homepagestyle.css";
import profilepic from "./profilepic.jpg";

export default function Homepage() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id 

  useEffect(() => {
    getUserDetails();
  }, []);

  const [userData, setUserData] = useState({});
  const [values, setValues] = useState({
    email: "",
    name: "",
    address: "",
    tin: "",
    nameofemployer: "",
    mobileno: "",
    officeno: "",
    homeno: "",
    birthday: "",
    id: "",
  });

  Axios.defaults.withCredentials = true;

  const getUserDetails = async () => {
    try {
      const response = await Axios.get(`${base_url}/api/taxpayer/getuserbasicdetails/${userId}`);
      setUserData(response.data.Data);

      setValues({
        ...values,
        email: response.data.Data.email,
        name: response.data.Data.name,
        address: response.data.Data.address,
        tin: response.data.Data.tin,
        nameofemployer: response.data.Data.nameofemployer,
        mobileno: response.data.Data.mobileno,
        officeno: response.data.Data.officeno,
        homeno: response.data.Data.homeno,
        birthday: response.data.Data.birthday,
        id: response.data.Data.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Assuming progress bar value comes from data or logic
  const now = userData.progress || 0; // Use data or default to 0

  return (
    <div
      style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#D3E9FE",
        width: "78vw",
        height: "100vh",
        marginBottom: "20px",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
      }}
    >
      <div className="container mt-5">
        <div className="row">
          <div>
            <img
              src={profilepic}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: "200px" }}
            />
          </div>
          <h2
            style={{
              paddingTop: "30px",
              color: "#0085FF",
              textShadow: "2px 2px 4px rgba(0, 0, 0,0.3)",
            }}
          >
            {userData.name}
          </h2>
          <div style={{ paddingTop: "10px" }}>
            <div style={{ paddingTop: "10px" }}>
              <ProgressBar now={now} label={`${now}%`} style={{ boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} />
            </div>
            <p style={{ paddingTop: "30px" }}></p>
            <p>Phone: {userData.mobileno}</p>
            <p>Location: {userData.address}</p>
            <p>
              About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla vel justo sit amet ligula cursus eleifend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
