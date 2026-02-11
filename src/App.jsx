import { useState } from "react";

function App() {
  const [history, setHistory] = useState([0]);
  const [index, setIndex] = useState(0);

  const value = history[index];

  function update(newValue) {
    const newHistory = history.slice(0, index + 1);
    newHistory.push(newValue);
    setHistory(newHistory);
    setIndex(index + 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950">
      <div className="bg-white rounded-xl shadow-xl p-8 w-80 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">{value}</h1>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => update(value + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={() => update(value - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            -
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => index > 0 && setIndex(index - 1)}
            disabled={index === 0}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Undo
          </button>
          <button
            onClick={() => index < history.length - 1 && setIndex(index + 1)}
            disabled={index === history.length - 1}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Redo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
