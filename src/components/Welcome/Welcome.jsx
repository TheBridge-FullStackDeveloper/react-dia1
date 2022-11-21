import React, { Component } from "react";
// const Welcome =()=>{
//   return <h1>Hello The Bridge</h1>;
// }
export class Welcome extends Component {
  render() {
    const person = this.props.person;
    return (
      <div>
        <h1>
          Welcome {person.name} {person.lastName}
        </h1>
      </div>
    );
  }
}

export default Welcome;
