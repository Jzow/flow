import{B as w}from"./TableImg.00c4ed04.js";import"./BasicForm.51e3eb56.js";import{getBasicColumns as p,getBasicShortColumns as D}from"./tableData.38d0f3c2.js";import{az as E,a as _,w as S,aB as f,o as A,i as T,n as C,p as u,B as i,C as n,G as h,j as L}from"./index.da587afe.js";import{d as y}from"./table.3cb04cfa.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./useForm.d201bd46.js";import"./index.c0d22213.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useSize.dbee3c08.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";import"./transButton.1d3b575b.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.9d0fc194.js";import"./uuid.2b29000c.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./get.40c34cfc.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./useRefs.1aead304.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./index.e8eb4b57.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.a64c8a60.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.46184af0.js";import"./index.813f510f.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.37d32e36.js";import"./index.176a852f.js";/* empty css              *//* empty css               */import"./index.b3a5d1df.js";import"./index.5d1da0c4.js";import"./index.72d53e09.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";const K=_({components:{BasicTable:w},setup(){const o=S(null),{createMessage:a}=h();function e(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function s(){e().setLoading(!0),setTimeout(()=>{e().setLoading(!1)},1e3)}function r(){e().setColumns(D())}function c(){e().setColumns(p()),e().reload({page:1})}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getColumns()}function l(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getDataSource()}function g(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getRawDataSource()}function d(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getPaginationRef()}function F(){e().setPagination({current:2}),e().reload()}function B(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getSelectRows()}function k(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getSelectRowKeys()}function b(){e().setSelectedRowKeys(["0","1","2"])}function R(){e().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:s,changeColumns:r,reloadTable:c,getColumn:t,getTableData:l,getTableRawData:g,getPagination:d,setPaginationInfo:F,getSelectRowList:B,getSelectRowKeyList:k,setSelectedRowKeyList:b,clearSelect:R}}}),P={class:"p-4"},v={class:"mb-4"},$={class:"mb-4"};function M(o,a,e,s,r,c){const t=f("a-button"),l=f("BasicTable");return A(),T("div",P,[C("div",v,[u(t,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[n(" \u8FD8\u539F ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[n(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[n(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[n(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[n(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),C("div",$,[u(t,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[n(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[n(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),u(l,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Mo=E(K,[["render",M]]);export{Mo as default};