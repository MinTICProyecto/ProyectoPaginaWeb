import Navbar from "../components/Navbar";
import '../styles/layout.css'


const Layout = ({children}) =>{
  return(
     <div className="contenedorP">
         <Navbar/>
         <main>
             {children}
         </main>
     </div>
  
  )
}

export default Layout;