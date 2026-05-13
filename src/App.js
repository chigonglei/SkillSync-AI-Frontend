import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import SignIn from "./pages/SignIn";

import SignUp from "./pages/SignUp";

import Find from "./pages/Find";

import Recommendations from "./pages/Recommendations";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/signin"
          element={<SignIn />}
        />

        <Route
          path="/signup"
          element={<SignUp />}
        />

        <Route
          path="/find"
          element={<Find />}
        />

        <Route
          path="/recommendations"
          element={<Recommendations />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;