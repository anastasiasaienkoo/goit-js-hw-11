import{i as l,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();document.querySelector(".gallery-js");const u=s=>s.map(e=>`<li class="card">
    <a class="lagre-foto" href="${e.largeImageURL}">
    <img src='${e.webformatURL}' alt='${e.tags}' width='360' height='160'>
    </a>
    <div class="text">
    <p class="tags">Likes<span class="positions">${e.likes}</span></p>
    <p class="views">Views<span class="positions">${e.views}</span></p>
    <p class="comments">Comments<span class="positions">${e.comments}</span></p>
    <p class="downloads">Downloads<span class="positions">${e.downloads}</span></p>
    </div>
    </li>`).join("");document.querySelector(".gallery-js");document.querySelector(".gallery");function m(s){fetch(`https://pixabay.com/api/?key=47906574-737e3153d4e9e6f9b55134ae6&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const d=document.querySelector("form"),f=d.querySelector(".input-form"),r=document.querySelector(".loader");document.querySelector(".gallery");let c="";const h=document.querySelector(".gallery-js");d.addEventListener("submit",s=>{if(s.preventDefault(),c=f.value.trim(),c===""){l.show({message:"Please fill in the field",iconUrl:"https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp",messageSize:"16",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",width:"302",color:"white"});return}r.classList.remove("is-hidden"),m(c).then(e=>{if(e.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp",messageSize:"16",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",width:"302",color:"white"});return}const i=u(e.hits);h.innerHTML=i,new p(".gallery a",{captionsData:"alt",captionDelay:250,doubleTapZoom:0,maxZoom:0,scrollZoom:!1}).refresh()}).catch(e=>{r.style.display="none",l.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{r.classList.add("is-hidden"),r.style.display="none"}),d.reset()});
//# sourceMappingURL=index.js.map
