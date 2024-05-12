


const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.btn1');
const container = document.querySelector('.container');

btn0.addEventListener('click',function(e){
    container.classList.add('w100');
    container.classList.remove('w60');
});

btn1.addEventListener('click',function(e){
    container.classList.add('w60');
    container.classList.remove('w100');
});