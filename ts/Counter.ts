var createCounter = function(n: number) {
    
    return function() {
        return n++
    };
};


 const counter = createCounter(10)
 console.log(counter()) // 10
 console.log(counter()) // 11 
 console.log(counter()) // 12