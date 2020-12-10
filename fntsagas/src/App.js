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
import Menup from './cmps/private/Menup';
import lista from './cmps/private/lista';
import Promociones from './cmps/private/promociones';
import NotFound from './cmps/public/NotFound';
import ListProducts from './cmps/private/ListProductos';
//MENUS
import Flores from './cmps/private/flores';
import Eventos from './cmps/private/eventos';
import Cumple from './cmps/private/cumple';
import Fiestas from './cmps/private/fiestas';
function App() {
  let appState = mainReducer();
  return (
    <StateProvider initialState={appState} reducer={mainReducer}>
    <div className="App">
    <Router>
      <Splash>
        <AnimatedSwitch
          {...transition}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Registro} />

            <PrivateRoute path="/Menup"   component={Menup}/>
            <PrivateRoute path="/productos"  component={ListProducts}/>
            <PrivateRoute path="/lista"  component={lista}/>
            <PrivateRoute path="/promo"  component={Promociones}/>

            <PrivateRoute path="/flores"  component={Flores}/>
            <PrivateRoute path="/cumple"  component={Cumple}/>
            <PrivateRoute path="/eventos"  component={Eventos}/>
            <PrivateRoute path="/fiestas"  component={Fiestas}/>
              

              <Route path="*" component={NotFound} />
          
        </AnimatedSwitch>
      </Splash>
    </Router>
    </div>
    </StateProvider>
  );
}

export default App;