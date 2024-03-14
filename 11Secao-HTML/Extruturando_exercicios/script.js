// Seleciona todos os elementos 'a' (links) na página e itera sobre eles
document.querySelectorAll('a').forEach(link => {
    // Obtém a referência para o elemento com id 'conteudo'
    const conteudo = document.getElementById('conteudo');
    // Define um evento de clique para cada link
    link.onclick = function(e){
        // Impede o comportamento padrão do clique, que seria seguir o link
        e.preventDefault();
        // Faz uma requisição fetch para o href do link clicado
        fetch(link.href)
            // Quando a resposta é recebida, converte-a em texto
            .then(resposta => resposta.text())
            // Quando o texto é recebido, define-o como o conteúdo HTML da seção 'conteudo'
            .then(conteudoHTML => conteudo.innerHTML = conteudoHTML);
    }
});
