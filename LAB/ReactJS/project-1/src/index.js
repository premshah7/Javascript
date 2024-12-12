import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Lab-12/Layout';
import Home from './Lab-12/Home';
import Contact from './Lab-12/Contact';
import Admin from './Lab-12/Admin';
import About from './Lab-12/About';
import Help from './Lab-12/Help';
import Display from './Lab-13/Display';
import DisStu from './Lab-13/DisStu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<DisStu/>}></Route>
    </Routes>
  </BrowserRouter>
)

// root.render(
//   <>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route path="/Home" element={<Home/>}></Route>
//       <Route path='/About' element={<About/>}></Route>
//       <Route path='/Contact' element={<Contact/>}></Route>
//       <Route path='/Admin' element={<Admin/>}></Route>
//       <Route path = 'Help' element = {<Help/>}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   </>
// )
























// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// function Logo(){
//     return("Hello World from logo");

// }

// function Seperator(props){
//     let temp = "";
//     for(let i=0 ; i<props.count ; i++){
//       temp += props.by;
//     }
//     return(<h1>{temp}</h1>);
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//       <h1>Hello world</h1>
//       <Seperator count = '10' by = "#"/>
//       <h1>Hello world</h1>
      
//     </>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
