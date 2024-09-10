function Facs(){
    const Facs = [
        {
            "name": "Prem",
            "rollNo" : 123,
            "branch" : "CE"
        },
        {
            "name": "Prem",
            "rollNo" : 123,
            "branch" : "CE"
        }
    ]

    const ans = Facs.map((fac)=>
        <>
            <h1>Name is { fac.name }</h1>
            <h1>Roll No is { fac.rollNo }</h1>
            <h1>Branch is { fac.branch }</h1>
        </>
    )
    return ans;
}
export default Facs;
