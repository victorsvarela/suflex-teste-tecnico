import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
