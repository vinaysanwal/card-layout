import "./App.css";
import user from "./user.jpg";
import comment from "./comments.png";
import clock from "./clock.png";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="headContainer">
          <div className="insideBox">
            <p>Nature</p>
          </div>
        </div>
        <div className="middleContainer">
          <h2>
            <b>Mountains</b>
          </h2>
          <div>
            <span>
              <img src={user} className="imageStyle" alt="user" />
            </span>
            <span className="textStyle">By Suzan Hill</span>
          </div>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book
          </p>
          <div>
            <span>
              <img src={clock} className="imageStyle" alt="clock" />
            </span>
            <span className="textStyle">2 days ago</span>
            <span>
              <img src={comment} className="imageStyle" alt="comment" />
            </span>
            <span className="textStyle">13 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
