const calcBudget = (currentSavings, income, expenses, goalYear, deposit) => {
    var today = new Date();
    futureSavings = currentSavings + (income - expenses) * (goalYear - today.getFullYear);
    return futureSavings / deposit;
}
