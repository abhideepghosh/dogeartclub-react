import "./App.css";
import Slide1 from "./components/slide1/Slide1";
import Slide2 from "./components/slide2/Slide2";
import Slide3 from "./components/slide3/Slide3";
// import Slide4 from "./components/slide4/Slide4";
import Navbar from "./components/navbar/Navbar";
import Slide5 from "./components/slide5/Slide5";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      {/* <Slide4 /> */}
      <Slide5 />
    </div>
  );
}

export default App;
