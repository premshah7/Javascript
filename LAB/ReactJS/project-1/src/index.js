import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
function Logo(){
    return("Hello World from logo");

}

function Seperator(props){
    let temp = "";
    for(let i=0 ; i<props.count ; i++){
      temp += props.by;
    }
    return(<h1>{temp}</h1>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <h1>Hello world</h1>
      <Seperator count = '10' by = "#"/>
      <h1>Hello world</h1>
      
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
