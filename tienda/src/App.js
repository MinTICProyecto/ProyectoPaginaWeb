
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutLogion from "./layouts/layoutlogin";
import Layout from './layouts/layout';
import Productos from './pages/productos';

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

       <Route path={['/productos']} exact>
         <Layout>
           <Switch>
             <Route path='/productos' exact>
               <Productos/>
             </Route>
           </Switch>
         </Layout>
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
