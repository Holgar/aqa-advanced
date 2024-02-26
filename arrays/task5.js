const firstArray = [1, 2, true];
const secondArray = ['Hello', false, 'World'];
const concatArray = firstArray.concat(secondArray);
const spreadArray = [...firstArray, ...secondArray];
console.log(concatArray);
console.log(spreadArray);
