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

  handleRemove = (id) => {
    const newUserList = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: newUserList });
  };

  render() {
    return (
      <div>
        <h1 className="title">Mini Crud Project - Wild Code School 2020</h1>

        {this.state.users.map((user) => (
          <User {...user} key={user.id} handleRemove={this.handleRemove} />
        ))}
      </div>
    );
  }
}

export default UserList;
