import{cf as o,Y as f}from"./index.e61ad282.js";function m(u){var r,l=function(t){return function(){r=null,u.apply(void 0,f(t))}},a=function(){if(r==null){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r=o(l(e))}};return a.cancel=function(){return o.cancel(r)},a}export{m as t};