import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, roll } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Thank you! Success");
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {roll ? (
          <button class="btn btn-sm">Already Admin</button>
        ) : (
          <button onClick={makeAdmin} class="btn btn-accent btn-sm">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-accent btn-sm">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
