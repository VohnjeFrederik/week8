const images = ['1.jpg', '2.jpg', '3.jpg']
const targetimage = document.querySelector('.piltminust img');
let i = 0;

targetimage.addEventListener('click', () => {

    targetimage.style.opacity = '0';

    setTimeout(() => {

        if (i === images.length - 0) {
            i = 0;
        }

        targetimage.src = 'image/' + images[i];
        i++;

        targetimage.style.opacity = '1';

    }, 300);


});
