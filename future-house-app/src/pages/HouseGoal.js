import React, {useState} from 'react';
import calcBudget from '../calculator';

function HouseGoal() {

    var inputs = {
        currentSavings:0,
        income: 0, 
        expenses: 0, 
        year: 0,
        deposit: 0,
        region: '',
        bedrooms: 0
    };

    const [inputField , setInputField] = useState(
        {
            currentSavings:0,
            income: 0, 
            expenses: 0, 
            year: 0,
            deposit: 0,
            region: '',
            bedrooms: 0
        }
    );

    const inputsHandler = (e) =>{
        console.log(e.target.name, e.target.value)
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        console.log(inputField.currentSavings, inputField.income, inputField.expenses, inputField.year, inputField.deposit);
        alert(calcBudget(inputField.currentSavings, inputField.income, inputField.expenses, inputField.year, inputField.deposit))
    }

    return (
        <div>
            <header>
                <h1>House Goal </h1>
            </header>
            <body>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur. 
                </p>
                <form onSubmit={submitButton}> 
                    <label for="currentSavings">Current Savings:</label><br/>
                    <input type="number" name="currentSavings" onChange={inputsHandler} value={inputField.currentSavings}></input><br/><br/>                  

                    <label for="income">Income after tax:</label><br/>
                    <input type="number" name="income" onChange={inputsHandler} value={inputField.income}></input><br/><br/>

                    <label for="expenses">Average Expenses</label><br/>
                    <input type="number" name="expenses" onChange={inputsHandler} value={inputField.expenses}></input><br/><br/>

                    <label for="year">Year</label><br/>
                    <input type="number" name="year" onChange={inputsHandler} value={inputField.year}></input><br/><br/>

                    <label for="deposit">Deposit %</label><br/>
                    <input type="number" name="deposit" onChange={inputsHandler} value={inputField.deposit}></input><br/><br/>

                    <label for="region">Region:</label><br/>
                    <input type="text" name="region" onChange={inputsHandler} value={inputField.region}></input><br/><br/>

                    <label for="bedrooms">Badrooms</label><br/>
                    <input type="number" name="bedrooms" onChange={inputsHandler} value={inputField.bedrooms}></input><br/><br/>

                    <input type="submit" value="Submit"></input>
                </form>
            </body>
        </div>
    );
}
  
  export default HouseGoal;
  