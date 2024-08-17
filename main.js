const formulario = document.getElementById('formulario');

let listaTarefa = JSON.parse(localStorage.getItem('tarefas')) || []
// console.log(listaTarefa)

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
    const text = document.createElement('p')   
    text.innerHTML = tarefa
    itemTarefa.appendChild(text)

    return itemTarefa
}
