import{a as f,S as m,i as p}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",h="42369519-035bfcd8f925f02ed856cad4b";function g(s){return f.get(`${d}?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(({data:r})=>r).catch(r=>{console.log(r)})}const y=document.querySelector(".list-gallery");function L(s){const r=s.map(o=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:i,views:c,comments:a,downloads:u}=o;return` 
    <li>
        <a href="${e}"> <img src="${n}" alt="${t}" />
        <ul>
          <li>
            <h3>likes</h3>
            <p>${i}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${c}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${a}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${u}</p>
          </li>
        </ul>
        </a>
      </li>
        `}).join("");y.insertAdjacentHTML("beforeend",r)}const b=new m(".list-gallery a",{}),l=document.querySelector(".form-input"),$=document.querySelector("#form");$.addEventListener("submit",S);function S(s){s.preventDefault();const r=l.value.trim();if(!r){console.log("заповніть поле");return}console.dir(l),g(r).then(o=>{console.log(o),o.hits.length||p.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),L(o.hits),b.refresh()}).catch(o=>{console.log(o)})}
//# sourceMappingURL=commonHelpers.js.map
