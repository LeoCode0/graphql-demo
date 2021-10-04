import { Carousel } from "./components/Carousel";
import { LaunchesDetailed } from "./components/LaunchesDetailed";

function App() {
  return (
    <div className="App">
      <h1 className="title">SpaceX launches</h1>
      <Carousel />
      <LaunchesDetailed />
    </div>
  );
}

export default App;
