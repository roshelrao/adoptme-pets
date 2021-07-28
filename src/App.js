import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import RecentScreen from './screens/RecentScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <RecentScreen/>
    </div>
  );
}

export default App;
