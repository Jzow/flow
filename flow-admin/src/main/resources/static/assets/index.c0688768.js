import{_ as e,a as t}from"./useModal.5069d636.js";import{_ as o}from"./TableImg.80ce785e.js";import{_ as s,f as a}from"./BasicForm.2565c07e.js";import{u as n}from"./useTable.cdb834a1.js";import{g as r}from"./role.b35f2cfc.js";import{_ as i}from"./PageWrapper.f686cbe0.js";import l from"./CompanyTree.9c75f1b4.js";import{k as d,f as c,K as m,o as p,n as f,Q as u,q as j,N as b}from"./vendor.56d2c57f.js";import"./index.24f6b3f0.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              */import"./useForm.bc6116e1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.94ff5c95.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.c68d08d4.js";/* empty css              *//* empty css              */import"./download.61f9d787.js";import"./StrengthMeter.4fd49e87.js";import"./usePageContext.33476434.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.58381589.js";import"./useContextMenu.cd4cde08.js";import"./company.62e8d1b3.js";const x=[{title:"名称",dataIndex:"name",width:150,align:"left"},{title:"标识",dataIndex:"sn",width:120,align:"left"},{title:"公司",dataIndex:"companyName",width:120,align:"left"}],h=[{field:"keyword",label:"关键字",component:"Input",labelWidth:60,colProps:{span:12,lg:{span:12,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}];var g=d({name:"RoleSelector",components:{BasicModal:e,BasicForm:s,BasicTable:o,PageWrapper:i,CompanyTree:l,TableAction:a},setup(e,{emit:o}){let s="";const[a,{setModalProps:i,closeModal:l}]=t((e=>{return t=this,o=null,a=function*(){i({wrapClassName:"selector-content"}),s=e.personalId,m({searchInfo:{personalId:s}})},new Promise(((e,s)=>{var n=e=>{try{i(a.next(e))}catch(t){s(t)}},r=e=>{try{i(a.throw(e))}catch(t){s(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);i((a=a.apply(t,o)).next())}));var t,o,a})),[d,{reload:m,getSelectRows:p}]=n({title:"",api:r,immediate:!1,columns:x,rowSelection:{type:"checkbox",columnWidth:30},formConfig:{labelWidth:60,schemas:h,showResetButton:!1,showAdvancedButton:!1,autoSubmitOnEnter:!0},size:"small",canResize:!1,useSearchForm:!0,showTableSetting:!1,showIndexColumn:!1,bordered:!0,scroll:{y:300}});return{registerTable:d,registerModal:a,getTitle:c((()=>"选择角色")),handleSubmit:function(){const e=p();o("success",e),l()},handleSuccess:function(){m()},handleSelect:function(e){let t={companyId:e?e.id:"",personalId:s};m({searchInfo:t})}}}});g.render=function(e,t,o,s,a,n){const r=m("CompanyTree"),i=m("BasicTable"),l=m("PageWrapper"),d=m("BasicModal");return p(),f(d,b({wrapClassName:"selector-body"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:u((()=>[j(l,{dense:"",contentClass:"flex"},{default:u((()=>[j(r,{class:"w-1/4 xl:w-3/10",onSelect:e.handleSelect},null,8,["onSelect"]),j(i,{onRegister:e.registerTable,class:"w-3/4 xl:w-7/10"},null,8,["onRegister"])])),_:1})])),_:1},16,["onRegister","title","onOk"])};export default g;