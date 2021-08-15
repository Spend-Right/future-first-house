import React, {useState} from 'react';
import {calcBudget, ShowBuget} from '../calculator';
import Api from './Results';

function HouseGoal() {

    const [inputField , setInputField] = useState(
        {
            currentSavings:20000,
            income: 60000, 
            expenses: 40000, 
            year: 2026,
            deposit: 0.10,
            region: '',
            bedrooms: 2
        }
    );

    const inputsHandler = (e) =>{
        setInputField( {...inputField, [e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        var budget = calcBudget(inputField.currentSavings, inputField.income, inputField.expenses, inputField.year, inputField.deposit)
        alert(budget)
        return budget

    }

    return (
        <div>
            <header>
                <h1>House Goal </h1>
            </header>
            <body>
                <h2>Forecast better budgeting, with early goals dreams became reality!</h2>

                <div class="userInput">
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
                    </form>
                </div>

                <Api budget={
                    calcBudget(inputField.currentSavings, inputField.income, inputField.expenses, inputField.year, inputField.deposit)} />
                
            </body>
        </div>
    );
}
  
  export default HouseGoal;
  