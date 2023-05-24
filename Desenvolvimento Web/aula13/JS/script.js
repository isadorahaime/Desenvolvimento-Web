function ToJson() {
    let jsonSend = `{
        "nome":"${document.getElementById('nome').value}",
        "email":"${document.getElementById('email').value}",
        "senha":"${document.getElementById('pass').value}",
        "nascimento":"${document.getElementById('nascimento').value}",
        "UF":"${document.getElementById('uf').value}",
        "CPF":"${document.getElementById('cpf').value}",
        "rua":"${document.getElementById('rua').value}",
        "bairro":"${document.getElementById('bairro').value}",
        "cidade":"${document.getElementById('cidade').value}",
        "ibge":"${document.getElementById('ibge').value}",
    }`
alert(jsonSend)
}

