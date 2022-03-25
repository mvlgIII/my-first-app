import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritePage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupsPage />
      </Route>
      <Route path="/favorites">
        <FavoritePage />
      </Route>
    </div>
  );
}

export default App;
