import { useRoutes, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/app-navbar/app-navbar";
import NotFound from "./components/404/404";
import Home from "./pages/home";
import About from './pages/about';
import Projects from "./pages/projects";  
import MediaScroll from "./pages/media-scroll";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/media" element={<MediaScroll />}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;
