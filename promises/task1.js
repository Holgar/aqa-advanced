const timer = (message, ms) => {
  setTimeout(() => {
    console.log(`This ${message} is shown after ${ms} milliseconds`);
  }, ms);
};

// const timer = (arg, ms) => {
//     setTimeout(() => console.log(This ${arg} is shown after ${ms} milliseconds), ms);
// }

timer('test message', 1000);
