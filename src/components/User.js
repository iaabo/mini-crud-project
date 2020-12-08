import React from "react";

const User = (props) => {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <p>Email:{props.email}</p>
      <p> Username:{props.username}</p>
      <p>Company: {props.company && props.company.name}</p>
      <p>City: {props.address && props.address.city}</p>
    </div>
  );
};

export default User;
