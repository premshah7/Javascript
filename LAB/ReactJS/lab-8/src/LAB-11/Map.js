function Maps(){
    const name = ["Prem","Shah","Darshan","University"];
    const ans = name.map((n)=>
      <h1>Hello World from { n }</h1>
    )
    return(ans);
  }

export default Maps;