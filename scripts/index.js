function validar(){
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value; 
    const mensagem = document.getElementById("mensagem");

    if(idade >= 16 && nivel > 5 ){
        mensagem.innerText = "Incrição aceita. Categoria PRO";
        mensagem.style.color = "green";
    }else if (idade >= 16 && nivel <= 5 ){
        mensagem.innerText = "Incrição aceita. Categoria INICIANTE";
        mensagem.style.color = "blue";
    }else {
        mensagem.innerText = "Inscrição negada. Idade mínima: 16 anos";
        mensagem.style.color = "red";
    }
}

function validarDesafio1(){
    const senha0 = document.getElementById("senha0").value;
    const senha1 = document.getElementById("senha1").value;
    const mensagem = document.getElementById("mensagem1");
    
    if(senha0.length >= 8) {
        if(senha0 == senha1){
            mensagem.innerText = "Senha confirmada!";
            mensagem.style.color = "green";
        } else {
            mensagem.innerText = "As senhas não correspondem.";
            mensagem.style.color = "red";
        }
    } else {
        mensagem.innerText = "Senha inválida."
        mensagem.style.color = "red";
    }
}

function validarDesafio2(){
    const idade = document.getElementById("idade2").value;
    const estudante = document.getElementById("estudante");
    const mensagem = document.getElementById("mensagem2");

    if(idade > 60 || estudante.checked) {
        mensagem.innerText = "Desconto aplicado com sucessso.";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Desconto não pode ser aplicado.";
        mensagem.style.color = "red";
    }
}

function validarDesafio3(){
    const nome = document.getElementById("nome3").value;
    const idade = document.getElementById("idade3").value;
    const mensagem = document.getElementById("mensagem3");
    const nomeSemEspaço = nome.replace(/\s/g, '');

    if(nomeSemEspaço.length > 0 && idade > 0) {
        mensagem.innerText = "Sistema liberado.";
        mensagem.style.color = "green";
    } else if(nomeSemEspaço.length == 0){
        mensagem.innerText = "Erro. Insira um nome.";
        mensagem.style.color = "red";
    } else {
        mensagem.innerText = "Erro. Insira uma idade válida.";
        mensagem.style.color = "red";
    }
}