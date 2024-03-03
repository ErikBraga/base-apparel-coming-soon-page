const form = document.querySelector('.form');
const email = document.querySelector('#email');
const btn = document.querySelector('#btn_submit')
const div = document.querySelector('.img-container-hidden');
const right_container = document.querySelector('.right');
const error_img = document.querySelector('.error-img');
const span_email = document.querySelector('.span-email');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function verificarTamanhoDaJanela() {
    var larguraDaJanela = window.innerWidth;

    if(larguraDaJanela <= 850){
        right_container.classList.add('hidden');
        div.classList.remove('hidden');
    } else{
        right_container.classList.remove('hidden');
        div.classList.add('hidden')
    }
}

btn.addEventListener('click', () => {
    if(email.value.match(pattern)){
        error_img.classList.add('hidden');
        span_email.classList.add('hidden');
        email.value = ''
    } else{
        error_img.classList.remove('hidden');
        span_email.classList.remove('hidden');
    }
});

window.addEventListener('resize', verificarTamanhoDaJanela);
