import React, { Component } from "react";

class TestApi extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5500/api")
      .then((res) => res.json())
      //   .then((res) => res.text(""))
      .then((res) => {
        this.setState({ apiResponse: res });
        console.log(res);
      });
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return <div>This the editor baby</div>;
  }
}

export default TestApi;
