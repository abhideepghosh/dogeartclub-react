import "./App.css";
import Slide1 from "./components/slide1/Slide1";
import Slide2 from "./components/slide2/Slide2";
import Slide3 from "./components/slide3/Slide3";
import Slide4 from "./components/slide4/Slide4";
import Navbar from "./components/navbar/Navbar";
import Slide5 from "./components/slide5/Slide5";
import Slide6 from "./components/slide6/Slide6";
import Slide7 from "./components/slide7/Slide7";
import Indicator from "./components/Indicator/Indicator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Indicator />
      <section id="section1">
        <Slide1 />
      </section>
      <section id="section2">
        <Slide2 />
      </section>
      <section id="section3">
        <Slide3 />
      </section>
      <section id="section4">
        <Slide4 />
      </section>
      <section id="section5">
        <Slide5 />
      </section>
      <section id="section6">
        <Slide6 />
      </section>
      <section id="section7">
        <Slide7 />
      </section>
    </div>
  );
}

export default App;
