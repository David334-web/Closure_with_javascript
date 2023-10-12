const countNumber = function(){
    let count = 0;

    return function (){
        count++
        console.log(`${count} number`)
    }
}

let counter = countNumber();
counter();
counter();
counter();