import{B as a,a as n}from"./index.3e2966d0.js";import{B as c}from"./BasicForm.e5f615e6.js";import{u as l}from"./useForm.0cbae54a.js";import{a as u,az as f,aB as i,o as B,k as d,B as _,n as g,p as w,aC as F}from"./index.e1964776.js";import"./index.07aa88cb.js";import"./ArrowLeftOutlined.093ec11d.js";/* empty css              *//* empty css               */import"./index.41617e4d.js";import"./index.25019af6.js";import"./Checkbox.e5f92db0.js";import"./index.3a164815.js";import"./index.1b277829.js";import"./index.99ffc75a.js";import"./index.c8515968.js";import"./index.db622673.js";import"./get.6b7894e0.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./index.fc9b4c53.js";import"./_baseIteratee.ad9ab737.js";import"./DeleteOutlined.5791f905.js";import"./index.c908afe0.js";import"./useRefs.766f225b.js";import"./Form.e643baa9.js";import"./Col.e011966c.js";import"./useFlexGapSupport.5550da35.js";import"./useSize.5fbb5cc9.js";import"./transButton.2db6a2b1.js";import"./index.8373f7dc.js";import"./index.88470e0c.js";import"./useWindowSizeFn.a30c5409.js";import"./FullscreenOutlined.449a4f2d.js";import"./index.27e2f730.js";import"./index.657a2808.js";import"./uuid.2b29000c.js";import"./download.6d3644ac.js";import"./base64Conver.08b9f4ec.js";import"./index.bc6756fd.js";import"./index.ec5c8d0f.js";import"./uniqBy.fd3e0b27.js";const p=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}],h=u({components:{BasicDrawer:a,BasicForm:c},setup(){const[o,{setFieldsValue:t}]=l({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[e]=n(r=>{t({field2:r.data,field1:r.info})});return{register:e,schemas:p,registerForm:o}}});function D(o,t,e,r,C,$){const m=i("BasicForm"),s=i("BasicDrawer");return B(),d(s,F(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:_(()=>[g("div",null,[w(m,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}var lo=f(h,[["render",D]]);export{lo as default};