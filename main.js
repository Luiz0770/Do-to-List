const formulario = document.getElementById('formulario');

let listaTarefa = JSON.parse(localStorage.getItem('tarefas')) || []

if (listaTarefa) {
    exibirNaTela()
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();    
    const inputTarefa = document.getElementById('tarefa').value

    if (!inputTarefa) {
        alert("Digite um valor valido!")
    }
    else {
        listaTarefa.push(inputTarefa)
        localStorage.setItem('tarefas', JSON.stringify(listaTarefa))
        console.log(listaTarefa)
        exibirNaTela()
    }
})

function exibirNaTela() {
    const resultados = document.querySelector('.resultados')
    resultados.innerHTML = ''

    listaTarefa.forEach((tarefa) => {
        resultados.appendChild(criarElemento(tarefa))
    })
}

function criarElemento(tarefa) {
    const itemTarefa = document.createElement('div')
    itemTarefa.classList.add('container-tarefa')
    itemTarefa.id = listaTarefa.length
    const text = document.createElement('p')   
    text.innerHTML = tarefa
    itemTarefa.appendChild(text)
    const btnRemover = document.createElement('button')
    btnRemover.id = 'remover'
    btnRemover.textContent = 'X'
    itemTarefa.appendChild(btnRemover)
    
    btnRemover.addEventListener('click', () => {
        removerItem(tarefa);
    })
    
    return itemTarefa
}

function removerItem(tarefa) {
    const listaRemovida = listaTarefa.filter(tarefaRemover => tarefaRemover !== tarefa)
    listaTarefa = listaRemovida
    localStorage.setItem('tarefas', JSON.stringify(listaTarefa))
    exibirNaTela()
}

const btnApagar = document.getElementById('apagar').addEventListener('click', () => {
    if(localStorage.getItem('tarefas') != null) {
        localStorage.removeItem('tarefas')
        listaTarefa = []
        exibirNaTela()
    }
    else {
        alert('Nao existe nenhuma lista para ser apagada!')
    }
})