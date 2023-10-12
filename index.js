function greeting(greet){
    return function(name){
        console.log(`${greet} ${name}`)
    }
}

let greetingSon = greeting('Hi')
    greetingSon('Merlyn')