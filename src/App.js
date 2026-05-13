import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Chat from "./pages/Chat";
import FindMatch from "./pages/FindMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/chat" element={<Chat />} />
        <Route
  path="/find"
  element={<FindMatch />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;