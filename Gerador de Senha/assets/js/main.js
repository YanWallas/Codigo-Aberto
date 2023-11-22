const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const geraSenha = document.querySelector('.gerar-senha');

function click() {
    geraSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
};

function gera() {
    const senha = gerarSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada Selecionado.';
}

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;:~^[]{}!@#$%&&*()_-+=?\/<>';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

function gerarSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArrays = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArrays.push(geraMaiuscula());
        minusculas && senhaArrays.push(geraMinuscula());
        numeros && senhaArrays.push(geraNumero());
        simbolos && senhaArrays.push(geraSimbolo());
    }
    return senhaArrays.join('').slice(0, qtd);
}

click();