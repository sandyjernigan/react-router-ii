import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Trinkets from "./components/Trinkets";
import Trinket from "./components/Trinket";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Jason's Trinkets</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/trinkets">Trinkets</Link>
          </div>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/trinkets" exact component={Trinkets} />
        <Route path="/trinket/:id" exact component={Trinket} />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
