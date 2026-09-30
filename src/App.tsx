import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <button
          className="p-2 bg-purple-300 text-purple-800 rounded-md"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
