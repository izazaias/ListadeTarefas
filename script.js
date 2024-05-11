// Captura o formulário
const formLista = document.getElementById('formLista');
// Captura o elemento onde as tarefas serão exibidas
const listaTarefas = document.getElementById('listaTarefas');

// Adiciona um event listener para o evento submit do formulário
formLista.addEventListener('submit', function (event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    // Captura os valores dos campos de entrada
    const compromisso = document.getElementById('compromisso').value;
    const data = document.getElementById('data').value;
    const local = document.getElementById('local').value;

    // Cria um elemento de lista e adiciona as informações
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Compromisso:</strong> ${compromisso}, <strong>Data:</strong> ${data}, <strong>Local:</strong> ${local}`;

    // Adiciona o item de lista à lista de tarefas
    listaTarefas.appendChild(listItem);

    // Limpa os campos do formulário após adicionar a tarefa
    formLista.reset();
});