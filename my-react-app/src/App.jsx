import { useState } from "react";
import MovieSearch from "./MovieSearch";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello React</h1>
      <p>Your clean template is ready.</p>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <MovieSearch />
    </div>
  );
}
export default App;