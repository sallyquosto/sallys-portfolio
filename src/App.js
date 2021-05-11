import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
// import Project from "./components/Project";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <Skills />
    <Footer />
    </>
  );
}

export default App;
