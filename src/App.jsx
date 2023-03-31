import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);

    // noUseState = noUseState + 1;
    // noUseState += 1;
    // noUseState++;
  };
  const onClickSubtract = () => {
    if (count <= 0) {
      alert("0보다 못작는다!");
      return;
    }
    setCount(count - 1);
  };
  // setCount((prev)) => {
  //   return prev -1;
  // });

  return (
    <div className="bg-red-200 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="bg-blue-300 w-12 h-12 rounded-full mt-3"
        onClick={onClickSubtract}
      >
        -
      </button>
    </div>
  );
}

export default App;
