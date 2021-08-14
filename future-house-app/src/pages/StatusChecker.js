
function StatusChecker() {
    return (
        <div>
            <header>
                <h1>Calculate your summary </h1>
            </header>
            <body>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur. 
                </p>
                <form>
                    <label for="fname">Income after tax:</label><br/>
                    <input type="text" id="fname" value="Mike"></input><br/><br/>

                    <label for="lname">Average Expenses</label><br/>
                    <input type="text" id="lname" value="Walker"></input><br/><br/>
                    
                    <input type="submit" value="Submit"></input>
                </form>
            </body>
        </div>
    );
}
  
  export default StatusChecker;
  