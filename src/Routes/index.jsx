import { Route, Switch } from "react-router-dom";
import EpisodePage from "../Pages/Character";
import HomePage from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/character/:id">
        <EpisodePage />
      </Route>
      <Route path="/my-favorites"></Route>
    </Switch>
  );
};

export default Routes;
