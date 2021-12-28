import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinList, Portfolio } from "./pages/exports";

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={CoinList} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/*  <Route exact path="/:coinId" component={Coin} /> */}
      </Switch>
    </Router>
  </>
);

export default App;
