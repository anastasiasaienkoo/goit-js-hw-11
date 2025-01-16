// import "izitoast/dist/css/iziToast.min.css";
// import iziToast from "izitoast";

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('form');
const input = form.querySelector('.input-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const valueInput = input.value;
})