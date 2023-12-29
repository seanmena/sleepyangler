import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import "./LogOut.css";

const LogOut = () => {
  // eslint-disable-next-line
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button className="logout-btn" onClick={handleLogout}>
        LOG OUT
      </button>
    </div>
  );
};

export default LogOut;
