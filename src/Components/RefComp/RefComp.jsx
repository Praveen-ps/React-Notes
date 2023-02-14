import React, { Component } from "react";

// this ref Component is used to create the focus in the input element in the forms there are two type by seting the React.createRef() and seting them in that particular input element atribute ref as them(eg.ref={this.inputRef}) and we can add current and focus to it because inputRef will return object that has current property where it is used, so we can manuplate it
//another one is by using

class RefComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cb = null;
    this.setCb = (element) => {
      this.cb = element;
    };
  }
  componentDidMount() {
    console.log(this.cb);
    if (this.cb) {
      this.cb.focus();
    }
    // console.log(this.inputRef);
    // this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRef} /> */}
        <input type="text" ref={this.setCb} />
      </div>
    );
  }
}

export default RefComp;
