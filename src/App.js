import "./styles.css";
import { CountContext } from "./context";
import Counter from "./counter";
export default function App() {
  return (
    <div className="App">
      <CountContext>
        <Counter />
      </CountContext>
    </div>
  );
}
