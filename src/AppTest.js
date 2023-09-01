import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/1")
      .then((reponse) => {
        setData(reponse.data);
      });
  };
  return (
    <div>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <div>
          <br />
          번호 : {data.postId} <br />
          Email : {data.email} <br />
          Body : {data.body} <br />
        </div>
      )}
    </div>
  );
};

export default App;
