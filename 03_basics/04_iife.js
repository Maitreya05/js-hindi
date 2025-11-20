// Immediate invoke function expression (IIFE)
//used iife to avoid or prevent global scope polution

(function chai(){
    //named iife
    console.log("DB connecterd")   
})();           

// use ; to write two iife

((name)=>{
    //unnamed iife
    console.log(`DB connected two ${name}`);
    
})('Maitreya');
