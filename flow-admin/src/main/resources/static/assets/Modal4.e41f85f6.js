import{B as l,a as c}from"./index.88470e0c.js";import{B as d}from"./BasicForm.e5f615e6.js";import{u}from"./useForm.0cbae54a.js";import{a as f,w as B,az as g,an as h,aB as p,o as _,k as C,B as b,n as R,p as V,aC as v}from"./index.e1964776.js";import"./useWindowSizeFn.a30c5409.js";import"./FullscreenOutlined.449a4f2d.js";/* empty css              *//* empty css               */import"./index.41617e4d.js";import"./index.25019af6.js";import"./Checkbox.e5f92db0.js";import"./index.3a164815.js";import"./index.1b277829.js";import"./index.99ffc75a.js";import"./index.c8515968.js";import"./index.db622673.js";import"./get.6b7894e0.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./index.fc9b4c53.js";import"./_baseIteratee.ad9ab737.js";import"./DeleteOutlined.5791f905.js";import"./index.c908afe0.js";import"./useRefs.766f225b.js";import"./Form.e643baa9.js";import"./Col.e011966c.js";import"./useFlexGapSupport.5550da35.js";import"./useSize.5fbb5cc9.js";import"./transButton.2db6a2b1.js";import"./index.8373f7dc.js";import"./index.27e2f730.js";import"./index.657a2808.js";import"./uuid.2b29000c.js";import"./download.6d3644ac.js";import"./base64Conver.08b9f4ec.js";import"./index.bc6756fd.js";import"./index.ec5c8d0f.js";import"./uniqBy.fd3e0b27.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return _(),C(m,v(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[R("div",M,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var co=g(F,[["render",D]]);export{co as default};