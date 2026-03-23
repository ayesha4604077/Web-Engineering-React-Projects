import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;