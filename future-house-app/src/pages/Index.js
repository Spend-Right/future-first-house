// import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "../../src/index.css";
import styled from 'styled-components';

export const Grid = styled.div`
    
`;
export const Row = styled.div`
    display: flex;
`;
export const Col = styled.div`
    flex: ${(props) => props.size};
`;


function Home() {
  return (
    <Grid id="tiles">
        <div className="tile">
            <img src="" alt="people" />
            <p className="tile-header">
                Understand your financial future with home-owning metrics and feedback
            </p>
            <p className="tile-content">
                Use the tool to discern personalized realistic time frames and requirements for purchase of property
            </p>
        </div>
        <div className="tile">
            
            <img src="" alt="people" />
            <p className="tile-header">
                Plan you finance from key metrics all the way to keys in hand
            </p>
            <p className="tile-content">
                Plan your budgeting to align with customizable forecasts in order to achieve your dream home goals
            </p>
        </div>
    </Grid>
  );
}

export default Home;
