import React, { useContext, useRef, useState } from "react";
import "./UserDataForm.css";
import generateUniqueId from "generate-unique-id";
import { UserContext } from "../../providers/UserInfoProvider";

const UserDataForm = () => {
  const { setUserId } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({
    name: undefined,
    address: undefined,
    email: undefined,
    phone: undefined,
  });
  const nameRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  //   console.log(userDetails.email.includes("@"));
  const setValueInLocalStorage = () => {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    const uid = generateUniqueId();
    if (allUsers) {
      allUsers.push({ ...userDetails, uid });
      localStorage.setItem("users", JSON.stringify(allUsers));
    } else {
      localStorage.setItem("users", JSON.stringify([{ ...userDetails, uid }]));
    }
    setUserId(uid);
  };
  const handleSubmit = () => {
    if (userDetails.name === "" || userDetails.name === undefined) {
      nameRef.current.focus();
      nameRef.current.style.border = "1px solid red";
      addressRef.current.style.border = "1px solid rgb(219, 219, 219)";
      emailRef.current.style.border = "1px solid rgb(219, 219, 219)";
      phoneRef.current.style.border = "1px solid rgb(219, 219, 219)";
    } else if (
      userDetails.address === "" ||
      userDetails.address === undefined
    ) {
      addressRef.current.focus();
      nameRef.current.style.border = "1px solid rgb(219, 219, 219)";
      addressRef.current.style.border = "1px solid red";
      emailRef.current.style.border = "1px solid rgb(219, 219, 219)";
      phoneRef.current.style.border = "1px solid rgb(219, 219, 219)";
    } else if (
      userDetails.email === "" ||
      userDetails.email === undefined ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)
    ) {
      emailRef.current.focus();
      nameRef.current.style.border = "1px solid rgb(219, 219, 219)";
      addressRef.current.style.border = "1px solid rgb(219, 219, 219)";
      emailRef.current.style.border = "1px solid red";
      phoneRef.current.style.border = "1px solid rgb(219, 219, 219)";
    } else if (
      userDetails.phone === "" ||
      userDetails.phone === undefined ||
      userDetails.phone?.length < 10
    ) {
      phoneRef.current.focus();
      nameRef.current.style.border = "1px solid rgb(219, 219, 219)";
      addressRef.current.style.border = "1px solid rgb(219, 219, 219)";
      emailRef.current.style.border = "1px solid rgb(219, 219, 219)";
      phoneRef.current.style.border = "1px solid red";
    } else {
      nameRef.current.style.border = "1px solid rgb(219, 219, 219)";
      addressRef.current.style.border = "1px solid rgb(219, 219, 219)";
      emailRef.current.style.border = "1px solid rgb(219, 219, 219)";
      phoneRef.current.style.border = "1px solid rgb(219, 219, 219)";
      setValueInLocalStorage();
      setUserDetails({
        name: "",
        address: "",
        email: "",
        phone: "",
      });
    }
  };
  return (
    <div className="user-data-form-container">
      <div className="user-daya-form-wrapper">
        <div className="wrapper">
          <label>Name</label>
          <input
            type="text"
            ref={nameRef}
            value={userDetails?.name}
            onChange={(e) => {
              setUserDetails((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="wrapper">
          <label>Address</label>
          <input
            type="text"
            ref={addressRef}
            value={userDetails?.address}
            onChange={(e) => {
              setUserDetails((prev) => {
                return {
                  ...prev,
                  address: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="wrapper">
          <label>Email</label>
          <input
            type="text"
            ref={emailRef}
            value={userDetails?.email}
            onChange={(e) => {
              setUserDetails((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="wrapper">
          <label>Phone</label>
          <div className="inner-wrapper">
            <span>+91</span>
            <input
              type="number"
              ref={phoneRef}
              value={userDetails?.phone}
              onChange={(e) => {
                // console.log(e.target.value !== "+");
                if (e.target.value?.length <= 10 && e.target.value !== "+") {
                  setUserDetails((prev) => {
                    // console.log(e.target.value?.length);
                    return {
                      ...prev,
                      phone: e.target.value,
                    };
                  });
                }
              }}
            />
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UserDataForm;
