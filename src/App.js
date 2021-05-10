import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";
// import Project from "./components/Project";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Home />
      {/* <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Contact} path='/contact' />
        <Route component={Skills} path='/skills' />
        <Route component={Project} path='/project' />
      </Switch> */}
    <Footer />
    </BrowserRouter>
  )
}

export default App;
