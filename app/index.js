import React from "react";
import ReactDOM from 'react-dom';
//import { render } from "react-dom";
import Main from "elements/main";

// render(
//   <Main />,
//   document.getElementById('main')
// );

// class Index extends React.Component {
//   constructor() {
//     super();
//     console.log("index");
//   }


//   componentDidMount() {
//   }

//   render() {
//     return <Main />
//   }
// }

// export default Index;

window.onload = () => {
	console.log();
  ReactDOM.render(<Main/>, document.getElementById('main'));
};