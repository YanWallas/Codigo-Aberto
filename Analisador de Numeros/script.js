let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function isNumero(n){ // função criada para alert se o espaço esta facil ou maior que 100
    if(Number(n) >= 1 && Number(n) <= 100){ 
        return true; // verdade
    } else {
        return false; // falso 
    }
}

function inLista(n, l) { // função para saber se o numero nao esta na lista.
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // se o numero for entre 1 e 100 e nao tiver na lista
        valores.push(Number(num.value)); // adicionou na variavel 
        let item = document.createElement('option'); // variavel para criar o texto 
        item.text = `Valor ${num.value} adicionado.`; // texto que sera exibido na variavel
        lista.appendChild(item); // puxando a variavel para aparecer dentro da lista com texto
        res.innerHTML = ''; // quando adicional mais numeros, limpar o resultado
        

    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
        
    }
    num.value = ''; // apagar o conteudo dentro do quadrado
    num.focus(); // focar no quadrado, como se tivesse clicado com o mouse 

}

function finalizar(){
    if (valores.length == 0) {// para nao clicar no botao finalizar sem conteudo 
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length; // puxando total de numeros em valores para variavel tot
        let maior = valores[0] ;// variavel para pegar o maior numero, começando pelo primeiro adicionado
        let menor = valores[0];
        let soma = 0; // variavel para soma dos valores
        let media = 0; // variavel para media dos valores

        for(let pos in valores){
            soma += valores[pos]; // vai somar os valores de acordo que forem adicionados.

            if (valores[pos] > maior) // se valores adicionado dps for maior que o maior entao
            maior = valores[pos]; // maior receber valor do valores adicionado dps..

            if (valores[pos] < menor)// ao contrario do de cima para pegar numero menor.
            menor = valores[pos];
        }
        media = soma / tot; //media recebe soma dos valores, dividido pelo total de valores. 
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;

    }

}