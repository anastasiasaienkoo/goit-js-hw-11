import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
const form = document.querySelector('form');
const input = form.querySelector('.input-form');
import {fetchImages} from './js/pixabay-api.js';
const loader = document.querySelector('.loader');
let valueInput = '';


form.addEventListener('submit', event => {
    event.preventDefault();
    valueInput = input.value.trim();

    if(valueInput === '') {
        iziToast.show({
            message: 'Please fill in the field',
            iconUrl: 'https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp',
            messageSize: '16',
            messageColor: 'white',
            backgroundColor: '#EF4040',
            position: 'topRight',
            width: '302',
            color: 'white',
        });
        return;
    } 
        loader.classList.remove('is-hidden');
        fetchImages(valueInput)
        // .catch(error => {
        //     refs.loader.style.display = 'none';
        //     iziToast.error({
        //         message: 'Error fetching images. Please try again later.',
        //         position: 'topRight',
        //       });
        //       console.error(error);
        // })
        .finally(()=> {
            loader.classList.add('is-hidden');
        });
        form.reset();


    loader.classList.remove('is-hidden');

})