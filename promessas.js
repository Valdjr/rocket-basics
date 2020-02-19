var promessa = function() {
    return new Promise(function(resolve, reject) {
        var sucesso = true;
        var dados = {nome: 'valdir'}
        //... código / todo
        if (sucesso) {
            resolve(dados);
        } else {
            reject('Erro na promessa');
        }
    });
}

promessa()
    .then(function(dados) {
        console.log(dados);
    })
    .catch(function(dados) {
        console.log(dados);
    });