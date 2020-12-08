import React from "react";

class UserAdd extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    company: [{ name: "" }],
    address: [{ city: "" }],
  };

  handleAdd = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(event) => this.props.addUserFunction(event, this.state)}
        >
          <label for="input-fields">
            <input
              className="input"
              name="name"
              type="text"
              required="required"
              placeholder="name"
              onChange={this.handleAdd}
            />
            <input
              className="input"
              name="email"
              type="text"
              required="required"
              placeholder="email"
              onChange={this.handleAdd}
            />
            <input
              className="input"
              name="username"
              type="text"
              required="required"
              placeholder="username"
              onChange={this.handleAdd}
            />

            <input
              className="input"
              name="name"
              type="text"
              required="required"
              placeholder="company name"
              onChange={this.handleAdd}
            />

            <input
              className="input"
              name="city"
              type="text"
              required="required"
              placeholder="city"
              onChange={this.handleAdd}
            />
            <button type="submit" className="btn">
              Add user
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default UserAdd;
