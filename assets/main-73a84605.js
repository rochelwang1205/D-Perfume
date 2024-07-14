(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=c(r);fetch(r.href,s)}})();const d="https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/product",i=[];for(let e=1;e<=12;e++)i.push(`${d}${e}.jpg?raw=true`);const n=[];for(let e=0;e<12;e++){const t={id:e,name:"Poppy & Barley",imgUrl:i[e%i.length],brand:"Jo Malone",salePrice:1380,originalPrice:1580};n.push(t)}const f=document.querySelector(".list");let l="";n.forEach(function(e){l+=`<li class="goods">
                <div class="img-container">
                    <img src="${e.imgUrl}" alt="${e.name}">
                </div>
                <div class="goods-content SF">
                    <h3>${e.name}</h3>
                    <a href="#">${e.brand}</a>
                    <div class="mb4"><span class="saleoff mr8">NT$${e.salePrice}</span><span class="price"><del class="g-3">NT${e.originalPrice}</del></span></div>
                    <div>
                        <a href="#"><span class="material-symbols-sharp brown mr12">favorite</span></a>
                        <a href="#"><span class="material-symbols-sharp brown">shopping_cart</span></a>
                    </div>
                </div>
            </li>`});f.innerHTML=l;
