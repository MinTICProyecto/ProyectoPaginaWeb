
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutLogion from "./layouts/layoutlogin";
import Layout from './layouts/layout';
import Productos from './pages/productos';
import Usuarios from './pages/usuarios';
import Ventas from './pages/ventas';

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

       <Route path={['/productos','/usuarios','/ventas']} exact>
         <Layout>
           <Switch>
             
             <Route path='/productos' exact>
               <Productos/>
             </Route>
             
             <Route path='/usuarios' exact>
               <Usuarios/>
             </Route>

             <Route path='/ventas' exact>
               <Ventas/>
             </Route>

           </Switch>
         </Layout>
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
