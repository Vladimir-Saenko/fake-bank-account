import { useState } from "react";

export default function HowMuchForm({ dispatch }) {
  const [howValue, setHowValue] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ordered", payload: howValue });
  }
  return (
    <form className="how-much" onSubmit={handleSubmit}>
      <input
        type="text"
        value={howValue}
        placeholder="Введите сумму"
        onChange={(e) => setHowValue(Number(e.target.value))}
      />
      <button>ОК</button>
    </form>
  );
}
