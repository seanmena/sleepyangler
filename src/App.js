import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import TestApi from "./components/TestApi";
import Editor from "./components/Editor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="editor" element={<TestApi />} /> */}
      <Route path="editor" element={<Editor />} />
    </Routes>
  );
}

export default App;
