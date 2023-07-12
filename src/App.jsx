import { useRef, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:3001/api/items";

function App() {
  const inputRef = useRef();
  const [dataList, setDataList] = useState([]);

  return (
    <div className="main-content">
      <input ref={inputRef} type="text" />
      <button
        onClick={async () => {
          let text = inputRef.current.value;

          let response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              value: text,
            }),
          });
          let responseJson = await response.json();
          setDataList(responseJson.list);
        }}
      >
        Save
      </button>

      <div>
        {dataList.map((el) => (
          <p>{el.content}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
