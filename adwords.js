var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var hookURL = 'https://hook.integromat.com/ib1s5qxcwqco7n67y8cc6assjln5qmc9/?' + 'id_ga_acc=' + 'Glazolik' + '&ga_budget=' + remainingBudget ;

xhr.open('GET', hookURL, false);

xhr.send();


function main() {

    //Настройки скрипта
    var days = 3; // Минимальное число дней для отправки уведомления
    var alertLimit = 15; // Минимальный остаток для отправки уведомления
    var email = ['fwd1v6w71q9coxwgocsw04c0ogcc@diple.bitrix24.kz', 'fwd7aluiqaw7qsc8s4ok4csog0cw@diple.bitrix24.kz']; //Добавляются адреса всех, кому должно прийти письмо с уведомлением
    var alertType = true; // true - уведомление при малом остатке, при значении false - при количестве дней
    var includeVAT = false;

    var budgetOrder = AdWordsApp.budgetOrders().get().next();
    var SpendingLimit = budgetOrder.getSpendingLimit(); // Общий лимит аккаунта
    var adjustments = budgetOrder.getTotalAdjustments(); // Возвращенные средства на аккаунт

    var Spent = AdWordsApp.currentAccount().getStatsFor('ALL_TIME').getCost(); // Расход за все время
    var lastWeekSpent = AdWordsApp.currentAccount().getStatsFor('LAST_7_DAYS').getCost(); // Расход за последние 7 дней
    var thisMonthSpent = AdWordsApp.currentAccount().getStatsFor('THIS_MONTH').getCost();
    var vat = thisMonthSpent * 0.2;

    if (includeVAT) {
        SpendingLimit -= vat;
    }
    Logger.log(vat);

    if (adjustments == null) {
        var remainingBudget = SpendingLimit - Spent;
    } else {
        var remainingBudget = SpendingLimit - (Spent + adjustments);
    }
    Logger.log("Остаток аккаунта - " + Math.round(remainingBudget));
    if (alertType) {
        if (remainingBudget < alertLimit) {
            sendSimpleTextEmail(email);
        }
    } else {

        var limitsDays = remainingBudget / lastWeekSpent;
        if (limitsDays < days) {
            sendSimpleTextEmail(email);
        }
    }

    function sendSimpleTextEmail(mail) {
        MailApp.sendEmail( mail,
            'Минимальный остаток бюджета! ' + AdWordsApp.currentAccount().getName(),
            'В аккаунте заканчиваются средства. Внесите оплату!');
    }

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();

    var hookURL = 'https://hook.integromat.com/ib1s5qxcwqco7n67y8cc6assjln5qmc9/?' + 'id_ga_acc=' + AdWordsApp.currentAccount().getName() + '&ga_budget=' + remainingBudget ;

    xhr.open('GET', hookURL, false);

    xhr.send();
}
