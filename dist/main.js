(()=>{"use strict";const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("main-container"),e.appendChild(t),(()=>{const e=document.querySelector(".main-container"),t=document.createElement("header"),n=document.createElement("div"),a=document.createElement("a");a.classList.add("homeBtn"),a.href="#",a.innerText="Home";const d=document.createElement("a");d.classList.add("menuBtn"),d.href="#",d.innerHTML="Menu";const c=document.createElement("a");c.classList.add("contactBtn"),c.href="#",c.innerText="Contact";const s=[a,d,c];for(let e=0;e<s.length;e+=1)n.appendChild(s[e]);t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main-container"),t=document.createElement("div");t.classList.add("wrapper","d-flex","j-center");const n=document.createElement("div");n.classList.add("main-images");const a=document.createElement("img");a.classList.add("restaurant-photo"),a.src="../src/assets/images/restaurant.jpg",a.alt="Restaurant photo";const d=document.createElement("img");d.classList.add("blob"),d.src="../src/assets/images/blob.png",d.alt="Main image background";const c=[a,d];for(let e=0;e<c.length;e+=1)n.appendChild(c[e]);t.appendChild(n);const s=document.createElement("div");s.classList.add("main-text");const o=document.createElement("h1");o.innerHTML="Restaurant <span>JS</span>",s.appendChild(o);const l=document.createElement("h6");l.innerText="We have been serving to our valuable guests for more than a decade. We make sure our guests are fully satisfied with our services & the variety of cuisines to select from our menu.",s.appendChild(l),t.appendChild(s),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main-container"),t=document.createElement("div");t.classList.add("menuWrapper","d-flex","j-btw","d-none");const n=document.createElement("div");n.classList.add("menuContent");const a=document.createElement("div");a.classList.add("menuTitle");const d=document.createElement("h1");d.innerText="Menu",a.appendChild(d),n.appendChild(a);const c=document.createElement("div");c.classList.add("menuItems");const s=(e,t,n)=>{const a=document.createElement("div");a.classList.add("item");const d=document.createElement("span"),c=document.createElement("h3");c.innerText=e;const s=document.createElement("p");s.innerText=t,d.appendChild(c),d.appendChild(s),a.appendChild(d);const o=document.createElement("span"),l=document.createElement("strong");return l.classList.add("itemValue"),l.innerText=n,o.appendChild(l),a.appendChild(o),a},o=[s("OPTION 0","Testing","$40"),s("OPTION 1","Lorem ipsun is working well","$60")];for(let e=0;e<o.length;e+=1)c.appendChild(o[e]);const l=document.createElement("div");l.classList.add("menuImages");const i=document.createElement("img");i.classList.add("menu-photo"),i.src="../src/assets/images/menu.jpg",i.alt="Restaurant photo";const r=document.createElement("img");r.classList.add("blobMenu"),r.src="../src/assets/images/blob2.png",r.alt="Main image background";const m=[i,r];for(let e=0;e<m.length;e+=1)l.appendChild(m[e]);n.appendChild(c),t.appendChild(n),t.appendChild(l),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main-container"),t=document.createElement("div");t.classList.add("contactWrapper","d-flex","j-btw","d-none");const n=document.createElement("div");n.classList.add("contactContent");const a=document.createElement("div");a.classList.add("contactTitle");const d=document.createElement("h1");d.innerText="Contact",a.appendChild(d),n.appendChild(a);const c=document.createElement("div");c.classList.add("contactForm","d-flex");const s=document.createElement("input");s.placeholder="Name",s.disabled=!0,s.type="text",c.appendChild(s);const o=document.createElement("input");o.placeholder="Email",o.disabled=!0,o.type="email",c.appendChild(o);const l=document.createElement("textarea");l.placeholder="Message",l.disabled=!0,c.appendChild(l);const i=document.createElement("div");i.classList.add("menuImages");const r=document.createElement("img");r.classList.add("menu-photo"),r.src="../src/assets/images/hall.jpg",r.alt="Restaurant photo";const m=document.createElement("img");m.classList.add("blobMenu"),m.src="../src/assets/images/blob3.png",m.alt="Main image background";const u=[r,m];for(let e=0;e<u.length;e+=1)i.appendChild(u[e]);n.appendChild(c),t.appendChild(n),t.appendChild(i),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main-container"),t=document.createElement("p");t.classList.add("footer"),t.innerHTML='Copyright © 2021. <a href="https://www.linkedin.com/in/luis-vinicius/">Luis Vinicius M. S.</a>',e.appendChild(t)})();const n=document.querySelector(".wrapper"),a=document.querySelector(".menuWrapper"),d=document.querySelector(".contactWrapper");document.querySelector(".homeBtn").addEventListener("click",(()=>{n.classList.remove("d-none"),a.classList.add("d-none"),d.classList.add("d-none")})),document.querySelector(".menuBtn").addEventListener("click",(()=>{a.classList.remove("d-none"),n.classList.add("d-none"),d.classList.add("d-none")})),document.querySelector(".contactBtn").addEventListener("click",(()=>{d.classList.remove("d-none"),n.classList.add("d-none"),a.classList.add("d-none")}))})();