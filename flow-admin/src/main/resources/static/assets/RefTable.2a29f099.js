import{B as w}from"./TableImg.b1df3b1e.js";import"./BasicForm.e5f615e6.js";import{getBasicColumns as p,getBasicShortColumns as D}from"./tableData.38d0f3c2.js";import{az as E,a as _,w as S,aB as f,o as A,i as T,n as C,p as u,B as i,C as n,G as h,j as L}from"./index.e1964776.js";import{d as y}from"./table.ea42bf0a.js";import"./index.25019af6.js";import"./Checkbox.e5f92db0.js";import"./index.3a164815.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./useForm.0cbae54a.js";import"./index.7347be3d.js";import"./index.59303775.js";import"./index.e2fe3f97.js";import"./useSize.5fbb5cc9.js";import"./useWindowSizeFn.a30c5409.js";import"./useContentViewHeight.f1248c0f.js";import"./ArrowLeftOutlined.093ec11d.js";import"./index.32320e40.js";import"./transButton.2db6a2b1.js";import"./index.99ffc75a.js";import"./index.c8515968.js";import"./index.1b277829.js";import"./uuid.2b29000c.js";import"./index.fc9b4c53.js";import"./_baseIteratee.ad9ab737.js";import"./get.6b7894e0.js";import"./DeleteOutlined.5791f905.js";import"./index.c908afe0.js";import"./useRefs.766f225b.js";import"./Form.e643baa9.js";import"./Col.e011966c.js";import"./useFlexGapSupport.5550da35.js";import"./index.88470e0c.js";import"./FullscreenOutlined.449a4f2d.js";import"./index.41617e4d.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d4489345.js";import"./index.657a2808.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.23acaebd.js";import"./index.2d431917.js";/* empty css              *//* empty css               */import"./index.db622673.js";import"./index.8373f7dc.js";import"./index.27e2f730.js";import"./download.6d3644ac.js";import"./base64Conver.08b9f4ec.js";import"./index.bc6756fd.js";import"./index.ec5c8d0f.js";import"./uniqBy.fd3e0b27.js";const K=_({components:{BasicTable:w},setup(){const o=S(null),{createMessage:a}=h();function e(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function s(){e().setLoading(!0),setTimeout(()=>{e().setLoading(!1)},1e3)}function r(){e().setColumns(D())}function c(){e().setColumns(p()),e().reload({page:1})}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getColumns()}function l(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getDataSource()}function g(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getRawDataSource()}function d(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getPaginationRef()}function F(){e().setPagination({current:2}),e().reload()}function B(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getSelectRows()}function k(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getSelectRowKeys()}function b(){e().setSelectedRowKeys(["0","1","2"])}function R(){e().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:s,changeColumns:r,reloadTable:c,getColumn:t,getTableData:l,getTableRawData:g,getPagination:d,setPaginationInfo:F,getSelectRowList:B,getSelectRowKeyList:k,setSelectedRowKeyList:b,clearSelect:R}}}),P={class:"p-4"},v={class:"mb-4"},$={class:"mb-4"};function M(o,a,e,s,r,c){const t=f("a-button"),l=f("BasicTable");return A(),T("div",P,[C("div",v,[u(t,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[n(" \u8FD8\u539F ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[n(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[n(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[n(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[n(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),C("div",$,[u(t,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[n(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[n(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),u(l,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Mo=E(K,[["render",M]]);export{Mo as default};