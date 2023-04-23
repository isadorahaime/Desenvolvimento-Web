function changeBackgroundColor() {
        document.body.style.backgroundColor = "#4a4e69";
      }      

function exibirNome() {
    // Acessa o valor digitado no input de texto
    var nome = document.getElementById("nome").value;
    
    // Cria uma mensagem com o nome
    var mensagem = "Olá, " + nome + "! Seja bem-vindo!";
    
    // Cria um elemento p com a mensagem
    var mensagemElemento = document.createElement("p");
    var mensagemTexto = document.createTextNode(mensagem);
    mensagemElemento.appendChild(mensagemTexto);
    
    // Insere o elemento p dentro do elemento div
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.appendChild(mensagemElemento);
  }

  function exibirForm() {
    var form = document.getElementById("form2");
    form.style.display = "block";
  }
  
  function changeFormColor (){
    const form = document.getElementById("form1")
    form.style.backgroundColor = "#9a8c98"
  }

  function playMusic() {
    const genre = document.getElementById("genre").value;
    let musicSrc = "";
  
    if (genre === "rock") {
      musicSrc = "js/audio/rock.mp3";
    } else if (genre === "indie") {
      musicSrc = "js/audio/indie.mp3";
    } else if (genre === "mpb") {
      musicSrc = "js/audio/mpb.mp3";
    }
  
    document.getElementById("musicSrc").setAttribute("src", musicSrc);
    document.getElementById("music").load();
    document.getElementById("music").play();
  }

  function exibirForm3() {
    var form = document.getElementById("form3");
    form.style.display = "block";
  }

  function displayMessage() {
    const feedback = document.querySelector('input[name="feedback"]:checked').value;
    const messageDiv = document.getElementById("message");
  
    if (feedback === "yes") {
      messageDiv.textContent = "Obrigada pelo feedback!";
    } else if (feedback === "no") {
      messageDiv.textContent = "Sinto muito.";
    } else {
      messageDiv.textContent = "";
    }
  }