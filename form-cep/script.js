function verificaCep(){
    var cep = document.getElementById('cep').value
    var script = document.createElement('script');
    script.src = "https://viacep.com.br/ws/"+ cep + "/json/?callback=dados";
    document.body.appendChild(script);
}

function dados(conteudo){
    document.getElementById('cidade').value = conteudo.localidade;
    document.getElementById('estado').value = conteudo.uf;
    document.getElementById('rua').value = conteudo.logradouro;
    document.getElementById('complemento').value = conteudo.complemento;
    document.getElementById('bairro').value = conteudo.bairro;
}