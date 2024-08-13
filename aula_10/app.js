function pegar_altura() {
    let altura = window.innerHeight;
    document.getElementById('altura').textContent = 'A altura é ' + altura + ' pixels';
}

function pegar_largura() {
    let largura = window.innerWidth;
    document.getElementById('largura').textContent = 'A largura é ' + largura + ' pixels';
}

function linguagem(){
    let lingua = navigator.language;
    document.getElementById('lingua').textContent = 'A lingua é ' + lingua;

}

function localizacao(){
    let local = navigator.geolocation;
    document.getElementById('local').textContent = 'O local é ' + local;

}

function plataforma(){
    let plata = navigator.platform;
    document.getElementById('plata').textContent = 'A plataforma é ' +plata;

}
let valor = prompt('valor: ')
function fatorial(valor){
    if(valor==0 || valor==1) {
        return 1
    }
   
    document.getElementById('fatorial').textContent= valor + "*" 
    return valor*fatorial(valor-1)
}