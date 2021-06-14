import "./styles.css";
import InputBox from "./InputBox";
import { useRef } from "react";
export default function App() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value = "5000";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h1>useRef and forwardRef</h1>
      <InputBox ref={inputRef} />
      <br />
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
}
