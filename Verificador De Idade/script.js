function verificar () {
    var data = new Date() // data atual do sistema 
    var ano = data.getFullYear() // ano atual. getfullYear pega com 4 digitos 
    var fAno = document.getElementById('txtano') // variavel do canto de preenchimento do ano 
    var res = document.getElementById('res')
    //var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')} 

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto') // criando id foto pelo script

        if (fsex[0].checked) {// fecha cochete na em baixo.
            genero = 'Homem' 

            if (idade >=0 && idade <10) {
                img.setAttribute('src','f-crianca-homem.jpg')
            //criança   
            } else if (idade <21) {
                img.setAttribute('src','f-jovem-homem.jpg')
                //jovem
            } else if (idade <50) {
                img.setAttribute('src','f-adulto-homem.jpg')
                //Adulto
            } else { img.setAttribute('src','f-idoso-homem.jpg')
                //idoso
            }
            } // fecha aqui 

        else if (fsex[1].checked){// fecha cochete na em baixo.
            genero = 'Mulher' 

            if (idade >=0 && idade <10) {
                img.setAttribute('src','crianca-mulher.jpg')
                //criança   
                } 
                else if (idade <21) {
                    img.setAttribute('src','jovem-mulher.jpg')
                    //jovem
                } 
                else if (idade <50) {
                    img.setAttribute('src','adulto-mulher.jpg')
                    //Adulto
                } else { img.setAttribute('src','idoso-mulher.jpg')
                    //idoso
                }
            } // fecha aqui. 

        res.style.textAlign = 'center' // centralizar resultado pelo script
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // para adicinar a imagem depois do comando de genero.
    }
}