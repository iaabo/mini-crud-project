import React from "react";
import axios from "axios";
import User from "./User";

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ users: response.data }));
  };

  render() {
    return (
      <div>
        <h1 className="title">Mini Crud Project - Wild Code School 2020</h1>

        {this.state.users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </div>
    );
  }
}

export default UserList;
