// function declaration 

function calculateAreaDeclaration(width,height){
    return width * height;
}
console.log(calculateAreaDeclaration(5,10));

// function expression

const calculateAreaExpression = function (width,height){
    return width * height;
}

console.log(calculateAreaExpression(6,10));

// arrow function

const calculateAreaArrow = (width,height) => {
    return width * height;
}
console.log(calculateAreaArrow(7,10));