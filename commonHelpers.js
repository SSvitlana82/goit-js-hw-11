import{a as m,S as h,i as p}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="42369519-035bfcd8f925f02ed856cad4b";function L(i){const o=`?key=${y}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`,r=`${g}${o}`;return m.get(r).then(s=>s.data).catch(s=>{console.log(s)})}const c=document.querySelector(".list-gallery");function b(i){const o=i.map(r=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:n,views:u,comments:d,downloads:f}=r;return` 
    <li class="gallery-item">
        <a href="${e}" class="gallery-link"> <img src="${s}" alt="${t}" class="gallery-image" />
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${n}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${u}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${d}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${f}</p>
          </li>
        </ul>
        </a>
      </li>
        `}).join("");c.insertAdjacentHTML("beforeend",o)}const $=new h(".list-gallery a",{}),l=document.querySelector(".form-input"),S=document.querySelector("#form"),a=document.querySelector(".loader");S.addEventListener("submit",v);function v(i){i.preventDefault();const o=l.value.trim();if(!o){console.log("заповніть поле");return}console.dir(l),w(),L(o).then(r=>{console.log(r),r.hits.length||p.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",b(r.hits),$.refresh()}).catch(r=>{console.log(r)}).finally(()=>{q()})}function w(){a.classList.remove("hidden")}function q(){a.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
