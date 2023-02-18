import{B as v}from"./TableImg.8ad498cd.js";import{l as M}from"./BasicForm.027cbf67.js";import{u as F}from"./useTable.7536e350.js";import{j as R,k as I,l as P,m as A}from"./dictionary.ae0290c0.js";import{P as $}from"./index.c79f76d5.js";import{az as N,a as V,x as W,aB as r,i as f,j,q as b,C as h,l as g,D as K,m as C,H as U}from"./index.e61ad282.js";import{b as q}from"./index.a492e5cd.js";import z from"./DictionaryModal.5bb172e9.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./useForm.81406efc.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.6e0a0264.js";import"./uuid.2b29000c.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./useWindowSizeFn.27de1b1b.js";import"./index.9f50e000.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5bbc1139.js";import"./FullscreenOutlined.3a424424.js";import"./index.e8295ad9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9bc7999.js";import"./index.ba1457ae.js";/* empty css              *//* empty css               */import"./index.9233793b.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./constantEnum.bf6653fb.js";const{createMessage:H}=U(),L=V({name:"DictionaryTable",components:{BasicTable:v,DictionaryModal:z,PageWrapper:$,TableAction:M},setup(e,{emit:l}){const[y,{openModal:c,setModalProps:s}]=q(),i=W(""),[p,{reload:n,setProps:u,setTableData:m,setSelectedRowKeys:d}]=F({title:"\u6570\u636E\u5B57\u5178\u5217\u8868",api:R,columns:I,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function a(){if(i.value===""){H.warning("\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B\uFF01",2);return}s({title:"\u65B0\u589E\u5B57\u5178"}),c(!0,{record:{dicTypeId:i.value},isUpdate:!1})}function T(t){i.value=t,u({searchInfo:{dicTypeId:t}}),n({page:1})}function B(){m([]),i.value=""}function D(t,o){o.stopPropagation(),s({title:"\u4FEE\u6539\u5B57\u5178"}),c(!0,{record:t,isUpdate:!0})}function _(t,o){o.stopPropagation()}function k(t){A(t.id).then(()=>{n()})}function S(){n()}function E(t){d([t.id]),l("handleSelect",t.id)}function w({keys:t,rows:o}){o&&o.length>0&&l("handleSelect",o[0].id)}return{registerTable:p,registerModal:y,dictTypeId:i,handleDeleteStop:_,clickDictionary:E,changeDictionary:w,filterByDictType:T,cleanTableData:B,handleCreate:a,handleEdit:D,handleDelete:k,handleSuccess:S}}}),O={class:"bg-white overflow-hidden dictionary"};function G(e,l,y,c,s,i){const p=r("a-button"),n=r("TableAction"),u=r("BasicTable"),m=r("DictionaryModal");return f(),j("div",O,[b(u,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary},{toolbar:h(()=>[e.dictTypeId!==""?(f(),g(p,{key:0,type:"primary",onClick:e.handleCreate},{default:h(()=>[K("\u65B0\u589E")]),_:1},8,["onClick"])):C("",!0)]),bodyCell:h(({column:d,record:a})=>[d.key==="action"?(f(),g(n,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,a),popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,a),placement:"left"}}]},null,8,["actions"])):C("",!0)]),_:1},8,["onRegister","onRowClick","onSelectionChange"]),b(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Je=N(L,[["render",G]]);export{Je as default};