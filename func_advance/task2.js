function recursiveCounter(num) {
    console.log(num);
    num > 0 ? recursiveCounter(num - 1) : null;
}

recursiveCounter(5);