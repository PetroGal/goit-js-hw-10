import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i as S}from"./assets/vendor-77e16229.js";const o=document.querySelector("button[data-start]"),s=document.querySelector("#datetime-picker"),e={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let m,u=null;o.disabled=!0;s.classList.add("input-disabled");s.addEventListener("click",()=>{s.classList.remove("input-disabled")});const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<new Date?(S.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(u=n,o.disabled=!1,o.classList.add("btn-normal"))}};y(s,b);o.addEventListener("click",()=>{if(!u)return;const t=u.getTime();o.disabled=!0,s.disabled=!0;function n(){const a=t-new Date().getTime();if(a<=0){clearInterval(m),s.disabled=!1,e.days.textContent="00",e.hours.textContent="00",e.minutes.textContent="00",e.seconds.textContent="00";return}const{days:l,hours:d,minutes:i,seconds:c}=p(a);e.days.textContent=r(l.toString()),e.hours.textContent=r(d.toString()),e.minutes.textContent=r(i.toString()),e.seconds.textContent=r(c.toString())}m=setInterval(n,1e3),n()});function p(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:c,seconds:f}}function r(t){return t.padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map