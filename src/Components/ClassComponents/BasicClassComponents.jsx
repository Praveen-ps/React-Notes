import React, { Component } from "react";

/* 
In react there are life cycle methods in class components
1.Mounting phase ==> the flow will be in the following order 
        Constructor()
        static getDerivedStateFromProps(props,state){ return null;}// This method should return either a new state or null
        render()
        ComponentDidMount()

2.Updating phase ==> the flow will be in the following order
        static getDerivedStateFromProps(props,state){return null;}
        shouldComponentUpdate(nextProps,nextState)// this is used to check the component need to re-render or not and this method will compare the new state and props with the older one and return ture or false, This is used for increase the performance 
        render()
        getSnapshotBeforeUpdate(pervState,prevProps)// returns either null or a value
        ComponentDidUpdate(prevState,PrevProp,snapShot)// based upon the params, we can makes the ajax call

3.Unmounting Phase
        ComponentWillUnmount()

4.Error Handling Phase
        Satic getDerivedSateFromError()
        ComponentDidCatch()
*/
export default class BasicClassComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 1,
    };
    console.log("Constructor");
  }
  handleClick() {
    this.setState({ a: this.state.a + 1 });
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("ComponentDidMount");
  }
  render() {
    console.log("render");
    // this.setState({ a: this.state + 1 });
    return (
      <div
        onClick={() => {
          this.handleClick();
        }}
      >
        BasicClassComponents {this.state.a}
      </div>
    );
  }
}
