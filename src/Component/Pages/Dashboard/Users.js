import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shear/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data, isLoading, refetch } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>EMAIL</th>
              <th>SERVICE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <UserRow
                refetch={refetch}
                key={user._id}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
