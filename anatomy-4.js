// Anonymous function
// IIFE - Imediately Invoked Function Expression
(function(a,b){
    console.log(a + b) 
})(2,8);

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();