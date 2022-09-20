import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import {GlobalStyles} from "./components/styles/Global.module";


function App(){
  
  return (
    <>

      <Navbar bg="#272727"/>

      <GlobalStyles/>

      
      <Home/>
    </>
  )

}

export default App;