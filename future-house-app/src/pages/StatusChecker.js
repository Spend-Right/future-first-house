import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function StatusChecker() {
    const [userInfo, setUserInfo] = useState({
        //this is what it will look like:
        "income_after_tax": 0,
        "average_expenses": 0,
        "house_year": 2021,
        "deposit_percentage": 0,
        "current_savings": 0,
        "savings_age": 0
    });
    const [data, setData] = useState([
        {
            name: "",
            current_savings: 0
        },
        {
            name: "current savings",
            current_savings: 1
        },
        // {
        //     name: 'Page A',
        //     uv: 4000,
        //     pv: 2400,
        //     amt: 2400,
        //   },
        //   {
        //     name: 'Page B',
        //     uv: 3000,
        //     pv: 1398,
        //     amt: 2210,
        //   },
    ]);

    const inputsHandler = (e) =>{
        setUserInfo( {[e.target.name]: e.target.value} );
        console.log("userinfo is: ", userInfo);

        setData([
            {
                name: "",
                current_savings: 0
            },
            {
                name: "current savings",
                current_savings: userInfo["current_savings"]
            },
        ])

    }

    const submitButton = () =>{
        alert(userInfo.income_after_tax);
    }
    
    const renderLineChart = (
        <div>
            {/* based on https://recharts.org/en-US/examples */}
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* extra stuff */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    {/* draw lines */}
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="current_savings" stroke="#DC143C" />
                </LineChart>
        </div>
    );

    return (
        <div>
            <header>
                <h1>Check your current status</h1>
            </header>
            <body>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur. 
                </p>
                <form>
                    <p>Please enter your details as accurately as possible. </p>

                    <label for="incomeaftertax">Income after tax:</label><br/>
                    <input type="number" id="incomeaftertax" placeholder="10000" name="income_after_tax" onChange={inputsHandler}></input><br/><br/>

                    <label for="averageexpenses">Average Expenses:</label><br/>
                    <input type="number" id="averageexpenses" placeholder="9000" name="average_expenses" onChange={inputsHandler}></input><br/><br/>

                    <label for="houseyear">When do you want to buy a house?:</label><br/>
                    <input type="number" id="houseyear" placeholder="2045" min="2021" max="2050" name="house_year" onChange={inputsHandler}></input><br/><br/>

                    <label for="depositpercentage">Deposit percentage:</label><br/>
                    <input type="number" id="depositpercentage" placeholder="10" min="0.001" max="100" name="deposit_percentage" onChange={inputsHandler}></input><br/><br/>

                    <label for="currentsavings">Current Savings:</label><br/>
                    <input type="number" id="currentsavings" placeholder="1000" name="current_savings" onChange={inputsHandler}></input><br/><br/>
                    
                    <label for="savingsage">How long have you been saving for (years)?:</label><br/>
                    <input type="number" id="savingsage" placeholder="5" name="savings_age" onChange={inputsHandler}></input><br/><br/>
                    
                    <button onClick={submitButton}>Submit Now</button>
                </form>

                {renderLineChart}
            </body>
        </div>
    );
}
  
  export default StatusChecker;
  