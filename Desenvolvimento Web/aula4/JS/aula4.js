function imprimeTabuada(){
    let number = document.getElementById('numero').value;
    let divisoria = document.getElementById('result')
    divisoria.innerHTML = `<pA tabuada é ${number}</p>`;
    for(let i = 0; i <= 10; i++){
        let calc = i*number;
        const node = document.createElement("p")
        const text = document.createTextNode(`${number} x ${1}: ${calc}`)
        node.appendChild(text)
        divisoria.appendChild(node) 
    }
}

let cliques = 0

function Contador(){
    cliques++
    document.getElementById("cliques").innerHTML = cliques
}

function Sorteador(){
    let sorteado = parseInt(Math.random()*100)
    document.getElementById("sorteado").innerHTML = sorteado
}