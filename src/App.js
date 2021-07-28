import './App.css';
import Homescreen from './screens/Homescreen';
import PetScreen from './screens/PetScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecentScreen from './screens/RecentScreen';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/home" component={Homescreen}/>
          <Route exact path="/new" component={RecentScreen}/>
          <Route exact path="/view" component={PetScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
