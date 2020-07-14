import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// scss
import "assets/scss/style.scss";

// Component
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage}></Route>
      <Route path="/example" component={Example} />
    </Router>
  );
}

export default App;
