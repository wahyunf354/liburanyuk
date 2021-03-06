import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// scss
import 'assets/scss/style.scss';

// Component
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Example from 'pages/Example';
import Checkout from 'pages/Checkout';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage}></Route>
      <Route path="/properties/:id" exact component={DetailsPage}></Route>
      <Route path="/example" exact component={Example} />
      <Route path="/checkout" exact component={Checkout} />
      <ToastContainer />
    </Router>
  );
}

export default App;
