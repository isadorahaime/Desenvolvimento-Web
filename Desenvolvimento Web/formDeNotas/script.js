
		function calcularMedia() {
			var nome = document.getElementById("nome").value;
			var nota1 = parseFloat(document.getElementById("nota1").value);
			var nota2 = parseFloat(document.getElementById("nota2").value);
			var nota3 = parseFloat(document.getElementById("nota3").value);
			var nota4 = parseFloat(document.getElementById("nota4").value);

			var media = (nota1 + nota2 + nota3 + nota4) / 4;

			var resultado = document.getElementById("resultado");

			resultado.innerHTML = "O aluno " + nome + " obteve média " + media.toFixed(1) + ". ";

			if (media >= 6.0) {
				resultado.style.backgroundColor = "green";
				resultado.innerHTML += "Situação: Aprovado.";
			} else if (media < 2.0) {
				resultado.style.backgroundColor = "red";
				resultado.innerHTML += "Situação: Reprovado.";
			} else {
				resultado.style.backgroundColor = "blue";
				resultado.innerHTML += "Situação: Em Recuperação.";
			}
		}

