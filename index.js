function name(){
    return "call"
}

function receivesAFunction(name){
    name()
}

receivesAFunction(name())

function returnsANamedFunction(){
    return function lay(){
        console.log("lay")
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("lay")
    }
}