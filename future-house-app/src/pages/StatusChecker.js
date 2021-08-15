import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function StatusChecker() {
    const [userInfo, setUserInfo] = useState({
        currentSavings:20000,
        income: 60000, 
        expenses: 40000, 
        year: 2026,
        deposit: 10,
        savingsAge: 5
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
        // console.log(e.target);
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
        userInfo[e.target.name] = e.target.value;
        console.log("userinfo is: ", userInfo);
        setData([
            {
                name: "",
                current_savings: 0
            },
            {
                name: "current savings",
                current_savings: userInfo["currentSavings"]
            },
        ])

    }

    const submitButton = () =>{
        alert(userInfo.income_after_tax);
    }
    
    return (
        <div>
            <header>
                <h1>Check your current status</h1>
            </header>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur. 
                </p>
                <form>
                    <p>Please enter your details as accurately as possible. </p>

                    <label for="incomeaftertax">Income after tax:</label><br/>
                    <input type="number" id="incomeaftertax" placeholder="10000" name="income" onChange={inputsHandler} value={userInfo.income}></input><br/><br/> {/* based on https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react */}

                    <label for="averageexpenses">Average Expenses:</label><br/>
                    <input type="number" id="averageexpenses" placeholder="9000" name="expenses" onChange={inputsHandler} value={userInfo.expenses}></input><br/><br/>

                    <label for="houseyear">When do you want to buy a house?:</label><br/>
                    <input type="number" id="houseyear" placeholder="2045" min="2021" max="2050" name="year" onChange={inputsHandler} value={userInfo.year}></input><br/><br/>

                    <label for="depositpercentage">Deposit percentage:</label><br/>
                    <input type="number" id="depositpercentage" placeholder="10" max="100" step="1" name="deposit" onChange={inputsHandler} value={userInfo.deposit}></input><br/><br/>

                    <label for="currentsavings">Current Savings:</label><br/>
                    <input type="number" id="currentsavings" placeholder="1000" name="currentSavings" onChange={inputsHandler} value={userInfo.currentSavings}></input><br/><br/>
                    
                    <label for="savingsage">How long have you been saving for (years)?:</label><br/>
                    <input type="number" id="savingsage" placeholder="5" name="savingsAge" onChange={inputsHandler} value={userInfo.savingsAge}></input><br/><br/>
                    
                    <button onClick={submitButton}>Submit Now</button>
                </form>

                {/* {renderLineChart} based on https://recharts.org/en-US/examples */}
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
                    <Line type="monotone" dataKey="current_savings" stroke="#DC143C" />
                </LineChart>
            </div>
        </div>
    );
}
  
  export default StatusChecker;
  