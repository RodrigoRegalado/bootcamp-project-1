function createRandomString () {
    return Math.floor(Math.random()*5001) + Math.random().toString(36).substring(2,4)
}

console.log(createRandomString())
