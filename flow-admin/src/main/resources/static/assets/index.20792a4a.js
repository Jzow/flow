import{_ as e}from"./TableImg.80ce785e.js";import{f as o}from"./BasicForm.2565c07e.js";import{u as t}from"./useTable.cdb834a1.js";import{g as i,c as n,s as a,d}from"./module.data.a7d14763.js";import{g as s}from"./index.24f6b3f0.js";import l from"./ModuleModal.20c73825.js";import r from"./PValueSettingModal.7ff19b76.js";import{b as c}from"./useModal.5069d636.js";import{k as u,J as p,K as m,o as f,n as b,q as g,Q as h,Y as j}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.bc6116e1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.94ff5c95.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.c68d08d4.js";/* empty css              *//* empty css              */import"./download.61f9d787.js";import"./StrengthMeter.4fd49e87.js";import"./appPrivilegeValue.4b55229b.js";const{createMessage:M}=s();var C=u({name:"Module",components:{BasicTable:e,TableAction:o,ModuleModal:l,PValueSettingModal:r},setup(){const[e,{openModal:o,setModalProps:s}]=c(),[l,{openModal:r}]=c(),[u,{reload:m,expandAll:f}]=t({title:"列表",api:i,columns:n,isTreeTable:!0,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,useSearchForm:!0,pagination:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:170,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return p((()=>{setTimeout((()=>{f()}),1e3)})),{registerTable:u,registerModal:e,registerPValueModal:l,handleCreate:function(e){s({title:"新增菜单"}),o(!0,{record:e,isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),s({title:"修改菜单"}),o(!0,{record:e,isUpdate:!0})},handleEditPValue:function(e,o){o.stopPropagation(),r(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),s({title:"新增【"+e.name+"】的子菜单"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?M.warning("有子节点，不能删除！"):d([e.id]).then((e=>{m()}))},handleSuccess:function(){m()}}}});const x=j(" 新增 ");C.render=function(e,o,t,i,n,a){const d=m("a-button"),s=m("Authority"),l=m("TableAction"),r=m("BasicTable"),c=m("ModuleModal"),u=m("PValueSettingModal");return f(),b("div",null,[g(r,{onRegister:e.registerTable},{toolbar:h((()=>[g(s,{value:"Module:0"},{default:h((()=>[g(d,{type:"primary",onClick:e.handleCreate},{default:h((()=>[x])),_:1},8,["onClick"])])),_:1})])),action:h((({record:o})=>[g(l,{actions:[{auth:"Module:0",title:"添加子节点",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{auth:"Module:6",title:"设置权限值",icon:"ant-design:setting-outlined",onClick:e.handleEditPValue.bind(null,o)},{auth:"Module:2",title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{auth:"Module:3",title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),g(u,{onRegister:e.registerPValueModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default C;