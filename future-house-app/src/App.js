import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/Index";
import StatusChecker from "./pages/StatusChecker";
import HouseGoal from "./pages/HouseGoal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <div>

            {/* <ul className="header">
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/statuschecker">Status Checker</NavLink>
                </li>
                <li>
                <NavLink to="/housegoal">House Goal</NavLink>
                </li>
            </ul> */}

                <div id="navigation">
                    <img src="" alt="anz logo"/>
                    <NavLink to="/">Welcome</NavLink>
                    <NavLink to="/housegoal">House Goal</NavLink>
                </div>
                <div id="content">
                    <Route path="/" component={Home} />
                    <Route path="/statuschecker" component={StatusChecker} />
                    <Route path="/housegoal">
                        <HouseGoal />
                    </Route>
                </div>
            </div>
        </HashRouter>
    </div>
  );
}

export default App;
