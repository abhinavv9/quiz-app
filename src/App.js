import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import End from './Components/End/End';
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/quiz"
            element={
              <div>
                <Navbar  route="quiz"/>
                <Layout />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/end"
            element={
              <div>
                <Navbar />
                <End />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
