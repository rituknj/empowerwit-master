import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import OurTeam from "./components/pages/OurTeam";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import BlogPost from "./components/BlogPost";
import ApplyNow from "./components/ApplyNow";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home}></Route>
          <Route exact path="/aboutus" component={About}></Route>
          <Route exact path= "/ourTeam" component={OurTeam}></Route>
          <Route exact path="/blogpost/:slug" component={BlogPost}></Route>
          <Route exact path= "/blogs" component={Blog}></Route>
          <Route exact path= "/contactus" component={Contact}></Route>
          <Route exact path= "/applynow" component={ApplyNow}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
