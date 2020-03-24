import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import MyComponent from "./components/counter1";
//import MyComponent from "./components/counter2";
//import MyComponent from "./components/counter3";
//import MyComponent from "./components/counter4";
//import MyComponent from "./components/counter5";
//import MyComponent from "./components/counter6";
//import MyComponent from "./components/counter7";
import MyComponent from "./components/counter9";

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
