import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

      </div>
    </div>
  );
}

export default App;
// the <Navbar /> is a self closing tag. this is compared to regular closing tag.