import{_ as e}from"./TableImg.5bb7b2c3.js";import{g as t}from"./BasicForm.3145f6c6.js";import{u as i}from"./useTable.4693838b.js";import{g as o,d as n}from"./dept.1c2b400c.js";import{P as a}from"./index.22ff4fb2.js";import r from"./DictTypeTree.d1d7d1c8.js";import s from"./DictionaryTable.e88d86dd.js";import c from"./DictionaryItemTable.e8f15463.js";import{h as d}from"./index.8bbed969.js";import{b as l}from"./index.dcc0b3b8.js";import{k as m,l as p}from"./dictionary.0e47b676.js";import{y as f,r as b,Z as u,B as j,F as x,a2 as y,v as T}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.f6c4fcf0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.9bed7e43.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              *//* empty css              */import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c0fc876b.js";import"./Tree.vue_vue&type=style&index=0&lang.f01fe83c.js";import"./useContextMenu.d77d7c90.js";import"./dicType.4d73f94b.js";import"./DictionaryModal.1b16682a.js";import"./DictionaryItemModal.de362ccd.js";const{createMessage:h}=d();var D=f({components:{BasicTable:e,PageWrapper:a,DictTypeTree:r,DictionaryTable:s,DictionaryItemTable:c,TableAction:t},setup(){const[e,{openModal:t}]=l(),a=b(),r=b(),[s,{reload:c}]=i({title:"列表",api:o,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictionaryRef:a,dictionaryItemRef:r,registerTable:s,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDictSelect:function(e){e&&r.value.filterByDict(e)},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):n([e.id]).then((()=>{c()}))},handleSuccess:function(){c()},handleDictTypeSelect:function(e=""){e?(a.value.filterByDictType(e),r.value.cleanTableData()):a.value.cleanTableData()}}}});D.render=function(e,t,i,o,n,a){const r=u("DictTypeTree"),s=u("DictionaryTable"),c=u("DictionaryItemTable"),d=u("PageWrapper");return j(),x(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:y((()=>[T(r,{class:"w-1/5 xl:w-1/5",onSelect:e.handleDictTypeSelect},null,8,["onSelect"]),T(s,{ref:"dictionaryRef",onHandleSelect:e.handleDictSelect,class:"w-2/5 xl:w-2/5"},null,8,["onHandleSelect"]),T(c,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)])),_:1})};export default D;