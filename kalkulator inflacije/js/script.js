function inflationCalculator() {
    let infaltionRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');


    //parsefloat sluzi za pretvaranje stringa u broj sa zarezom
    infaltionRate = parseFloat(infaltionRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;
    years = parseFloat(years);

    let worth = money + (money * (infaltionRate / 100));


    for (let i = 1; i < years; i++) {
        worth += worth * (infaltionRate / 100);
    }

    worth = worth.toFixed(2);

    let newElement = document.createElement ('div');
    newElement.className = 'new-value';
    newElement.innerText = `Danasnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina.`;

    document.querySelector('.container').appendChild(newElement);
}