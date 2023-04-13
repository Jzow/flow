import{B as h}from"./TableImg.b1df3b1e.js";import{l as C}from"./BasicForm.e5f615e6.js";import{u as T}from"./useTable.5fdb73d4.js";import{b as B}from"./index.88470e0c.js";import{J as g,c as _,s as y}from"./JobGradeTypeModal.ce6104c2.js";import{a as k,d as E}from"./jobGradeType.5e818a6a.js";import{az as M,a as S,aB as t,o as d,i as J,p as m,B as p,C as w,k as A,l as F}from"./index.e1964776.js";import"./index.25019af6.js";import"./Checkbox.e5f92db0.js";import"./index.3a164815.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./useForm.0cbae54a.js";import"./index.7347be3d.js";import"./index.59303775.js";import"./index.e2fe3f97.js";import"./useSize.5fbb5cc9.js";import"./useWindowSizeFn.a30c5409.js";import"./useContentViewHeight.f1248c0f.js";import"./ArrowLeftOutlined.093ec11d.js";import"./index.32320e40.js";import"./transButton.2db6a2b1.js";import"./index.99ffc75a.js";import"./index.c8515968.js";import"./index.1b277829.js";import"./uuid.2b29000c.js";import"./index.fc9b4c53.js";import"./_baseIteratee.ad9ab737.js";import"./get.6b7894e0.js";import"./DeleteOutlined.5791f905.js";import"./index.c908afe0.js";import"./useRefs.766f225b.js";import"./Form.e643baa9.js";import"./Col.e011966c.js";import"./useFlexGapSupport.5550da35.js";import"./index.41617e4d.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d4489345.js";import"./FullscreenOutlined.449a4f2d.js";import"./index.657a2808.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.23acaebd.js";import"./index.2d431917.js";/* empty css              *//* empty css               */import"./index.db622673.js";import"./index.8373f7dc.js";import"./index.27e2f730.js";import"./download.6d3644ac.js";import"./base64Conver.08b9f4ec.js";import"./index.bc6756fd.js";import"./index.ec5c8d0f.js";import"./uniqBy.fd3e0b27.js";import"./constantEnum.bf6653fb.js";const G=S({name:"JobGradeType",components:{BasicTable:h,TableAction:C,JobGradeTypeModal:g},setup(){const[o,{openModal:r}]=B(),[s,{reload:i}]=T({title:"\u5217\u8868",api:k,columns:_,formConfig:{labelWidth:120,schemas:y,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function l(){r(!0,{isUpdate:!1})}function c(e){r(!0,{record:e,isUpdate:!0})}function a(e){E([e.id]).then(()=>{i()})}function n(){setTimeout(()=>{i()},200)}return{registerTable:s,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:a,handleSuccess:n}}});function R(o,r,s,i,l,c){const a=t("a-button"),n=t("TableAction"),e=t("BasicTable"),f=t("JobGradeTypeModal");return d(),J("div",null,[m(e,{onRegister:o.registerTable},{toolbar:p(()=>[m(a,{type:"primary",onClick:o.handleCreate},{default:p(()=>[w(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:p(({column:b,record:u})=>[b.key==="action"?(d(),A(n,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u),placement:"left"}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"]),m(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Do=M(G,[["render",R]]);export{Do as default};