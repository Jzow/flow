import{B as l}from"./TableImg.b1df3b1e.js";import"./BasicForm.e5f615e6.js";import{u as c}from"./useTable.5fdb73d4.js";import{getBasicColumns as d}from"./tableData.38d0f3c2.js";import{P as f}from"./index.7347be3d.js";import{d as _}from"./table.ea42bf0a.js";import{az as B,a as g,aB as e,o as C,k as b,B as t,p as i,C as n}from"./index.e1964776.js";import"./index.25019af6.js";import"./Checkbox.e5f92db0.js";import"./index.3a164815.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./useForm.0cbae54a.js";import"./index.99ffc75a.js";import"./index.c8515968.js";import"./index.1b277829.js";import"./uuid.2b29000c.js";import"./index.fc9b4c53.js";import"./_baseIteratee.ad9ab737.js";import"./get.6b7894e0.js";import"./DeleteOutlined.5791f905.js";import"./index.c908afe0.js";import"./useRefs.766f225b.js";import"./Form.e643baa9.js";import"./Col.e011966c.js";import"./useFlexGapSupport.5550da35.js";import"./useSize.5fbb5cc9.js";import"./useWindowSizeFn.a30c5409.js";import"./index.88470e0c.js";import"./FullscreenOutlined.449a4f2d.js";import"./index.41617e4d.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d4489345.js";import"./index.657a2808.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.23acaebd.js";import"./index.2d431917.js";/* empty css              *//* empty css               */import"./index.db622673.js";import"./transButton.2db6a2b1.js";import"./index.8373f7dc.js";import"./index.27e2f730.js";import"./download.6d3644ac.js";import"./base64Conver.08b9f4ec.js";import"./index.bc6756fd.js";import"./index.ec5c8d0f.js";import"./uniqBy.fd3e0b27.js";import"./index.59303775.js";import"./index.e2fe3f97.js";import"./useContentViewHeight.f1248c0f.js";import"./ArrowLeftOutlined.093ec11d.js";import"./index.32320e40.js";const h=g({components:{BasicTable:l,PageWrapper:f},setup(){const[o,{reload:r}]=c({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:_,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}});function k(o,r,p,m,T,F){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),b(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[n(" \u5237\u65B0\u5F53\u524D\u9875 ")]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Ro=B(h,[["render",k]]);export{Ro as default};