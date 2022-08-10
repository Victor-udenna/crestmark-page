const faq_head = document.getElementsByClassName('content-container');

for (i = 0; i < faq_head.length; i++) {

    faq_head[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};