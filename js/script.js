function insert(num){
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}
function limpar(){
    document.getElementById('resultado').innerHTML =""
}
function back(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}

let button_b = document.getElementById('b')


button_b.addEventListener('mouseenter', entrar)
button_b.addEventListener('mouseout', sair)
button_b.addEventListener('click', clicar)

function entrar(){
    button_b.style.background = 'inherit';
    button_b.style.color = 'inherit';
}
function sair(){
    button_b.style.background = '#d7288d';
    button_b.style.color = '#fff';
}
function clicar(){
    button_b.style.background = '#ffef78'
}