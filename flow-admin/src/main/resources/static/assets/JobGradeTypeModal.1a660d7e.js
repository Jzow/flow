var y=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(u,t,e)=>t in u?y(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,E=(u,t)=>{for(var e in t||(t={}))j.call(t,e)&&B(u,e,t[e]);if(h)for(var e of h(t))I.call(t,e)&&B(u,e,t[e]);return u},b=(u,t)=>A(u,C(t));var F=(u,t,e)=>new Promise((n,a)=>{var d=r=>{try{o(e.next(r))}catch(l){a(l)}},i=r=>{try{o(e.throw(r))}catch(l){a(l)}},o=r=>r.done?n(r.value):Promise.resolve(r.value).then(d,i);o((e=e.apply(u,t)).next())});import{B as M,a as v}from"./index.c505e96f.js";import{B as P}from"./BasicForm.0ba2e15f.js";import{u as T}from"./useForm.696aa965.js";import{z as k,ba as q,A as N,r as R,u as p,j as S,a0 as w,B as $,a1 as G,a6 as V,w as J,a4 as O}from"./vendor.5879c5ca.js";/* empty css               */import{c as z,s as L}from"./jobGradeType.4f493fd6.js";import{_ as U}from"./index.e84e956c.js";const ae=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left"},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:u})=>{const e=~~u.status==1,n=e?"green":"red",a=e?"\u542F\u7528":"\u505C\u7528";return k(q,{color:n},()=>a)}},{title:"\u6392\u5E8F\u7F16\u53F7",dataIndex:"orderNo",width:100,align:"left"},{title:"\u5907\u6CE8",dataIndex:"note",align:"left"}],oe=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],W=[{field:"id",label:"",required:!1,component:"Input",show:!1},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",show:!0},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"}]},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u505C\u7528"}},{field:"orderNo",label:"\u6392\u5E8F\u7F16\u53F7",required:!1,component:"InputNumber",show:!0},{field:"note",label:"\u5907\u6CE8",required:!1,component:"InputTextArea",show:!0,rules:[{max:255,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E255\uFF01"}]}],Z=N({name:"JobGradeTypeModal",components:{BasicModal:M,BasicForm:P},emits:["success","register"],setup(u,{emit:t}){const e=R(!0),[n,{resetFields:a,updateSchema:d,setFieldsValue:i,validate:o}]=T({labelWidth:100,schemas:W,showActionButtonGroup:!1}),r=s=>[{trigger:"blur",validator:(m,g)=>g?z({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(f=>f?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(f=>Promise.reject(f)):Promise.resolve()}],[l,{setModalProps:c,closeModal:D}]=v(s=>F(this,null,function*(){yield a(),c({confirmLoading:!1}),e.value=!!(s==null?void 0:s.isUpdate);let m=s.record;yield d([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z-_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...r({id:p(e)&&m&&m.id||"",field:"code",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),p(e)&&i(b(E({},s.record),{status:s.record.status===1}))})),_=S(()=>p(e)?"\u4FEE\u6539":"\u65B0\u589E");function x(){return F(this,null,function*(){try{c({confirmLoading:!0});const s=yield o();s.status=s.status?1:0,yield L(s),D(),t("success")}finally{c({confirmLoading:!1})}})}return{registerModal:l,registerForm:n,getTitle:_,handleSubmit:x}}});function H(u,t,e,n,a,d){const i=w("BasicForm"),o=w("BasicModal");return $(),G(o,O(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:V(()=>[J(i,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var K=U(Z,[["render",H]]),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{K as J,ne as a,ae as c,oe as s};