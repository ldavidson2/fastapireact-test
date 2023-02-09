import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import { RequireToken } from "./Auth";
import { Amplify, DataStore, Predicates } from "aws-amplify";

async function onQuery() {
  const posts = await DataStore.query(Test);

  console.log(posts);
}

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="button" value="NEW" />
          <input type="button" value="DELETE ALL" />
          <input type="button" value="QUERY rating > 4" onClick={onQuery} />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
