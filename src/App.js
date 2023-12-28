import "./App.css";
import NavBar from "./components/NavBar";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
