import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poster: [],
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        poster: response.data,
      });
      console.log(response.data);
    });
  }

  render() {
    const { poster } = this.state;
    return (
      <div>
        <h1>List of post s</h1>
        {poster.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
  }
}

export default PostList;
