/*import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 
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
*/
import './App.css';
import './utlts/Transitions.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { AnimatedSwitch } from 'react-router-transition';
import { pageTransitions as transition, mapGlideStyles as mapStyles } from './utlts/Transitions';


import Home from './cmps/public/Home';
import Login from './cmps/public/Login';
import Registro from './cmps/public/Registro';
import Menu from './cmps/private/Menu';

function App() {
  return (
    <div className="App">
    <Router>
      <section>
        <AnimatedSwitch
          {...transition}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Registro} />

          <Route path="/menu" exact component={Menu}/>
        </AnimatedSwitch>
      </section>
    </Router>
    </div>
  );
}

export default App;