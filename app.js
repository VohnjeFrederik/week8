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

const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const kontaktlist = document.querySelector('#kontakt');


window.onload = () => {


    fetch('person.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

            fNameSpan.textContent = data.fName
            lNameSpan.textContent = data.lName

           for(let i = 0; i < data.kontakt.length; i++ ) {

                let li = document.createElement('li');
                li.innerHTML = data.kontakt[i];

                kontaktlist.appendChild(li);


    }
    })

}