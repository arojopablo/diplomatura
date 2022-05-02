import './App.css';
import './styles/normalize.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Nosotros from "./pages/NosotrosPage";
import Contacto from "./pages/ContactoPage";
import Servicios from "./pages/Servicios";
import Home from "./pages/HomePage";
import Impresiones from "./pages/ImpresionesPage";
import Novedades from "./pages/NovedadesPage";
import Admin from "./pages/AdminPage";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="app">      
      <Router>      
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/servicios" exact component={Servicios} />
          <Route path="/impresiones" exact component={Impresiones} />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route path="/contacto" exact component={Contacto} />
          <Route path="/novedades" exact component={Novedades} />
          <Route path="/admin" exact component={Admin} />  
        </Switch>
        <Footer />
      </Router>   
           
    </div>
  );
}

export default App;
