const number = 5;

// Використовуючи цикл for
console.log("Таблиця множення за допомогою циклу for:");
for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}

// Використовуючи цикл while
console.log("\nТаблиця множення за допомогою циклу while:");
let j = 1;
while (j <= 10) {
    const result = number * j;
    console.log(`${number} x ${j} = ${result}`);
    j++;
}
