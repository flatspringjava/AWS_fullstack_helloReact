import { Component } from "react";

class Counter extends Component {
  // constructor(props)  {
  // super(props);
  //     this.state = {
  //         Number : 0,
  //         fixedNumber : 0,
  //     };
  // }
  state = { number: 0, fixedNumber: 0 };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState((prevState, props) => {
            //   return { number: prevState.number + 1 };
            // });
            // this.setState((prevState) => {
            //   return { number: prevState.number + 1 };
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출됨.");
              console.log(this.state);
            });
          }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
