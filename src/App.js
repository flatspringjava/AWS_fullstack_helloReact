import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;

//d asdasdasdawedaqwdasd

// '', false, 0, null, undefined

// var, let 키워드도 사용 가능.
// const name = "리액트2";
// let number = 0;
// let text = "";
// if(name == "JSX") {
//   text = '<h1>리액트 입니다.</h1>';
// }
// else {
//   text = '<h2>리액트가 아닙니다.</h2>'
// }

// return (
//   <Fragment>
//     {
//       number && <h1>리액트 입니다.</h1>
//       /* { {name === "JS" ? (<h1>리액트 입니다.</h1>) : (<h2>리액트가 아닙니다.</h2>)} }*/
//     }
//   </Fragment>
// );
