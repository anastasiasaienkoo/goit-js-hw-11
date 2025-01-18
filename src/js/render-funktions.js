// // Описаний у документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery-js');

export const galleryFn = ImgInfo => {
  return ImgInfo.map(el => {
    return `<li class="card">
    <a class="lagre-foto" href="${el.largeImageURL}">
    <img src='${el.webformatURL}' alt='${el.tags}' width='360' height='160'>
    </a>
    <div class="text">
    <p class="tags">Likes<span class="positions">${el.likes}</span></p>
    <p class="views">Views<span class="positions">${el.views}</span></p>
    <p class="comments">Comments<span class="positions">${el.comments}</span></p>
    <p class="downloads">Downloads<span class="positions">${el.downloads}</span></p>
    </div>
    </li>`
   }) 
   .join('');

};


// webformatURL,largeImageURL,tags,likes,views,comments,downloads