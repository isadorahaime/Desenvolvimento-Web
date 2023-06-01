function fazPost(url, body){
    let req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send(JSON.stringify(body))
    req.onload = function(){
        console.log(this.responseText)
    }
    return req.responseText
}

function cadastraUsuario(){
    let url = "http://localhost:3000/login"
    let email = document.getElementById('email').value
    let password = document.getElementById('pass').value
    body = {
        "email":email,
        "senha":password
    }
    fazPost(url, body)
}