const mediaQuery_1 = window.matchMedia('(max-width:1350px)');
const mediaQuery_2 = window.matchMedia('(max-width:875px)');
const mediaQuery_3 = window.matchMedia('(max-width:700px)');
const mediaQuery_4 = window.matchMedia('(max-width:560px)');

const mediaQuery_1_ = window.matchMedia('(min-width:1350px)');
const mediaQuery_2_ = window.matchMedia('(min-width:875px)');
const mediaQuery_3_ = window.matchMedia('(min-width:700px)');
const mediaQuery_4_ = window.matchMedia('(min-width:560px)');

function response_0 (e_){
    if (e_.matches){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-3');
            item.classList.remove('col-4');
            item.classList.remove('col-5');
            item.classList.remove('col-10');
            item.classList.add('col-2');
        });
    }
}

function response_1 (e, e_){
    if (e.matches){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-4');
            item.classList.remove('col-5');
            item.classList.remove('col-10');
            item.classList.add('col-3');
        });
    }
}
function response_2 (e, e_){
    if (e.matches){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-3');
            item.classList.remove('col-5');
            item.classList.remove('col-10');
            item.classList.add('col-4');
        });
    }
}
function response_3 (e, e_){
    if (e.matches){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-4');
            item.classList.remove('col-3');
            item.classList.remove('col-10');
            item.classList.add('col-5');
        });
    }
}
function response_4 (e){
    if (e.matches){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-4');
            item.classList.remove('col-5');
            item.classList.remove('col-3');
            item.classList.add('col-10');
        });
    }
}
mediaQuery_1_.addListener(response_0);
response_0(mediaQuery_1_);

mediaQuery_1.addListener(response_1);
mediaQuery_2_.addListener(response_1);
response_1(mediaQuery_1, mediaQuery_2_);

mediaQuery_2.addListener(response_2);
mediaQuery_3_.addListener(response_2);
response_2(mediaQuery_2, mediaQuery_3_); 

mediaQuery_3.addListener(response_3);
mediaQuery_4_.addListener(response_3)
response_3(mediaQuery_3, mediaQuery_4_);

mediaQuery_4.addListener(response_4);
response_4(mediaQuery_4); 

setTimeout(() => {
    if(window.innerWidth < 560){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-4');
            item.classList.remove('col-5');
            item.classList.remove('col-3');
            item.classList.add('col-10');
        });
    }else
    if(window.innerWidth < 700){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-4');
            item.classList.remove('col-3');
            item.classList.remove('col-10');
            item.classList.add('col-5');
        });
    }else
    if(window.innerWidth < 875){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-3');
            item.classList.remove('col-5');
            item.classList.remove('col-10');
            item.classList.add('col-4');
        });
    }else
    if(window.innerWidth < 1350){
        const cards = document.querySelectorAll('[cards]');
        cards.forEach(item => {
            item.classList.remove('col-2');
            item.classList.remove('col-4');
            item.classList.remove('col-5');
            item.classList.remove('col-10');
            item.classList.add('col-3');
        });
    }
    
},2000);