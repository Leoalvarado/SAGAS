/*import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 
import Home from './cmps/public/Home';
import Login from './cmps/public/Login';
import Footer from './cmps/public/Footer';

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
import {StateProvider} from './utlts/Context';
import mainReducer from './utlts/store/store';
import PrivateRoute from './utlts/PrivateRoute';
import Splash from './cmps/public/Splash';
import { AnimatedSwitch } from 'react-router-transition';
import { pageTransitions as transition, mapGlideStyles as mapStyles } from './utlts/Transitions';


import Home from './cmps/public/Home';
import Login from './cmps/public/Login';
import Registro from './cmps/public/Registro';
import Menu from './cmps/private/Menu';
import NotFound from './cmps/public/NotFound';
import ListProducts from './cmps/private/ListProductos';
function App() {
  let appState = mainReducer();
  return (
    <StateProvider initialState={appState} reducer={mainReducer}>
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
          <PrivateRoute path="/productos"  component={ListProducts}/>
      
              

              <Route path="*" component={NotFound} />
          
        </AnimatedSwitch>
      </section>
    </Router>
    </div>
    </StateProvider>
  );
}

export default App;