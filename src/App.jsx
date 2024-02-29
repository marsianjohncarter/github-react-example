import { useRoutes, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/app-navbar/app-navbar";
import NotFound from "./components/404/404";
import Home from "./pages/home";
import About from './pages/about';
import Projects from "./pages/projects";


function App() {

  return (
    <>
    <AppBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;
