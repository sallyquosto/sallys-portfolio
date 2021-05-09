import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Skills from "./components/Skills";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css"
// import { ChromePicker } from 'react-color';
// import Button from '@material-ui/core/Button';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Skills} path='/skills' />
        <Route component={Project} path='/project' />
      </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
