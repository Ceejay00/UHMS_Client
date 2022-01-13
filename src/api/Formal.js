import axios from "axios";
import React, { Component } from "react";
class Formal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/signin", this.state).then((response) => {
      console.log(response);
    });
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User id</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <button type="submit">Sub,it</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Formal;
