import{_ as e}from"./TableImg.5efff65a.js";import{g as o}from"./BasicForm.950a284a.js";import{u as t}from"./useTable.84e8a1c5.js";import{_ as i,g as n,c as a,s as r,d as s}from"./AreaModal.bfcb256b.js";import{h as d}from"./index.1bc1d740.js";import{b as l}from"./index.037585c2.js";import{z as c,Z as p,D as m,F as f,w as u,a3 as b,a9 as j}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.7635a38a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.072b7c77.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";const{createMessage:h}=d();var g=c({name:"Area",components:{BasicTable:e,TableAction:o,AreaModal:i},setup(){const[e,{openModal:o,setModalProps:i}]=l(),[d,{reload:c}]=t({title:"列表",api:n,columns:a,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,isTreeTable:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,showTableSetting:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(){i({title:"新增区域"}),o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),i({title:"修改区域"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),i({title:"新增【"+e.name+"】的子区域"}),e={pcode:e.code},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e,o){o.stopPropagation(),e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):s(e.code).then((()=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const x=j(" 新增 ");g.render=function(e,o,t,i,n,a){const r=p("a-button"),s=p("TableAction"),d=p("BasicTable"),l=p("AreaModal");return m(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(s,{actions:[{tooltip:"添加子节点",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(l,{onRegister:e.registerModal},null,8,["onRegister"])])};export default g;