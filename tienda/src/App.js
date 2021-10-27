
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutLogion from "./layouts/layoutlogin";
import Inicio from "./pages/inicio";

function App() {
  return (
    <Router>
      <Switch>
       <Route path='/' exact>
         <LayoutLogion>
           <Route path='/login'>
           </Route>
         </LayoutLogion>
       </Route>






      </Switch>
    </Router>
  );
}

export default App;
