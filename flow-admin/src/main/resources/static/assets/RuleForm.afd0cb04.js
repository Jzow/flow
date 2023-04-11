var f=(e,o,r)=>new Promise((m,i)=>{var d=u=>{try{l(r.next(u))}catch(s){i(s)}},t=u=>{try{l(r.throw(u))}catch(s){i(s)}},l=u=>u.done?m(u.value):Promise.resolve(u.value).then(d,t);l((r=r.apply(e,o)).next())});import{B as b}from"./BasicForm.d2fa120b.js";import{u as g}from"./useForm.431e5593.js";import{az as A,a as P,cF as E,aB as B,o as _,k,B as n,n as v,p,C as c,G as D}from"./index.0280002f.js";import{P as h}from"./index.432b4215.js";import{i as V}from"./system.ddb5f4d1.js";/* empty css              *//* empty css               */import"./index.498da238.js";import"./index.5c81bb10.js";import"./Checkbox.61b53ada.js";import"./index.c68c747e.js";import"./index.3486105d.js";import"./index.6db63b77.js";import"./index.81d6e7a6.js";import"./index.46b96662.js";import"./get.742319ba.js";import"./index.86a12b41.js";import"./eagerComputed.832d624f.js";import"./index.9aa048a5.js";import"./_baseIteratee.9e690663.js";import"./DeleteOutlined.1c34c6c1.js";import"./index.a1c94158.js";import"./useRefs.f68e97c5.js";import"./Form.227e5499.js";import"./Col.32e8fee0.js";import"./useFlexGapSupport.f92812e7.js";import"./useSize.71621680.js";import"./transButton.fa31f1ed.js";import"./index.85e9aa1e.js";import"./index.0e48118d.js";import"./useWindowSizeFn.c0eea5f2.js";import"./FullscreenOutlined.d5490f36.js";import"./index.1d3f95d6.js";import"./index.3dcb35e5.js";import"./uuid.2b29000c.js";import"./download.f8a78464.js";import"./base64Conver.08b9f4ec.js";import"./index.e42b0536.js";import"./index.619bca12.js";import"./uniqBy.facde3d1.js";import"./index.4266ca8e.js";import"./index.02c8bfe1.js";import"./useContentViewHeight.084217e3.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.e0f520b3.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,o)=>f(void 0,null,function*(){return o?o==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,o){return new Promise((r,m)=>{V(o).then(()=>r()).catch(i=>{m(i.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],q=P({components:{BasicForm:b,CollapseContainer:E,PageWrapper:h},setup(){const{createMessage:e}=D(),[o,{validateFields:r,clearValidate:m,getFieldsValue:i,resetFields:d,setFieldsValue:t}]=g({labelWidth:120,schemas:C,actionColOptions:{span:24}});function l(){return f(this,null,function*(){try{const a=yield r()}catch(a){}})}function u(){return f(this,null,function*(){m()})}function s(){const a=i();e.success("values:"+JSON.stringify(a))}function F(){t({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:o,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:s,setFormValues:F,validateForm:l,resetValidate:u,resetFields:d}}}),y={class:"mb-4"};function S(e,o,r,m,i,d){const t=B("a-button"),l=B("BasicForm"),u=B("CollapseContainer"),s=B("PageWrapper");return _(),k(s,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[v("div",y,[p(t,{onClick:e.validateForm,class:"mr-2"},{default:n(()=>[c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetValidate,class:"mr-2"},{default:n(()=>[c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F ")]),_:1},8,["onClick"]),p(t,{onClick:e.getFormValues,class:"mr-2"},{default:n(()=>[c(" \u83B7\u53D6\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.setFormValues,class:"mr-2"},{default:n(()=>[c(" \u8BBE\u7F6E\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetFields,class:"mr-2"},{default:n(()=>[c(" \u91CD\u7F6E ")]),_:1},8,["onClick"])]),p(u,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[p(l,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ke=A(q,[["render",S]]);export{ke as default};