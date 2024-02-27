const handleNum = (num, evenCallback, oddCallback) => {
  num % 2 === 0 ? evenCallback(num) : oddCallback(num);
};

const handleEven = (number) => {
  console.log(`${number} is even`);
};

const handleOdd = (number) => {
  console.log(`${number} is odd`);
};

handleNum(10, handleEven, handleOdd);
handleNum(11, handleEven, handleOdd);
