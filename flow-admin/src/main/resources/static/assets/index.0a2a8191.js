import{_ as e}from"./TableImg.5453971a.js";import{f as t}from"./BasicForm.f252c294.js";import{u as o}from"./useTable.da9f7dda.js";import{g as n}from"./system.af21eab8.js";import{_ as i}from"./PageWrapper.e77aca1b.js";import s from"./DeptTree.3fe243e2.js";import{b as a}from"./useModal.11986c6c.js";import{_ as r,c as d,s as c}from"./AccountModal.818e8d0d.js";import{k as l,K as m,o as p,n as u,Q as f,q as j,Y as b}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.7c89f4ac.js";import"./index.6992208b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.e73ef165.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";import"./usePageContext.87ea5c45.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.a4a9c706.js";import"./useContextMenu.9975a880.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:i,DeptTree:s,AccountModal:r,TableAction:t},setup(){const[e,{openModal:t}]=a(),[i,{reload:s}]=o({title:"账号列表",api:n,columns:d,formConfig:{labelWidth:120,schemas:c},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:i,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=b("新增账号");x.render=function(e,t,o,n,i,s){const a=m("DeptTree"),r=m("a-button"),d=m("TableAction"),c=m("BasicTable"),l=m("AccountModal"),b=m("PageWrapper");return p(),u(b,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:f((()=>[j(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),j(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:f((()=>[j(r,{type:"primary",onClick:e.handleCreate},{default:f((()=>[g])),_:1},8,["onClick"])])),action:f((({record:t})=>[j(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;