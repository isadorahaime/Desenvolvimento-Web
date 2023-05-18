function limpaForm(){
    document.getElementById('cep').value = ""
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
    document.getElementById('ibge').value = ""
}

function meucallback(content){
    if(!("erro" in content)){
        document.getElementById('rua').value = content.logradouro
        document.getElementById('bairro').value = content.bairro
        document.getElementById('cidade').value = content.localidade
        document.getElementById('uf').value = content.uf
        document.getElementById('ibge').value = content.ibge
    }
}

function pesquisacep(valor){
    let cep = valor.replace(/\D/g,'')
    if(cep != ""){
        let validacep = /^[0-9]{8}$/
        if(validacep.test(cep)){
            let script = document.createElement('script')
            script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=meucallback"
            document.body.appendChild(script)
        }else{
            limpaForm()
            alert("Formato de CEP ivalido!")
        }
    }else{
        limpaForm()
        alert("CEP não encontrado")
    }
}