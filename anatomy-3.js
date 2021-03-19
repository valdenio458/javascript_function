// Function expression
const increment1 = function(n){
    return n + 1
}

// Arrow function é sempre uma função anônima
const increment2 = (n) => {
    return n + 1
}

// Arrow function com apenas um parâmetro
const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1 
    
// Arrow function com mais de um parâmetro

const sum = (a,b) => a + b



console.log(increment1(1))
console.log(increment2(9))
console.log(increment3(24))
console.log(increment4(59))
console.log(sum(220,230))