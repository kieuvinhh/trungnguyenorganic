import "./App.css";
import Header from "./Header.js";
import Poster from "./Poster.js";
import Content from "./Content";
import Comunity from "./Comunity";
import Aboutus from "./Aboutus";
import Bottom from "./Bottom";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Header />
      <Poster />

      <hr className="divided" />
      <Content />

      <Comunity />

      <Aboutus/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
