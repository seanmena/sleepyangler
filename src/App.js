import { Route, Routes } from "react-router";
import "./App.css";
import Read from "./components/blogs/Read";
import Editor from "./components/Editor";
import NavBar from "./components/Navbar";
import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import { UserAuthContextProvider } from "./components/UserAuthContext";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";
import SignUp from "./components/SignUp";
import Home from "./screens/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import LogOut from "./components/LogOut";

function App() {
  return (
    <UserAuthContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/supersecretloginpage" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/read" element={<Read />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <Editor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
