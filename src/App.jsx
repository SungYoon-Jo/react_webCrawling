import axios from "axios";
import { useState } from "react";

const App = () => {
  const [Data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  axios.get(url).then((res) => {
    setData(res.data);
  });

  console.log(Data);

  return (
    <div>
      {Data.map((realdata) => {
        <div key={realdata.id}>{realdata.name}</div>;
      })}
    </div>
  );
};

export default App;
