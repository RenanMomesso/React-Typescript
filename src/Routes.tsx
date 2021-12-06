import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./globalStyle/global";
import theme from "./globalStyle/theme";
import Home from "./pages/Home";
import Serie from "./pages/Serie";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/episode/:number/:season"} exact component={Serie} />
          <GlobalStyles theme={theme} />
        </Switch>
    </Router>
  );
};
export default Routes;
