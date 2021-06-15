
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';

import { Container } from 'semantic-ui-react';
import { routes } from './Routing';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div  className="App">
      <Navi></Navi>
      

     
      <Dashboard>
        
      </Dashboard>
   
      </div>
    
  );
}

export default App;
