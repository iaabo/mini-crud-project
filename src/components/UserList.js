import React from "react";
import axios from "axios";
import User from "./User";
import UserAdd from "./UserAdd";

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

  handleRemove = (id) => {
    const newUserList = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: newUserList });
  };

  addUser = (event, newUser) => {
    event.preventDefault();
    this.setState({ users: [newUser, ...this.state.users] });
  };

  render() {
    return (
      <div>
        <h1 className="title">Mini Crud Project - Wild Code School 2020</h1>
        <UserAdd addUserFunction={this.addUser} />
        {this.state.users.map((user) => (
          <User {...user} key={user.id} handleRemove={this.handleRemove} />
        ))}
      </div>
    );
  }
}

export default UserList;
