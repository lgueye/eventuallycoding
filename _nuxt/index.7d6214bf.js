import{_ as v,a as w,b as C}from"./BlogSectionHeader.vue.9589625f.js";import{_ as q}from"./BlogCard.vue.a964f463.js";import{i as B,q as $,E as d,U as k,o as a,b as u,c as p,R as o,u as e,V as A,e as i,F as b,k as L,a as E}from"./entry.88dbae5f.js";import{u as N,q as V}from"./query.664701c0.js";import{u as F}from"./composables.3fdf5460.js";/* empty css                       *//* empty css                           *//* empty css                */import"./nuxt-picture.e949953a.js";import{s as g}from"./siteMetaData.b74feb44.js";/* empty css                        *//* empty css                      *//* empty css                     *//* empty css                      */import"./nuxt-link.36fc9595.js";import"./HeroSection.e16a8d82.js";import"./index.61d74bb5.js";import"./utils.5740425a.js";import"./_commonjsHelpers.28e086c5.js";const R={class:"flex flex-col items-start sm:flex-row pt-12"},T={class:"pt-16 grid xl:grid-cols-5 lg:grid-cols-3 gap-x-3 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3"},D=B({__name:"index",async setup(H){let r,c;const n=$(),s=d(Array.isArray(n.query.tag)?n.query.tag[0]:n.query.tag||""),l=d("fr"),{data:_}=([r,c]=k(()=>N("articleList",()=>V("articles").only(["title","listed","description","language","img","slug","tags","author","date","draft","_path","cover"]).where({language:{$ne:"en"},listed:{$ne:!1}}).sort({date:-1}).find())),r=await r,c(),r);return F({title:g.title,meta:[{hid:"description",name:"description",content:g.description},{name:"robots",content:"noindex"}]}),(f,m)=>{const h=v,x=q;return a(),u("div",null,[(a(),p(A,null,[o(e(w),{"current-lang":e(l)},null,8,["current-lang"])],1024)),i("div",R,[o(e(C),{"current-tag":e(s)},null,8,["current-tag"]),i("div",null,[o(h,{"lang-switch":"EN","url-switch":"/blog"}),i("div",T,[(a(!0),u(b,null,L(e(_),t=>(a(),p(x,{key:t.title,"current-lang":e(l),"current-tag":e(s),title:t.title,img:"/covers/"+t.cover,description:t.description,lang:t.language,date:t.date,tags:t.tags,path:t._path,onChangeCurrentTag:m[0]||(m[0]=y=>s.value=y)},null,8,["current-lang","current-tag","title","img","description","lang","date","tags","path"]))),128))])])])])}}});const at=E(D,[["__scopeId","data-v-0dee2082"]]);export{at as default};
