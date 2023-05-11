import "./App.css";
import axios from "../node_modules/axios/index";
import { useState } from "react";

// const onClick = () => {
//   const [data, setData] = useState();
//   Axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//     setData(response.data);
//   });
// };
function App() {
  const [data, setData] = useState();
  const onClick = async () => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => {
    //     setData(response.data);
    //   });
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    setData(response.data);
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
