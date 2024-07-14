(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const a=[];for(let r=0;r<12;r++){const t={id:r,name:"Poppy & Barley",imgUrl:`../assets/images/products${r+1}.jpg`,brand:"Jo Malone",salePrice:1380,originalPrice:1580};a.push(t)}const l=document.querySelector(".list");let n="";a.forEach(function(r){n+=`<li class="goods">
                <div class="img-container">
                    <img src="${r.imgUrl}" alt="${r.name}">
                </div>
                <div class="goods-content SF">
                    <h3>${r.name}</h3>
                    <a href="#">${r.brand}</a>
                    <div class="mb4"><span class="saleoff mr8">NT$${r.salePrice}</span><span class="price"><del class="g-3">NT${r.originalPrice}</del></span></div>
                    <div>
                        <a href="#"><span class="material-symbols-sharp brown mr12">favorite</span></a>
                        <a href="#"><span class="material-symbols-sharp brown">shopping_cart</span></a>
                    </div>
                </div>
            </li>`});l.innerHTML=n;
