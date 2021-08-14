const calcBudget = (currentSavings, income, expenses, goalYear, deposit) => {
    var today = new Date();
    var futureSavings = Number(currentSavings) + (Number(income) - Number(expenses)) * (Number(goalYear) - Number(today.getFullYear()));
    return futureSavings / Number(deposit);
}

const ShowBuget = ({inputField}) => {
    <text>
        {calcBudget(inputField.currentSavings, inputField.income, inputField.expenses, inputField.year, inputField.deposit)}
    </text>
}


export {calcBudget, ShowBuget};