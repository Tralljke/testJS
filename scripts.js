
let money = prompt('Ваш бюджет на месяц?','1000');
let time =  prompt('Введите дату в формате YYYY-MM-DD','2020-11-20');

let appData = {
    badget: money,
    timeData: time,
    expenses: { ans1:"", ans2: ""},
    optionalExpenses: '',
    income:[],
    savings: false
};

appData.expenses.ans1 = prompt('Введите обязательную статью расходов в этом месяце','Машина');
appData.expenses.ans2 =  prompt('Во сколько все обойдется?',+'10000');

alert("Бюджет на один день" + (appData.badget / 30));