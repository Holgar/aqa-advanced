const divide = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error("Error: Division by zero is undefined.");
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both numerator and denominator must be numbers.");
    }
    return numerator / denominator;
}

try {
    console.log(divide(10,2))
} catch(e){
    console.log('Error occurs', e)
} finally {
    console.log("Finish work")
}

try {
    console.log(divide(10,0))
} catch(e){
    console.log('Error occurs', e)
} finally {
    console.log("Finish work")
}

try {
    console.log(divide('Hello world',2))
} catch(e){
    console.log('Error occurs', e)
} finally {
    console.log("Finish work")
}