function createRandomString () {
    return Math.floor(Math.random()*5001) + Math.random().toString(36).substring(2,4)
}

// let savednumbers = document.getElementsByClassName(setnumber)
document.getElementById("setnumber1").innerhtml= createRandomString();

console.log(document.getElementById("setnumber1").innerhtml= createRandomString())
console.log(createRandomString())
