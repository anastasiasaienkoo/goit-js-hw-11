import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import { galleryFn } from './render-funktions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const ul = document.querySelector('.gallery-js');
const key = '47906574-737e3153d4e9e6f9b55134ae6';
const url = 'https://pixabay.com/api/';
const gallery =  document.querySelector('.gallery');



// const q = `q = ${valueInput}`;
// const image_type = 'image_type = photo';
// const orientation = 'orientation = horizontal';
// const safesearch = 'safesearch = true';
export function fetchImages(value){
 const response = fetch(`https://pixabay.com/api/?key=47906574-737e3153d4e9e6f9b55134ae6&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`)
.then(response => {
    if(!response.ok){
       throw new Error(response.status);
    }
    return response.json();
})
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
})}


