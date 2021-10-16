import "./App.css";
import Header from "./components/header/Header.js";
import Poster from "./components/poster/Poster.js";
import Content from "./components/content/Content";
import Comunity from "./components/comunity/Comunity";
import Bottom from "./components/bottom/Bottom";
import Footer from "./components/footer/Footer";
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
            <Home />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/introduction">
            <Home/>
          </Route>
          <Route path="/production">
            <Home />
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

      <Bottom/>
      <Footer/>
    </div>
  );
}
