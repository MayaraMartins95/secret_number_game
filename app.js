//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// 1a etapa criar array
let amigos = [];
// 2a etapa implementar uma função para agregar amigos
function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if(amigos.includes(nome)){
        alert('Opa, esse nome já está na lista, caso tenha mais de uma pessoa com mesmo nome, favor diferenciar pelo sobrenome ou apelido');
        nome = document.querySelector('input');
        nome.value = '';
    }else if(nome ==""){
        alert('Insira um nome.');
    }else{
        amigos.push(nome);
        console.log(amigos);
        nome = document.querySelector('input');
        nome.value = '';
        implementarLista();
    }
}

//3a etapa implementar uma função para atualizar a lista de amigos
function implementarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

//4a etapa implementar uma função para sortear os nomes
function sortearAmigo(){
    //5a etapa  limpar o texto no campo resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    //6a etapa Sortear o índice do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];
    //7a etapa Remover o nome sorteado da lista para não duplicar
    amigos.splice(indiceSorteado, 1);
    //8a etapa Mostrar o nome do amigo sorteado no campo 'resultado'
    let item = document.createElement("li");
    item.textContent = `Amigo sorteado: ${nomeSorteado}`;
    resultado.appendChild(item);
    //9a etapa Atualizar a lista de amigos no campo listaAmigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
        });
}