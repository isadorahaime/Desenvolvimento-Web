function getCheckBox(){
    let checkBoxes = document.querySelectorAll('input[type=checkbox]:checked')
    let text = ""
    for(let i = 0; i < checkBoxes.length; i++){
        text = `${text} ${checkBoxes[i].value}`
    }
    document.getElementById("Musica").innerHTML = text
}

function getRadio(){
    let elemento = document.getElementsByName('choice')
    for(let i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            document.getElementById("radioResult").innerHTML = `Fantastico! Obrigada por escolher ${elemento[i].value}`
        }else(){

        }
    }
}

function getOption(){
    let selectElement = document.querySelector("#select1")
    let text = selectElement.value
    document.querySelector(".output").textContent = text
}
