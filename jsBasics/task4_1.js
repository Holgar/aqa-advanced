const radius = 4;
const area = Math.PI * Math.pow(radius, 2);

console.log(`Площа кола з радіусом ${radius}, становить: ${area}`);
console.log(`Заокруглена площа кола з радіусом ${radius}, становить: ${Math.round(area)}`);