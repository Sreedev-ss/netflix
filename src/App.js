import './App.css';
import { action, originals, trending, horror, documentaries, romance, crime, fantasy, sci_fi, adventure, animation, mystery, war } from './constants/url'
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={crime} title="Crime" isSmall />
      <RowPost url={fantasy} title='Fantasy' isSmall />
      <RowPost url={sci_fi} title='Sci-fi' isSmall />
      <RowPost url={adventure} title='Adventure' isSmall />
      <RowPost url={animation} title='Animation' isSmall />
      <RowPost url={mystery} title='Mystery' isSmall />
      <RowPost url={war} title='War' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
