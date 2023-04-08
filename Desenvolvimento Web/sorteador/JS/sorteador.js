function sortearNum(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)

    let numSorteado = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
    document.getElementById("resultado").innerHTML = "O número sorteado é " + numSorteado;
}