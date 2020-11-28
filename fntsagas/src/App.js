import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './cmps/public/Home';
import Login from './cmps/public/Login';


function App() {
  return (
        <div className="App">
         <Router>
          <switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
          </switch>
         </Router>
        </div>
      );
}

export default App;
