(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function m(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=m(o);fetch(o.href,n)}})();const g=document.querySelector(".btn-up");g.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const r=document.querySelector(".btn-up");window.onscroll=()=>{window.scrollY>700?r.classList.remove("btn-hidden"):window.scrollY<700&&r.classList.add("btn-hidden")};const a=document.querySelector(".js-menu-container"),f=document.querySelector(".js-open-menu"),p=document.querySelector(".js-close-menu"),u=()=>{a.classList.toggle("is-open")};f.addEventListener("click",u);p.addEventListener("click",u);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&a.classList.remove("is-open")});var y=document.getElementById("menu-toggle"),c=document.getElementById("menu"),i=c.getElementsByTagName("a");y.addEventListener("click",function(){c.classList.toggle("is-open")});for(var d=0;d<i.length;d++)i[d].addEventListener("click",function(){c.classList.remove("is-open")});(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-hero]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-veg]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-menu]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();