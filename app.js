// const faq_head = document.getElementsByClassName('content-container');

// for (i = 0; i < faq_head.length; i++) {

//     faq_head[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//     })
// };

let faq_head = document.querySelector('.faq_container');

faq_head.addEventListener('click', function (e) {
    const target = e.target;
    
    if (target.matches('question')) {
        classList.add('active');
    }
})