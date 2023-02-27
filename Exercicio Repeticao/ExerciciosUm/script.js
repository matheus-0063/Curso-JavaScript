function horario(){
    var imagem = document.querySelector('#img');
    var mensagem = document.querySelector('#msg');
    var date = new Date();
    var horas = date.getHours();
    var minutos = date.getMinutes();

    mensagem.innerHTML = `Agora são ${horas}:${minutos}`

    if(horas >= 6 && horas <= 12){
        imagem.src = 'Imagens/fotomanha.png';
        document.body.style.background = '#e2cd9f';
    } else if (horas > 12 && horas < 18) {
        imagem.src = 'Imagens/fototarde.png';
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = 'Imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }

}
