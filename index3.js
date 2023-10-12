var createFUNCTION = function(){
    var array = []
    for (let i = 0; i < 3; i++){
        array.push(() => (console.log(i)))
    }

    return array;
}

let arr = createFUNCTION()
arr[0] ();
arr[1] ();
arr[2] ();