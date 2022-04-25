import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState();
  return (
    <div>
      <h2>0</h2>
      <button>Add</button>
    </div>
  );
}
