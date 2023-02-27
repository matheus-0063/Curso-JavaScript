function verificar(){
    var masculino = document.querySelector('#masc');
    var feminino = document.querySelector('#femi');
    var msgJS = document.querySelector('#msg')
    var anoNascimento = document.querySelector('#ano_nascimento');
    var date = new Date();
    var ano = date.getFullYear();
    var img = document.querySelector('#img');

    if(ano < anoNascimento.value || anoNascimento.value.length == 0){
        alert('Erro, ano de nascimento inválido');
    }
    else{
        var idade = ano - anoNascimento.value;
        if(masculino.checked){
            if(idade >= 00 && idade <= 13) {
                
            }
            msgJS.innerHTML = `Foi identificado um homem com 
            ${idade} anos!`
        }
        else if(feminino.checked){
            msgJS.innerHTML = `Foi identificado uma mulher com ${idade} anos!`
        }
    }
}