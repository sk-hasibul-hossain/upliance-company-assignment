import React, { useContext } from "react";
import "./UserDeleteConfirmationModal.css";
import { createPortal } from "react-dom";
import { UserConfirmationContext } from "../../../providers/UserConfirmationProvider";

const UserDeleteConfirmationModal = () => {
  const { userDeleteConfirmation, setUserDeleteConfirmation } = useContext(
    UserConfirmationContext
  );
  const handleDelete = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      const filteredUsers = users.filter((user) => {
        return user.uid !== userDeleteConfirmation.uid ? true : false;
      });
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      setUserDeleteConfirmation((prev) => {
        return {
          ...prev,
          isOpen: false,
          status: prev.uid,
        };
      });
    }
  };
  return createPortal(
    <div className="user-delete-confirmation-modal-outer-container">
      <div className="user-delete-confirmation-modal-inner-container">
        <div className="user-delete-confirmation-modal-body">
          <h1>Do you really want to delete?</h1>
          <div className="user-delete-confirmation">
            <button onClick={handleDelete}>Yes</button>
            <button
              onClick={() => {
                setUserDeleteConfirmation((prev) => {
                  return {
                    ...prev,
                    uid: "",
                    isOpen: false,
                  };
                });
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root-modal")
  );
};

export default UserDeleteConfirmationModal;
