import{B as f}from"./TableImg.b1f3ef3e.js";import{l as b}from"./BasicForm.d2fa120b.js";import{u as h}from"./useTable.08d16777.js";import{a as g}from"./system.ddb5f4d1.js";import{b as C}from"./index.0e48118d.js";import{D as _,c as T,s as B}from"./DeptModal.add05e55.js";import{az as D,a as E,aB as e,o as M,i as S,p as i,B as p,C as R}from"./index.0280002f.js";import"./index.5c81bb10.js";import"./Checkbox.61b53ada.js";import"./index.c68c747e.js";import"./index.86a12b41.js";import"./eagerComputed.832d624f.js";import"./useForm.431e5593.js";import"./index.432b4215.js";import"./index.4266ca8e.js";import"./index.02c8bfe1.js";import"./useSize.71621680.js";import"./useWindowSizeFn.c0eea5f2.js";import"./useContentViewHeight.084217e3.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.e0f520b3.js";import"./transButton.fa31f1ed.js";import"./index.6db63b77.js";import"./index.81d6e7a6.js";import"./index.3486105d.js";import"./uuid.2b29000c.js";import"./index.9aa048a5.js";import"./_baseIteratee.9e690663.js";import"./get.742319ba.js";import"./DeleteOutlined.1c34c6c1.js";import"./index.a1c94158.js";import"./useRefs.f68e97c5.js";import"./Form.227e5499.js";import"./Col.32e8fee0.js";import"./useFlexGapSupport.f92812e7.js";import"./index.498da238.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.59857f8a.js";import"./FullscreenOutlined.d5490f36.js";import"./index.3dcb35e5.js";import"./fromPairs.84aabb58.js";import"./scrollTo.37a57864.js";import"./index.e5c4a097.js";/* empty css              *//* empty css               */import"./index.46b96662.js";import"./index.85e9aa1e.js";import"./index.1d3f95d6.js";import"./download.f8a78464.js";import"./base64Conver.08b9f4ec.js";import"./index.e42b0536.js";import"./index.619bca12.js";import"./uniqBy.facde3d1.js";const k=E({name:"DeptManagement",components:{BasicTable:f,DeptModal:_,TableAction:b},setup(){const[o,{openModal:r}]=C(),[m,{reload:s}]=h({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:B},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){}function a(){s()}return{registerTable:m,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function v(o,r,m,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:p(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:p(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:p(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var wo=D(k,[["render",v]]);export{wo as default};