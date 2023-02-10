import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import { RequireToken } from "./Auth";
import Message from "./components/message";

function App() {
  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;
