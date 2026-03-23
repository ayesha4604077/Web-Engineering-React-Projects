import { useState } from "react";

const questions = [
  { q: "2+2?", a: "4" },
  { q: "3+3?", a: "6" },
  { q: "5+5?", a: "10" },
  { q: "10+1?", a: "11" },
  { q: "7+2?", a: "9" },
];

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const next = () => {
    if (index < questions.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl">{questions[index].q}</h2>
      <h2 className="text-xl">{questions[index].a}</h2>

      <button
        className="bg-green-500 text-white px-3 m-2"
        onClick={() => {
          setScore(index===questions.length-1 ? 0 : score+1);
          setIndex(index===questions.length-1 ? 0 : index+1);}
        }
      >
        Correct
      </button>

      <button
        className="bg-red-500 text-white px-3 m-2"
        onClick={() => {
          setScore(index===questions.length-1 ? 0 : score);
          setIndex(index===questions.length-1 ? 0 : index+1)}}
      >
        Wrong
      </button>

      <div>
        <button className="bg-gray-400 px-3 m-2" onClick={prev}>
          Prev
        </button>
        <button className="bg-blue-500 text-white px-3 m-2" onClick={next}>
          Next
        </button>
      </div>

      <p className="mt-4">Score: {score}</p>
    </div>
  );
}

export default App;