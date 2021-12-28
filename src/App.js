import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/exports";
import { CoinList, Portfolio } from "./pages/exports";

const App = () => (
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CoinList} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/*  <Route exact path="/:coinId" component={Coin} /> */}
      </Switch>
    </Router>
  </>
);

export default App;
