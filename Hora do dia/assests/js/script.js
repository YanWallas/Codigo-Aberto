function carregar() {
var msg = window.document.getElementById('msg');
var msg2 = window.document.getElementById('msg2');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();

//var hora = 20

msg.innerHTML = `Agora são ${hora}:${min}:${seg}.`;

if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'manha.jpg';
    document.body.style.background = '#745616';
    msg2.innerText = 'Bom Dia';
    }

    else if (hora >= 12 && hora <= 18) {
    //boa tarde 
    img.src = 'tarde.jpg';
    document.body.style.background = '#164a745';
    msg2.innerText = 'Boa Tarde';
    }

    else { 
    //Boa Noite
    img.src = 'noite.jpg';
    document.body.style.background = '#6a3ca5';
    msg2.innerText = 'Boa Noite';
    }

}
