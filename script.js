document.getElementById('adicionar-tarefa').addEventListener('click', function() {
    const tarefaInput = document.getElementById('nova-tarefa');
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto) {
        const listaTarefas = document.getElementById('lista-tarefas');
        
        // Criar item da lista
        const li = document.createElement('li');
        li.className = 'tarefa-item';
        li.innerText = tarefaTexto;

        // Botão de concluir tarefa
        const botaoConcluir = document.createElement('button');
        botaoConcluir.className = 'botao-concluir';
        botaoConcluir.innerText = 'Concluir';
        botaoConcluir.addEventListener('click', function() {
            li.classList.toggle('concluida');
        });

        // Botão de remover tarefa
        const botaoRemover = document.createElement('button');
        botaoRemover.className = 'botao-remover';
        botaoRemover.innerText = 'Remover';
        botaoRemover.addEventListener('click', function() {
            listaTarefas.removeChild(li);
        });

        // Adicionar os botões à tarefa
        li.appendChild(botaoConcluir);
        li.appendChild(botaoRemover);

        // Adicionar a tarefa à lista
        listaTarefas.appendChild(li);

        // Limpar o campo de input
        tarefaInput.value = '';
    }
});
