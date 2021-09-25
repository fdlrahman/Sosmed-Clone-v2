import "./App.css";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="app__body">
        <div className="app__left">
          <Stories />

          <div className="app__post">
            <Post />
          </div>
        </div>
        <div className="app__right">
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default App;
