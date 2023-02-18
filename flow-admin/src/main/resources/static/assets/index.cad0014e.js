import{B as g}from"./TableImg.6b85bf08.js";import{l as B}from"./BasicForm.d8aa86d3.js";import{u as b}from"./useTable.60e7369f.js";import{g as E,d as y}from"./category.2f13f220.js";import{C as F,c as _,s as k}from"./CategoryModal.1fa2b808.js";import{az as T,a as D,aB as a,i as h,j as M,q as c,C as d,D as S,l as w,m as A,H as R}from"./index.ef013507.js";import{b as P}from"./index.4ff668bf.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./useForm.d7bb3373.js";import"./index.4dfdb4ab.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0b0495b0.js";import"./uuid.2b29000c.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./get.fbc063d7.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./index.8a7cb11f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.01e40c90.js";import"./FullscreenOutlined.d97e6502.js";import"./index.27c2d820.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f0dd617b.js";import"./index.eaeab232.js";/* empty css              *//* empty css               */import"./index.0e08ed6e.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";import"./company.ba5e6b72.js";const{createMessage:v}=R(),$=D({name:"Category",components:{BasicTable:g,TableAction:B,CategoryModal:F},setup(){const[o,{openModal:i,setModalProps:n}]=P(),[C,{reload:r}]=b({title:"\u5217\u8868",api:E,columns:_,formConfig:{labelWidth:120,schemas:k,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function f(t){n({title:"\u65B0\u589E\u6D41\u7A0B\u5206\u7C7B"}),i(!0,{isUpdate:!1})}function u(t,e){e.stopPropagation(),n({title:"\u4FEE\u6539\u6D41\u7A0B\u5206\u7C7B"}),i(!0,{record:t,isUpdate:!0})}function s(t,e){e.stopPropagation(),n({title:"\u65B0\u589E\u3010"+t.name+"\u3011\u7684\u5B50\u5206\u7C7B"}),t={pid:t.id,frontShow:1},i(!0,{record:t,isUpdate:!0})}function l(t,e){if(e.stopPropagation(),t.children&&t.children.length>0){v.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}y([t.id]).then(I=>{r()})}function p(){r()}function m(){setTimeout(()=>{r()},200)}return{registerTable:C,registerModal:o,handleCreate:f,handleEdit:u,handleCreateChild:s,handleDelete:l,handleSuccess:m,doSearch:p}}});function x(o,i,n,C,r,f){const u=a("a-button"),s=a("TableAction"),l=a("BasicTable"),p=a("CategoryModal");return h(),M("div",null,[c(l,{onRegister:o.registerTable},{toolbar:d(()=>[c(u,{type:"primary",onClick:o.handleCreate},{default:d(()=>[S(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:d(({column:m,record:t})=>[m.key==="action"?(h(),w(s,{key:0,actions:[{tooltip:"\u6DFB\u52A0\u5B50\u5206\u7C7B",icon:"ant-design:plus-outlined",onClick:o.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,t),placement:"left"}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister"]),c(p,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Nt=T($,[["render",x]]);export{Nt as default};