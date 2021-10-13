import "./App.css";
import Header from "./Header.js";
import Poster from "./Poster.js";
import Content from "./Content";
import Comunity from "./Comunity";
import Aboutus from "./Aboutus";
import Bottom from "./Bottom";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/introduction">
            <Introduction/>
          </Route>
          <Route path="/production">
            <Production />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return(
    <div>
      <Header/>
      <Poster/>
      <hr className="divided" />
      <Content />

      <Comunity />

      <Aboutus/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

function Introduction() {
  return(
    <div>
      <Header/>
      <h1>Introduction</h1>
      <Bottom/>
      <Footer/>
    </div>
  );
}

function Production() {
  return(
    <div>
      <Header/>
      <h1>Production</h1>

      <Bottom/>
      <Footer/>
    </div>
  );
}

function News() {
  return(
    <div>
      <Header/>
      <h1>News</h1>

      <Bottom/>
      <Footer/>
    </div>
  );
}

function Contact() {
  return(
    <div>
      <Header/>
      <h1>Contact</h1>

      <Bottom/>
      <Footer/>
    </div>
  );
}
