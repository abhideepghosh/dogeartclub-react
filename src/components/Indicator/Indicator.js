import "./Indicator.css";

const Indicator = () => {
  return (
    <div className="sidebar">
      <div className="sections-list">
        <a href="#section1" className="link">
          <p class="dot"></p>
          <p className="label">Brooklyn</p>
        </a>
      </div>
      <div className="sections-list">
        <a href="#section2" className="link">
          <p class="dot"></p>
          <p className="label">Memes</p>
        </a>
      </div>
      <div className="sections-list">
        <a href="#section3" className="link">
          <p class="dot"></p>
          <p className="label">Art</p>
        </a>
      </div>
      <div className="sections-list">
        <a href="#section4" className="link">
          <p class="dot"></p>
          <p className="label">Caffe</p>
        </a>
      </div>
      <div className="sections-list">
        <a href="#section5" className="link">
          <p class="dot"></p>
          <p className="label">Gym</p>
        </a>
      </div>
      <div className="sections-list">
        <a href="#section6" className="link">
          <p class="dot"></p>
          <p className="label">Money</p>
        </a>
      </div>
      <div className="sections-list">
        <a href="#section7" className="link">
          <p class="dot"></p>
          <p className="label">Moon</p>
        </a>
      </div>
    </div>
  );
};

export default Indicator;
