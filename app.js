//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//lista vazia chamada 'amigos' para armazenar os nomes dos amigos.
let amigos = [];

//Adicionando amigos à lista
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
//Atualizando a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
//Para cada amigo na lista 'amigos', criamos um novo item na lista da tela. forEach é um método de array que executa uma função para cada elemento do array.
    amigos.forEach(function(amigo) {
// document.createElement cria um novo elemento HTML. Neste caso, estamos criando um novo elemento 'li' (item de lista).
      let li = document.createElement("li");
//textContent textContent define ou obtém o texto de um elemento. Neste caso, estamos definindo o texto do elemento 'li' como o nome do amigo.
      li.textContent = amigo;
//appendChild a appendChild adiciona um novo elemento como filho de um elemento existente. Neste caso, estamos adicionando o elemento 'li' como filho do elemento 'lista'.
      lista.appendChild(li);
    });
  }


// Saída esperada: ["João"] 
//O código acima é uma simulação de um sistema de amizades. Onde é possível adicionar e remover amigos. O código está funcionando, porém, o código está com um problema. Você consegue identificar qual é o problema? E como você resolveria este problema?








