import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./pages/Index";
import StatusChecker from "./pages/StatusChecker";
import HouseGoal from "./pages/HouseGoal";
import './App.css';

function App() {
    
    return (
        <div className="App">
            <HashRouter>
                <div>
                    <h1>Future House</h1>

                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statuschecker">Status Checker</NavLink></li>
                        <li><NavLink to="/housegoal">House Goal</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route path="/" component={Home}/>
                        <Route path="/statuschecker" component={StatusChecker}/>
                        <Route path="/housegoal">
                            <HouseGoal/> 
                        </Route>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
