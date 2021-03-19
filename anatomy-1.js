// Function Declaration

// função sem parâmetro e sem retorno
function sayHello(){
    console.log('Hello!')
}
sayHello()

// função com parâmetro e sem retorno 
function sayHelloTo(name){
    console.log(`Hello, ${name}`)
}
sayHelloTo("Raphaela!")

// função sem parâmetro e com retorno
function retorna(){
    return 'Olá!'
}
var x = retorna();
console.log(x)
console.log(retorna())

// função com parâmetro e com retorno
function retornaOla(nome){
    return `Olá, ${nome}`
}
console.log(retornaOla("Andrea!"))