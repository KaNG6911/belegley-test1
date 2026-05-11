import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invitation3D from "./pages/Invitation3D";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<Invitation3D />} />
      </Routes>
    </BrowserRouter>
  );
}