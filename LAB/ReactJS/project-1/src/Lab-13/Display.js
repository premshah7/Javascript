import { useState } from "react";

function Display() {
  const [stu, setStu] = useState([]);
  const [data, setData] = useState({ Name: "", Sem: "" });
  const [index, setIndex] = useState();

  const Dstu = stu.map((st) => {
    return (
      <>
        <tr>
          <td>{st.Name}</td>
          <td>{st.Sem}</td>
          <button>Edit</button>
          <button>Delete</button>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1>Name : </h1>
      <input
        type="text"
        value={data.Name}
        onChange={(e) => {
          setData({ ...data, Name: e.target.value });
        }}
      />

      <h1>Sem : </h1>
      <input
        type="text"
        value={data.Sem}
        onChange={(e) => {
          setData({ ...data, Sem: e.target.value });
        }}
      />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          setStu([...stu, data]);
          setData({ Name: "", Sem: "" });
        }}
      >
        Add
      </button>
      {Dstu}
    </>
  );
}
export default Display;
