import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  useEffect(() => {
    if (count > 5) {
      setName("Bilal");
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>Hello {name}</h1>
      <p className="text-2xl font-bold">Counter: {count}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
