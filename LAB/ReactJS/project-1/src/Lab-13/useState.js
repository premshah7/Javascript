import { useEffect , useState } from "react";

function State(){
    const [data,setData] = useState([]);
    const apiUrl = "https://667a6c9dbd627f0dcc8eda00.mockapi.io/products"     
    return(
    useEffect( 
       
         fetch(apiUrl)
      .then(res=>res.json())
      .then(res=>setData(res))
    )  
    );
}

export default State;