import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import { galleryFn } from './js/render-funktions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {fetchImages} from './js/pixabay-api.js';
const form = document.querySelector('form');
const input = form.querySelector('.input-form');
const loader = document.querySelector('.loader');
const gallery =  document.querySelector('.gallery');
let valueInput = '';
const ul = document.querySelector('.gallery-js');


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
        .then(data => {
            if(data.hits.length === 0){
                iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
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

           const markup = galleryFn(data.hits);
            ul.innerHTML = markup;
        
            const simplebox = new SimpleLightbox('.gallery a', {
                captionsData: "alt", // встановлює підпис
                captionDelay: 250, // встановлює затримку
                doubleTapZoom: 0, // вбирає зум з подвійним кліком
                maxZoom: 0, // вбирає зум
                scrollZoom: false, //вбирає скрол мишою
            });
            simplebox.refresh()
})
        .catch(error => {
            loader.style.display = 'none';
            iziToast.error({
                message: 'Error fetching images. Please try again later.',
                position: 'topRight',
              });
              console.error(error);
        })
        .finally(()=> {
            loader.classList.add('is-hidden');
        });
        form.reset();

    })