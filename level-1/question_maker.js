import { random_num } from './random_numbers.js';
import { operation } from './operator.js';

export function questionMaker () {

    let questions = [];

    for (let i = 1; i <= 10; i++) {
        const characteristics = new Map();

        const [a, b] = random_num();
        const operator = operation();
        characteristics.set("question", operator ? `${a} + ${b} = ` : `${a} - ${b} = `);
        characteristics.set("answer", operator ? a + b : a - b);
        characteristics.set("time", undefined);
        characteristics.set("ball", undefined);
        characteristics.set("qNum", i);

        questions.push(characteristics);
    }
    return questions;
}
