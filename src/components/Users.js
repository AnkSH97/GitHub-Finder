import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <>
      <div style={userStyle}>
        {props.users.map((user) => (
          <UserItem user={user} />
        ))}
      </div>
    </>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users;
