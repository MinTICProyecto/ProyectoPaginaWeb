import Productos from "../pages/productos"


const Layout = ({children}) =>{
  return(
     <div>

         <main>
             {children}
         </main>
     </div>
  
  )
}

export default Layout;