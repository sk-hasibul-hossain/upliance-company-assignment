import React, { useContext, useEffect, useState } from "react";
import "./ShowUsers.css";
import { UserContext } from "../../providers/UserInfoProvider";
import { UserConfirmationContext } from "../../providers/UserConfirmationProvider";
import UserDeleteConfirmationModal from "../modal/userDeleteConfirmationModal/UserDeleteConfirmationModal";
const ShowUsers = () => {
  const { userId } = useContext(UserContext);
  const { userDeleteConfirmation, setUserDeleteConfirmation } = useContext(
    UserConfirmationContext
  );
  const [userDetails, setUserDetails] = useState([]);
  // const [deleteUserStatus, setDeleteUserStatus] = useState();
  // // const handleDelete = (uid) => {
  //   const users = JSON.parse(localStorage.getItem("users"));
  //   if (users) {
  //     const filteredUsers = users.filter((user) => {
  //       return user.uid !== uid ? true : false;
  //     });
  //     localStorage.setItem("users", JSON.stringify(filteredUsers));
  //     setDeleteUserStatus(uid);
  //   }
  // };
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setUserDetails(users.reverse());
    }
  }, [userId, userDeleteConfirmation.status]);
  return (
    <div className="show-users-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userDetails?.map((user) => {
            return (
              <tr key={user?.uid}>
                <td>{user?.uid}</td>
                <td>{user?.name}</td>
                <td>{user?.address}</td>
                <td>{user?.email}</td>
                <td> {user?.phone}</td>
                <td>
                  <span
                    onClick={() => {
                      // handleDelete(user?.uid);
                      setUserDeleteConfirmation((prev) => {
                        return {
                          ...prev,
                          uid: user?.uid,
                          isOpen: true,
                        };
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                      id="close"
                    >
                      <g>
                        <path
                          d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {userDeleteConfirmation?.isOpen && <UserDeleteConfirmationModal />}
    </div>
  );
};

export default ShowUsers;
