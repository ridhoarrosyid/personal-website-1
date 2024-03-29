import GetInTouch from "./component/getInTouch";
import Hello from "./component/hello";
import HireMe from "./component/hireMe";
import LatestPorject from "./component/latestProject";
import Navbar from "./component/navbar";
import Offer from "./component/offerSection";
import Stat from "./component/stat";
import Testimoni from "./component/testimoni";
import Tool from "./component/tool";

export default function App() {
  return (
    <div className="app-div">
      <div className="">
        <header className="app-header  overflow-hidden container mx-auto px-16">
          <Navbar />
          <Hello />
        </header>
        <main>
          <Offer />
          <Stat />
          <LatestPorject />
          <HireMe />
          <Testimoni />
          <Tool />
        </main>
        <footer>
          <GetInTouch />
        </footer>
      </div>
    </div>
  );
}
