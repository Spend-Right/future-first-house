const calcBudget = (currentSavings, income, expenses, goalYear, deposit) => {
    console.log(currentSavings, income, expenses, goalYear, deposit);
    var today = new Date();
    var futureSavings = currentSavings + (income - expenses) * (goalYear - today.getFullYear);
    return futureSavings / deposit;
}
export default calcBudget;