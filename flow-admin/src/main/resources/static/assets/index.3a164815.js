import{_ as o,H as K,a as T,J as H,K as D,L as J,M as L,N as Q,O as W,Q as X,w as q,R as z,S as G,T as P,U as i,p as h}from"./index.e1964776.js";import{V as Y}from"./Checkbox.e5f92db0.js";var Z=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},ce=function(){return o(o({},Z()),{},{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},ee=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:K.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},ae=function(){return o(o({},ee()),{},{indeterminate:{type:Boolean,default:!1}})},ne=Symbol("CheckboxGroupContext"),te=["indeterminate","skipGroup","id"],oe=["onMouseenter","onMouseleave","onInput","class","style"],le=T({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:ae(),setup:function(a,d){var v=d.emit,r=d.attrs,b=d.slots,S=d.expose,B=H(),x=D("checkbox",a),u=x.prefixCls,M=x.direction,n=J(ne,void 0),k=Symbol("checkboxUniId");L(function(){!a.skipGroup&&n&&n.registerValue(k,a.value)}),Q(function(){n&&n.cancelValue(k)}),W(function(){X(a.checked!==void 0||n||a.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var I=function(e){var l=e.target.checked;v("update:checked",l),v("change",e)},p=q(),_=function(){var e;(e=p.value)===null||e===void 0||e.focus()},A=function(){var e;(e=p.value)===null||e===void 0||e.blur()};return S({focus:_,blur:A}),function(){var c,e,l=z((c=b.default)===null||c===void 0?void 0:c.call(b)),C=a.indeterminate,w=a.skipGroup,m=a.id,V=m===void 0?B.id.value:m,j=G(a,te),F=r.onMouseenter,N=r.onMouseleave;r.onInput;var O=r.class,U=r.style,R=G(r,oe),t=o(o({},j),{},{id:V,prefixCls:u.value},R);n&&!w?(t.onChange=function(){for(var g=arguments.length,y=new Array(g),f=0;f<g;f++)y[f]=arguments[f];v.apply(void 0,["change"].concat(y)),n.toggleOption({label:l,value:a.value})},t.name=n.name.value,t.checked=n.mergedValue.value.indexOf(a.value)!==-1,t.disabled=a.disabled||n.disabled.value,t.indeterminate=C):t.onChange=I;var $=P((e={},i(e,"".concat(u.value,"-wrapper"),!0),i(e,"".concat(u.value,"-rtl"),M.value==="rtl"),i(e,"".concat(u.value,"-wrapper-checked"),t.checked),i(e,"".concat(u.value,"-wrapper-disabled"),t.disabled),e),O),E=P(i({},"".concat(u.value,"-indeterminate"),C));return h("label",{class:$,style:U,onMouseenter:F,onMouseleave:N},[h(Y,o(o({},t),{},{class:E,ref:p}),null),l.length?h("span",null,[l]):null])}}});export{le as C,ne as a,ce as c};