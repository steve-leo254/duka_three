import{r as a,R as h}from"./react-B9i9embs.js";import{C as b,L as v,B}from"./chart.js-BtcCYePA.js";const C="label";function m(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function I(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function y(t,e){t.labels=e}function E(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:C;const u=[];t.datasets=e.map(n=>{const c=t.datasets.find(i=>i[s]===n[s]);return!c||!n.data||u.includes(c)?{...n}:(u.push(c),Object.assign(c,n),c)})}function K(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C;const s={labels:[],datasets:[]};return y(s,t.labels),E(s,t.datasets,e),s}function O(t,e){const{height:s=150,width:u=300,redraw:n=!1,datasetIdKey:c,type:i,data:o,options:f,plugins:w=[],fallbackContent:L,updateMode:p,...j}=t,l=a.useRef(null),r=a.useRef(),d=()=>{l.current&&(r.current=new b(l.current,{type:i,data:K(o,c),options:f&&{...f},plugins:w}),m(e,r.current))},g=()=>{m(e,null),r.current&&(r.current.destroy(),r.current=null)};return a.useEffect(()=>{!n&&r.current&&f&&I(r.current,f)},[n,f]),a.useEffect(()=>{!n&&r.current&&y(r.current.config.data,o.labels)},[n,o.labels]),a.useEffect(()=>{!n&&r.current&&o.datasets&&E(r.current.config.data,o.datasets,c)},[n,o.datasets]),a.useEffect(()=>{r.current&&(n?(g(),setTimeout(d)):r.current.update(p))},[n,f,o.labels,o.datasets,p]),a.useEffect(()=>{r.current&&(g(),setTimeout(d))},[i]),a.useEffect(()=>(d(),()=>g()),[]),h.createElement("canvas",Object.assign({ref:l,role:"img",height:s,width:u},j),L)}const T=a.forwardRef(O);function R(t,e){return b.register(e),a.forwardRef((s,u)=>h.createElement(T,Object.assign({},s,{ref:u,type:t})))}const M=R("line",v),P=R("bar",B);export{P as B,M as L};
