import React from "react";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>
      <link to="/" className="btn btn-dark btn-sm my-1 "></link>
    </div>
  );
};
export default UserItem;
