import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AuthRoute from "./routes/AuthRoute";

import { store } from "./store/store";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<AuthRoute />}>
              <Route
                path="/"
                element={<HomePage bgCol={"rgba(255, 255, 255, 1)"} />}
              />
              <Route path="/" element={<PublicRoute />}>
                <Route
                  path="/login"
                  element={<SignInPage bgCol={"rgba(18, 0, 43, 1)"} />}
                />
              </Route>
              <Route path="/" element={<PrivateRoute />}>
                <Route
                  path="/profile"
                  element={<UserPage bgCol={"rgba(18, 0, 43, 1)"} />}
                />
              </Route>
            </Route>
          </Routes>
        </Router>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
