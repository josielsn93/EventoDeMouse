const site = document.querySelector('body');
const movimento = document.querySelector('#movimento');
const alerta = document.querySelector('#alerta')

function mouseUsuario(mouseMovendo){
    
    movimento.innerText = `
    ${mouseMovendo.pageY}`

    if(mouseMovendo.pageY <= 0 ){
        alerta.classList.add('ativo')
    } 

}

window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.remove();
        return false;
    };
};

const mouseMovendo = addEventListener('mousemove', mouseUsuario)