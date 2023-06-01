function fazGet(url){
    let req = new XMLHttpRequest()
    req.open("GET", url, false)
    req.send()
    return req.responseText
}

function fazLinha(element){
    let linha = document.createElement('tr')
    let colId = document.createElement('td')
    let colEmail = document.createElement('td')
    let colSenha = document.createElement('td')
    colId.innerHTML = element.id_login_pk
    colEmail.innerHTML = element.email
    colSenha.innerHTML = element.senha
    linha.appendChild(colId)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)

    return linha
}

function main(){
    let dados = fazGet("http://localhost:3000/login")
    let tab = document.getElementById('tabela')
    let usuario = JSON.parse(dados)

    usuario.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}

main()