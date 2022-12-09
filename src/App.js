import "./App.css";
import Slide1 from "./components/slide1/Slide1";
import Slide2 from "./components/slide2/Slide2";
import Slide3 from "./components/slide3/Slide3";
import Slide4 from "./components/slide4/Slide4";
import Navbar from "./components/navbar/Navbar";
import Slide5 from "./components/slide5/Slide5";
import Slide6 from "./components/slide6/Slide6";
import Slide7 from "./components/slide7/Slide7";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Slide1 />

      <Slide2 />
      <Slide3 />

      <Slide4 />

      <Slide5 />

      <Slide6 />

      <Slide7 />
    </div>
  );
}

export default App;
