const botaoAdicionar = document.getElementById9('btnAdicionar')
const campoTexto = document.getElementById('novoAprovado')
const lista = document.getElementById('listaAprovados')

botaoAdicionar.addEventlistener ('click', function() {
    const nome = campoTexto.value;

    if (nome.trim() !== "") {
        const novoitem = document.createElement('li')

        novoitem.textContent = nome;

        lista.appendChild(novoitem);

        campoTexto.value = "";
        campoTexto.focus();
    } else {
        alert("Por favor, digite um nome!");
    }
})