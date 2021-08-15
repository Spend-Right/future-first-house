// import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "../../src/index.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Future-First-Home </h1> */}
        <p>
          Encouraging young adults to start saving for their first home wih
          guidance
        </p>
        Learn to manage your budgets and finantial means, and have control of
        your future
      </header>

      <body>
        <Button style={{ background: "skyblue" }} className="font-link">
          <NavLink to="/housegoal">See your house goal</NavLink>
        </Button>
      </body>
    </div>
  );
}

export default Home;
