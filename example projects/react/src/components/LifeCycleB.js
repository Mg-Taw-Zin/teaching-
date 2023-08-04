import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
    };
    console.log("LifeCycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
  render() {
    console.log("LifeCycleB render");
    return <div>lifecycle B</div>;
  }
}

export default LifeCycleB;
