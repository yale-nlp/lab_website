import{a1 as g}from"./index.63e919b1.js";function u(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function y(t){const n=t-1;return n*n*n+1}function b(t,{delay:n=0,duration:s=400,easing:e=u,amount:o=5,opacity:c=0}={}){const r=getComputedStyle(t),a=+r.opacity,p=r.filter==="none"?"":r.filter,m=a*(1-c);return{delay:n,duration:s,easing:e,css:(l,i)=>`opacity: ${a-m*i}; filter: ${p} blur(${i*o}px);`}}function h(t,{delay:n=0,duration:s=400,easing:e=g}={}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:e,css:c=>`opacity: ${c*o}`}}function _(t,{delay:n=0,duration:s=400,easing:e=y,x:o=0,y:c=0,opacity:r=0}={}){const a=getComputedStyle(t),p=+a.opacity,m=a.transform==="none"?"":a.transform,l=p*(1-r);return{delay:n,duration:s,easing:e,css:(i,f)=>`
			transform: ${m} translate(${(1-i)*o}px, ${(1-i)*c}px);
			opacity: ${p-l*f}`}}function x(t,{delay:n=0,duration:s=400,easing:e=y}={}){const o=getComputedStyle(t),c=+o.opacity,r=parseFloat(o.height),a=parseFloat(o.paddingTop),p=parseFloat(o.paddingBottom),m=parseFloat(o.marginTop),l=parseFloat(o.marginBottom),i=parseFloat(o.borderTopWidth),f=parseFloat(o.borderBottomWidth);return{delay:n,duration:s,easing:e,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*c};height: ${d*r}px;padding-top: ${d*a}px;padding-bottom: ${d*p}px;margin-top: ${d*m}px;margin-bottom: ${d*l}px;border-top-width: ${d*i}px;border-bottom-width: ${d*f}px;`}}function F(t,{delay:n=0,duration:s=400,easing:e=y,start:o=0,opacity:c=0}={}){const r=getComputedStyle(t),a=+r.opacity,p=r.transform==="none"?"":r.transform,m=1-o,l=a*(1-c);return{delay:n,duration:s,easing:e,css:(i,f)=>`
			transform: ${p} scale(${1-m*f});
			opacity: ${a-l*f}
		`}}export{_ as a,b,F as c,h as f,x as s};
