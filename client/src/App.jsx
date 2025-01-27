// Imports
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage bgCol={"rgba(255, 255, 255, 1)"} />}
          />
          <Route
            path="/sign-in"
            element={<SignInPage bgCol={"rgba(18, 0, 43, 1)"} />}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
