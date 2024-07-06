function spyCall(){
    console.log("Make investigative calls!");
} 

function visitCrimeScenes(){
    console.log("Conduct forensic");
}


//The receivesAFunction 
function receivesAFunction(spyGig){
    spyCall();
    spyGig();
}


//The returnsANamedFunction 
function returnsANamedFunction(){
    return visitCrimeScenes;
}
console.log(returnsANamedFunction());


//The returnsAnAnonymousFunction takes no arguments and returns an anonymous function

function returnsAnAnonymousFunction(){
    return (function() {
        console.log(`Well done!`)  
    })
};
console.log (returnsAnAnonymousFunction());

