import{r as o,j as e,R as v}from"./react-B9i9embs.js";import{c as y}from"./react-dom-BKZ3Gdvp.js";/* empty css                  */import{L as h,B as S}from"./react-router-dom-DN9UlXJN.js";import{a as u}from"./axios-B4uVmeYG.js";import{$ as k}from"./jquery-BoIA6lE9.js";import"./datatables.net-BTzIzwAy.js";import{a as C,O as g,d as P,e as F,f as x}from"./react-router-DGqoj8Kj.js";import{B as p,a as w,b as B,c as D,d as I,e as L,f as b,g as _,h as O,i as E,j as R,k as T}from"./react-icons-hTFDGKV7.js";import"./chart.js-BtcCYePA.js";import{L as q,B as A}from"./react-chartjs-2-kzk-vnyI.js";/* empty css                          */import"./scheduler-CzFDRTuY.js";import"./@remix-run-B-RBrVrq.js";import"./@kurkle-BZxJdD1U.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(t){if(t.ep)return;t.ep=!0;const l=n(t);fetch(t.href,l)}})();const $=()=>{const[s,r]=o.useState([]),n=o.useRef(null);return o.useEffect(()=>{(async()=>{try{const l={"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},i=await u.get("http://127.0.0.1/:8000/products",{headers:l});console.log("kiuuuuuuuu",i),r(i.data),k(n.current).DataTable()}catch(t){console.error("Error fetching products:",t)}})()},[]),e.jsxs("div",{className:"container3",children:[e.jsx("h2",{className:"mt-3",children:"Products"}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-striped table-bordered",ref:n,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"cost"}),e.jsx("th",{children:"Image"})]})}),e.jsx("tbody",{children:s.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:a.name}),e.jsx("td",{children:a.stock_quantity}),e.jsxs("td",{children:["$",a.price]}),e.jsxs("td",{children:["$",a.cost]}),e.jsx("td",{children:e.jsx("img",{src:a.image_url,alt:`Product ${a.id}`,style:{width:"200px",height:"80px",objectFit:"contain"},className:"img-fluid"})})]},a.id))})]})})]})},z=()=>{const s=C(),[r,n]=o.useState(""),[a,t]=o.useState(""),l=async i=>{i.preventDefault();let d={user_name:r,user_password:a};try{const j=(await u.post("http://127.0.0.1/:8000/login",d,{headers:{"Content-Type":"application/json"}})).data;localStorage.setItem("token",j.access_token),localStorage.setItem("isLoggedIn","true"),s("/")}catch(c){console.error("Error logging in:",c)}};return e.jsx(e.Fragment,{children:e.jsx("main",{className:"main",id:"top",children:e.jsxs("section",{className:"text-center py-0",children:[e.jsx("div",{className:"bg-holder overlay overlay-2",style:{backgroundImage:"url(src/assets/images/header-5.jpg)"}}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row min-vh-100 align-items-center",children:e.jsxs("div",{className:"col-md-8 col-lg-5 mx-auto","data-zanim-timeline":"{}","data-zanim-trigger":"scroll",children:[e.jsx("div",{className:"mb-5","data-zanim-xs":'{"delay":0,"duration":1}',children:e.jsx("a",{href:"../index.html",children:e.jsx("img",{src:"src/assets/images/logo-light.png",alt:"logo"})})}),e.jsx("div",{className:"card","data-zanim-xs":'{"delay":0.1,"duration":1}',children:e.jsxs("div",{className:"card-body p-md-5",children:[e.jsx("h4",{className:"text-uppercase fs-0 fs-md-1",children:"Login"}),e.jsxs("form",{onSubmit:l,className:"text-start mt-4",children:[e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"input-group",children:[e.jsx("div",{className:"input-group-text bg-100",children:e.jsx("span",{className:"far fa-user"})}),e.jsx("input",{className:"form-control",type:"text",placeholder:"Username","aria-label":"Username input",value:r,onChange:i=>n(i.target.value)})]})}),e.jsx("div",{className:"col-12 mt-2 mt-sm-4",children:e.jsxs("div",{className:"input-group",children:[e.jsx("div",{className:"input-group-text bg-100",children:e.jsx("span",{className:"fas fa-lock"})}),e.jsx("input",{className:"form-control",type:"password",placeholder:"Password","aria-label":"Password input",value:a,onChange:i=>t(i.target.value)})]})})]}),e.jsxs("div",{className:"row align-items-center mt-3",children:[e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"rememberMe",type:"checkbox",value:""}),e.jsx("label",{className:"form-check-label text-500",htmlFor:"rememberMe",children:"Remember Me"})]})}),e.jsx("div",{className:"col-6 mt-2 mt-sm-3",children:e.jsx("button",{className:"btn btn-primary w-100",type:"submit",children:"Login"})}),e.jsx("div",{className:"col-6 mt-2 mt-sm-3",children:e.jsx(h,{to:"/register",className:"btn btn-primary w-100",children:"Register"})})]})]})]})})]})})})]})})})};function M(){const[s,r]=o.useState(!0),n=()=>{r(!s)};return e.jsxs("div",{className:"layout",children:[e.jsx("nav",{className:`navbar navbar-expand-lg navbar-dark bg-dark ${s?"collapsed":""}`,children:e.jsxs("div",{className:"container-fluid",children:[e.jsx(h,{className:"navbar-brand",to:"/",children:"Home"}),e.jsx("button",{className:"navbar-toggler",type:"button",onClick:n,"aria-controls":"navbarNav","aria-expanded":!s,"aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("div",{className:`collapse navbar-collapse ${s?"":"show"}`,id:"navbarNav",children:e.jsx("ul",{className:"navbar-nav",children:e.jsxs("ul",{className:"navbar-nav",children:[e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/about",children:"About"})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/dashboard",children:"Dashboard"})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/contact",children:"Contact"})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/register",children:"Register"})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/login",children:"Login"})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/product",children:"Product"})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/sales",children:"Sales"})})]})})})]})}),e.jsx("main",{className:"container mt-4",children:e.jsx(g,{})})]})}const U=({OpenSidebar:s})=>e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"menu-icon",children:[e.jsx(p,{className:"icon",onClick:()=>s()})," "]}),e.jsx("div",{className:"header-right",children:e.jsx(p,{className:"icon"})}),e.jsxs("div",{className:"header-right",children:[e.jsx(w,{className:"icon"}),e.jsx(B,{className:"icon"}),e.jsx(D,{className:"icon"})]})]}),N=({openSidebarToggle:s,OpenSidebar:r})=>e.jsxs("aside",{id:"sidebar",className:s?"sidebar-responsive":"",children:[e.jsxs("div",{className:"sidebar-title",children:[e.jsxs("div",{className:"sidebar-brand",children:[e.jsx(I,{className:"icon_header"})," SHOP"]}),e.jsx("span",{className:"icon close_icon",onClick:r,children:"X"})]}),e.jsxs("ul",{className:"sidebar-list ",children:[e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"/dashboard",children:[e.jsx(L,{className:"icon"})," Dashboard"]})}),e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"/product",children:[e.jsx(b,{className:"icon"})," Products"]})}),e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"/sales",children:[e.jsx(b,{className:"icon"})," Sales"]})}),e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"",children:[e.jsx(_,{className:"icon"})," Categories"]})}),e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"/about",children:[e.jsx(O,{className:"icon"})," About"]})}),e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"/login",children:[e.jsx(E,{className:"icon"})," Login"]})}),e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"/register",children:[e.jsx(R,{className:"icon"})," Sign-in"]})}),e.jsx("li",{className:"sidebar-list-item",children:e.jsxs("a",{href:"",children:[e.jsx(T,{className:"icon"})," Setting"]})})]})]}),f=()=>{const[s,r]=o.useState({labels:[],values:[]});return o.useEffect(()=>{(async()=>{try{const a="http://64.225.71.67:8000/dashboard",t=localStorage.getItem("accessToken");if(!t)throw new Error("Access token not found");const l=await u.get(a,{headers:{Authorization:` ${t}`}}),{salesproduct_data:i}=l.data,d=i.map(m=>m.name),c=i.map(m=>m.sales_product);r({labels:d,values:c})}catch(a){console.error("Error fetching dashboard data:",a)}})()},[]),e.jsxs("div",{children:[e.jsx("h2",{children:"Dashboard"}),e.jsx("div",{style:{height:"400px",width:"600px"},children:e.jsx(q,{data:{labels:s.labels,datasets:[{label:"Total Sales per Day",data:s.values,fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]}})}),e.jsx("div",{style:{height:"400px",width:"600px"},children:e.jsx(A,{data:{labels:s.labels,datasets:[{label:"Total Sales per Product",data:s.values,backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]}})})]})};function G(){const[s,r]=o.useState(!1),n=()=>{r(!s)};return e.jsxs("div",{className:"grid-container",children:[e.jsx(U,{OpenSidebar:n}),e.jsx(N,{openSidebarToggle:s,OpenSidebar:n}),e.jsx(f,{})]})}function H(){const s=localStorage.getItem("isLoggedIn");return console.log("isLoggedIn ",s),s?e.jsx(g,{}):e.jsx(P,{to:"/login"})}const X=()=>{const[s,r]=o.useState([]),n=o.useRef(null);return o.useEffect(()=>{(async()=>{try{const t=await u.get("http://64.225.71.67:8000/sales");r(t.data)}catch(t){console.error("Error fetching sales:",t)}})()},[]),e.jsxs("div",{children:[e.jsx("h2",{children:"Sales Table"}),e.jsxs("table",{className:"table table-striped table-bordered",ref:n,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Product ID"}),e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Created At"}),e.jsx("th",{children:"Customer ID"})]})}),e.jsx("tbody",{children:s.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:a.pid}),e.jsx("td",{children:a.quantity}),e.jsx("td",{children:a.created_at}),e.jsx("td",{children:a.customer_id})]},a.id))})]})]})};function K(){const[s,r]=o.useState({name:"",price:0,stock_quantity:0,cost:0}),[n,a]=o.useState(null),t=d=>{if(d.target.files&&d.target.files.length>0){const c=d.target.files[0];a(c)}else a(null)},l=d=>{const{id:c,value:m}=d.target;r(j=>({...j,[c]:m}))},i=async d=>{d.preventDefault();const c=new FormData;c.append("name",s.name),c.append("price",s.price.toString()),c.append("stock_quantity",s.stock_quantity.toString()),c.append("cost",s.cost.toString()),n&&c.append("file",n);try{const m=await u.post("http://127.0.0.1:8000/products",c,{headers:{"Content-Type":"multipart/form-data"}});console.log("Product created successfully:",m.data)}catch(m){console.error("Error creating product:",m)}};return e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"name",className:"form-label",children:"Product name"}),e.jsx("input",{type:"text",className:"form-control",id:"name",value:s.name,onChange:l})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"price",className:"form-label",children:"Price"}),e.jsx("input",{type:"number",className:"form-control",id:"price",value:s.price,onChange:l})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"stock_quantity",className:"form-label",children:"Stock quantity"}),e.jsx("input",{type:"number",className:"form-control",id:"stock_quantity",value:s.stock_quantity,onChange:l})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"cost",className:"form-label",children:"Cost"}),e.jsx("input",{type:"number",className:"form-control",id:"cost",value:s.cost,onChange:l})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Select Image"}),e.jsx("input",{type:"file",accept:".jpg,.jpeg,.png",onChange:t})]}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:"Create Product"})]})}function Q(){const[s,r]=o.useState(!1),n=()=>r(!s);return e.jsxs(S,{children:[e.jsx(N,{openSidebarToggle:s,OpenSidebar:n}),e.jsxs(F,{children:[e.jsx(x,{path:"/login",element:e.jsx(z,{})}),e.jsxs(x,{path:"*",element:e.jsx(H,{}),children:[e.jsx(x,{index:!0,element:e.jsx(G,{})}),e.jsx(x,{path:"addproduct",element:e.jsx(K,{})}),e.jsx(x,{path:"product",element:e.jsx($,{})}),e.jsx(x,{path:"layout",element:e.jsx(M,{})}),e.jsx(x,{path:"dashboard",element:e.jsx(f,{})}),e.jsx(x,{path:"sale",element:e.jsx(X,{})})]})]})]})}y.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(Q,{})}));