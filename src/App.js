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
import Navbar from './components/Navbar';
import AddForm from './components/AddForm';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/home" component={Homescreen}/>
          <Route exact path="/new" component={AddForm}/>
          <Route exact path="/view" component={PetScreen}/>
        </Switch>
    </Router>
  );
}

export default App;
