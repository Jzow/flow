var M=Object.defineProperty;var x=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var B=(s,i,e)=>i in s?M(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,b=(s,i)=>{for(var e in i||(i={}))_.call(i,e)&&B(s,e,i[e]);if(x)for(var e of x(i))D.call(i,e)&&B(s,e,i[e]);return s};var g=(s,i,e)=>new Promise((c,n)=>{var a=r=>{try{t(e.next(r))}catch(u){n(u)}},d=r=>{try{t(e.throw(r))}catch(u){n(u)}},t=r=>r.done?c(r.value):Promise.resolve(r.value).then(a,d);t((e=e.apply(s,i)).next())});import{B as P,a as T}from"./index.c505e96f.js";import{B as A}from"./BasicForm.0ba2e15f.js";import{u as C}from"./useForm.696aa965.js";import{h as L,b as R,d as k,i as N,j as S}from"./listener.data.d61d154e.js";import{_ as $}from"./index.e84e956c.js";import{A as V,r as O,u as h,j as U,a0 as y,B as W,a1 as q,a6 as z,w as G,a4 as I}from"./vendor.5879c5ca.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";const H=V({name:"ListenerModal",components:{BasicModal:P,BasicForm:A},emits:["success","register"],setup(s,{emit:i}){const e=O(!0),[c,{resetFields:n,updateSchema:a,setFieldsValue:d,validate:t}]=C({labelWidth:100,schemas:L,showActionButtonGroup:!1}),r=o=>[{trigger:"blur",validator:(p,l)=>l?N({id:o.id,field:o.field,fieldValue:l,fieldName:o.fieldName}).then(m=>m?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(m=>Promise.reject(m)):Promise.resolve()}],[u,{setModalProps:j,closeModal:E}]=T(o=>g(this,null,function*(){yield n(),j({confirmLoading:!1}),e.value=!!(o==null?void 0:o.isUpdate);let p=o.record;const l=yield R(),m=yield k(),F={};l.forEach(f=>{F[f.value]=f.label}),a({field:"value",label:F[p.type||"class"]}),yield a([{field:"name",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"},...r({id:h(e)&&p&&p.id||"",field:"name",fieldValue:"",fieldName:"\u540D\u79F0"})]},{field:"type",componentProps:{options:l,onChange:f=>{a({field:"value",label:F[f.target.value]})}}},{field:"listenerType",componentProps:{options:m}}]),d(b({},o.record))})),v=U(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function w(){return g(this,null,function*(){try{j({confirmLoading:!0});const o=yield t();yield S(o),E(),i("success")}finally{j({confirmLoading:!1})}})}return{registerModal:u,registerForm:c,getTitle:v,handleSubmit:w}}});function J(s,i,e,c,n,a){const d=y("BasicForm"),t=y("BasicModal");return W(),q(t,I(s.$attrs,{onRegister:s.registerModal,title:s.getTitle,onOk:s.handleSubmit}),{default:z(()=>[G(d,{onRegister:s.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var be=$(H,[["render",J]]);export{be as default};