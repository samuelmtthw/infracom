import "./App.css";
import { Route, Routes } from "react-router";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Statistics from "./pages/Statistics";
import AddPage from "./pages/AddPage";
import Details from "./pages/Details";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/new-blog" element={<AddPage />} />
        <Route path="/blogs/:id" element={<Details />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
