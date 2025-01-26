//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }
  amigos.push(nome);
  document.getElementById("amigo").value = "";
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(function(amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione amigos antes de sortear.");
    return;
  }
  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").innerHTML = "Amigo secreto: " + sorteado;
}


// Saída esperada: ["João"] 
//O código acima é uma simulação de um sistema de amizades. Onde é possível adicionar e remover amigos. O código está funcionando, porém, o código está com um problema. Você consegue identificar qual é o problema? E como você resolveria este problema?








