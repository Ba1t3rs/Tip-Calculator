const { Input, AutoComplete } = require('enquirer');

const askTipPercent = new Input({
    name: 'percent',
    message: 'Tip Percent? Ex. 20% = 20'
});

const AskBillAmount = new Input ({
    name: 'bill',
    message: 'Bill Amount? Ex. 25.87'
});

const run = async () => {
    const percent = await askTipPercent.run();
    const pTd = percent / 100;
    const bill = await AskBillAmount.run();

    const tip = bill * pTd;
    console.log("Tip Amount: " + tip);

    const tTip = Number(tip);
    const tTotal = Number(bill);
    const tTot = tTip + tTotal;
    console.log("Bill Total: " + tTot)
}

run();