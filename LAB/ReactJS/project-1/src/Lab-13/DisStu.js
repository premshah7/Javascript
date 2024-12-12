import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Display() {
  const [student, setStu] = useState([]);
  // const id = useParams();
  const apiUrl = "http://localhost:8000/students";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setStu(res));
  },[]);

  const st = student.map((s) => {
    return (
      <>
        <div class="card m-3 ">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name : {s.name}</h5>
          <h5 class="card-title">Enrollment : {s.enroll}</h5>
          <h5 class="card-title">Email : {s.email}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> 
          
    </>
    );
  });

  return(
    <>
     <table>{st}</table>
    </>);
}

export default Display;
