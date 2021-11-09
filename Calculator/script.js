// ---------- ESERCIZIO SENZA MAP FILTER E REDUCE ---------- //

function calculator(numbers) {
    function sum() {
        let sumTotal = 0;
        for (num of numbers) sumTotal += num;
        return sumTotal;
    }

    function sub() {
        let subTotal = numbers[0];
        for (num of numbers) subTotal -= num;
        return subTotal + numbers[0];
    }

    function mul() {
        let mulTotal = 1;
        for (num of numbers) mulTotal *= num;
        return mulTotal;
    }

    function div() {
        let divTotal = numbers[0];
        for (num of numbers) divTotal /= num;
        return divTotal * numbers[0];
    }

    return {
        sum: sum(),
        sub: sub(),
        mul: mul(),
        div: div(),
    };
}

// ---------- ESERCIZIO CON MAP FILTER E REDUCE ---------- //


function minimalCalc(numbers) {
    const sum = () => numbers.reduce((acc, num) => acc + num);              // ADDIZIONE
    const sub = () => numbers.reduce((acc, num) => acc - num);              // SOTTRAZIONE
    const mul = () => numbers.reduce((acc, num) => acc * num);              // MOLTIPLICAZIONE
    const div = () => numbers.reduce((acc, num) => acc / num);              // DIVISIONE
    const pow = () => numbers.map(num => Math.pow(num, 2));                 // POTENZA
    const sqrt = () => numbers.map(num => Math.sqrt(num));                  // RADICE QUADRATA
    const cbrt = () => numbers.map(num => Math.cbrt(num));                  // RADICE CUBICA

    return {
        sum: sum(),
        sub: sub(),
        mul: mul(),
        div: div(),
        pow: pow(),
        sqrt: sqrt(),
        cbrt: cbrt(),
    };
}