import { BrowserRouter as R , Link, Route, Switch } from "react-router-dom";
import './App.scss';
import HomePage from "./Pages/Home/HomePage";
import ProductPage from './Pages/ProductPage/ProductPage';

function App() {
  return (
  <div>
    <R>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Pagina inicial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Ofertas do dia</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product" component={ProductPage} />
      </Switch>
    </R>
  </div>
  );
}

export default App;
