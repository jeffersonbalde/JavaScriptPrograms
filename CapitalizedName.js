const username = "jeff"

const capitalizedName = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

// console.log(capitalizedName(name))

function greetUser(name, callback){
    return callback(capitalizedName(name))
}

const result = greetUser(username, name => `Hi there, ${name}`)

console.log(result)