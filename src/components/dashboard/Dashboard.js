import React, { useEffect } from "react";
import "./Dashboard.css";
import Counter from "../couter/Counter";
import UserDataForm from "../userDataForm/UserDataForm";
import TextEditor from "../textEditor/TextEditor";
import ShowUsers from "../showUsers/ShowUsers";
import UserInfoProvider from "../../providers/UserInfoProvider";
import UserConfirmationProvider from "../../providers/UserConfirmationProvider";
const Dashboard = () => {
  const handleBeforeUnload = (event) => {
    // alert("before exit ");
    event.preventDefault();
    // event.returnValue = "do you want to save"; // For older browsers
    // return "hello"; // For modern browsers
    return null;
  };
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div className="dashboard-container">
      <UserInfoProvider>
        <UserConfirmationProvider>
          <div className="section-one">
            <Counter />
            <UserDataForm />
          </div>
          <div className="section-two">
            <ShowUsers />
            <TextEditor />
          </div>
        </UserConfirmationProvider>
      </UserInfoProvider>
    </div>
  );
};

export default Dashboard;
