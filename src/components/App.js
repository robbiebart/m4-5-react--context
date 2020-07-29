import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

function App(props) {
  //const [cookies, setCookies] = usePersistedState(0, "totalCookies");
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
          {/* <Home cookies={Number(cookies)} setCookies1={setCookies} /> */}
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
