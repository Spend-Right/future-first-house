
function HouseGoal({handleSubmit}) {

    state = {
        income: '', 
        expenses: '', 
        currentSavings:'',
        deposit: '',
        region: '',
        bedrooms: '',
    }

    const [inputField , setInputField] = useState(state)

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    this.useState.

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
                <form onSubmit={handleSubmit}>                    

                    <label for="income">Income after tax:</label><br/>
                    <input type="text" id="income" onChange={inputsHandler} value={inputField.income}></input><br/><br/>

                    <label for="expenses">Average Expenses</label><br/>
                    <input type="text" id="expenses" onChange={inputsHandler} value={inputField.expenses}></input><br/><br/>

                    <label for="currentSavings">Current Savings:</label><br/>
                    <input type="text" id="currentSavings" onChange={inputsHandler} value={inputField.currentSavings}></input><br/><br/>

                    <label for="deposit">Deposit %</label><br/>
                    <input type="text" id="deposit" onChange={inputsHandler} value={inputField.deposit}></input><br/><br/>

                    <label for="region">Region:</label><br/>
                    <input type="text" id="region" onChange={inputsHandler} value={inputField.region}></input><br/><br/>

                    <label for="bedrooms">Badrooms</label><br/>
                    <input type="text" id="bedrooms" onChange={inputsHandler} value={inputField.bedrooms}></input><br/><br/>

                    <input type="submit" value="Submit"></input>
                </form>
            </body>
        </div>
    );
}
  
  export default HouseGoal;
  