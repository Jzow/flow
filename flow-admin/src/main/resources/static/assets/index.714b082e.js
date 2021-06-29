import{_ as e}from"./TableImg.840b2332.js";import{f as t}from"./BasicForm.d12ec528.js";import{u as o}from"./useTable.14907d98.js";import{g as n}from"./system.39b71cb8.js";import{_ as i}from"./PageWrapper.0a593267.js";import s from"./DeptTree.c63a7ca9.js";import{b as a}from"./useModal.40813107.js";import{_ as r,c,s as d}from"./AccountModal.857e1739.js";import{k as l,K as m,o as p,n as u,Q as f,q as b,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";import"./index.68bdfa67.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.e79165c2.js";import"./useContextMenu.edb2fdbf.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:i,DeptTree:s,AccountModal:r,TableAction:t},setup(){const[e,{openModal:t}]=a(),[i,{reload:s}]=o({title:"账号列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:d},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:i,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=j("新增账号");x.render=function(e,t,o,n,i,s){const a=m("DeptTree"),r=m("a-button"),c=m("TableAction"),d=m("BasicTable"),l=m("AccountModal"),j=m("PageWrapper");return p(),u(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:f((()=>[b(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),b(d,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:f((()=>[b(r,{type:"primary",onClick:e.handleCreate},{default:f((()=>[g])),_:1},8,["onClick"])])),action:f((({record:t})=>[b(c,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;