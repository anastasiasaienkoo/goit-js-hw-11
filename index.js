import{i as d,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();document.querySelector(".gallery-js");const m=o=>o.map(e=>`<li class="card">
    <a class="lagre-foto" href="${e.largeImageURL}">
    <img src='${e.webformatURL}' alt='${e.tags}' width='360' height='160'>
    </a>
    <div class="text">
    <p class="tags">Likes<span class="positions">${e.likes}</span></p>
    <p class="views">Views<span class="positions">${e.views}</span></p>
    <p class="comments">Comments<span class="positions">${e.comments}</span></p>
    <p class="downloads">Downloads<span class="positions">${e.downloads}</span></p>
    </div>
    </li>`).join(""),u=document.querySelector(".gallery-js");document.querySelector(".gallery");function f(o){fetch(`https://pixabay.com/api/?key=47906574-737e3153d4e9e6f9b55134ae6&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp",messageSize:"16",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",width:"302",color:"white"});return}const r=m(e.hits);u.innerHTML=r,new p(".gallery a",{captionsData:"alt",captionDelay:250,doubleTapZoom:0,maxZoom:0,scrollZoom:!1}).refresh()})}const c=document.querySelector("form"),h=c.querySelector(".input-form"),n=document.querySelector(".loader");let l="";c.addEventListener("submit",o=>{if(o.preventDefault(),l=h.value.trim(),l===""){d.show({message:"Please fill in the field",iconUrl:"https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp",messageSize:"16",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",width:"302",color:"white"});return}n.classList.remove("is-hidden"),f(l).finally(()=>{n.classList.add("is-hidden")}),c.reset(),n.classList.remove("is-hidden")});
//# sourceMappingURL=index.js.map
