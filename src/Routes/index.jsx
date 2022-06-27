import { Route, Switch } from "react-router-dom";
import EpisodePage from "../Pages/Character";
import HomePage from "../Pages/Home";
import MyFavoritePage from "../Pages/MyFavorites";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/character/:id">
        <EpisodePage />
      </Route>
      <Route path="/my-favorites">
        <MyFavoritePage />
      </Route>
    </Switch>
  );
};

export default Routes;
