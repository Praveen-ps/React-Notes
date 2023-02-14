import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  /* Method for Conditional Rendering
        1. if/ else
            if (this.state.condition) {
      return (
        <div
          onClick={() => {
            this.handleConditon();
          }}
        >
          ConditionalRendering True
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            this.handleConditon();
          }}
        >
          ConditionalRendering False
        </div>
      );
    }
  }

2. Element 

  let condition;
  if(true){
    conditon = <div>Conditonal Rendering Component</div>
  }else{
    conditon =<div>false condition</div>
  }
  return(
    {condition}
  )

3.Ternary Condition

 return this.state.condition ? (
      <div>Conditonal Rendering Component True</div>
    ) : (
      <div>Conditonal Rendering Component False</div>
    );

4.Short-Circuit 

    a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
    */
  constructor(props) {
    super(props);

    this.state = {
      condition: true,
    };
  }
  handleConditon() {
    this.state.condition
      ? this.setState({ condition: false })
      : this.setState({ condition: true });
  }
  render() {
    let conditon;
    if (this.state.condition) {
      conditon = <div>Conditonal Rendering Component</div>;
    } else {
      conditon = <div>false condition</div>;
    }
    return this.state.condition ? (
      <div>Conditonal Rendering Component True</div>
    ) : (
      <div>Conditonal Rendering Component False</div>
    );
  }
}
