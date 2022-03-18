import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
