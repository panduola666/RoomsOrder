import{a as q,S as V,f as A,_ as H}from"./validate-ytR7GtdT.js";import{d as z,r as n,c as o,b as e,x as p,F as y,s as x,w as J,e as f,v as $,z as G,j as d,p as M,l as O,_ as R,o as Z,m as B,n as K,q as C,t as Q,u as W,g as E,B as X}from"./index-pO3iTUHC.js";import{C as D}from"./cityCountyData-3AYHRziG.js";const ee="/RoomsOrder/assets/Avatar _6-2mSuCy2l.png",N=i=>(M("data-v-f0f3288a"),i=i(),O(),i),se=N(()=>e("h2",{class:"fs-6 fs-lg-5 mb-5 mb-lg-7 fw-bold"},"修改密碼",-1)),te=N(()=>e("p",{class:"mb-2 text-neutral-80 fw-medium"},"電子信箱",-1)),ae={class:"mb-3 mb-lg-5 fw-bold"},le={key:0,class:"d-flex align-items-center gap-3"},oe={class:"flex-grow-1"},de=N(()=>e("p",{class:"mb-2 text-neutral-80 fw-medium"},"密碼",-1)),re={class:"mb-3 mb-lg-5"},ne=N(()=>e("label",{for:"password",class:"form-label fw-bold"},"舊密碼",-1)),ie={class:"mb-3 mb-lg-5"},ue=N(()=>e("label",{for:"newPassword",class:"form-label fw-bold"},"新密碼",-1)),ce={class:"mb-5 mb-lg-7"},me=N(()=>e("label",{for:"checkPwd",class:"form-label fw-bold"},"確認新密碼",-1)),pe=z({__name:"EditPwd",props:{user:{}},setup(i){const _=n(!1),u=i,r=JSON.parse(localStorage.getItem("user")),t=n({userId:u.user._id||r._id,email:u.user.email||r.email,oldPassword:"",newPassword:""}),c=n(""),h=A();async function U(){if(!q(t.value.newPassword,c.value))return;const b=await h._fetch("/api/v1/user/","PUT",t.value);V.fire({icon:b.status?"success":"error",title:b.status?"修改密碼成功":b.message}),b.status&&(_.value=!1,t.value.newPassword=t.value.oldPassword=c.value="")}return(b,v)=>(d(),o("div",null,[se,te,e("p",ae,p(t.value.email),1),_.value?(d(),o("form",{key:1,onSubmit:J(U,["prevent"])},[e("div",re,[ne,f(e("input",{type:"password",class:"form-control p-3 rounded-3",id:"password",placeholder:"請輸入舊密碼","onUpdate:modelValue":v[1]||(v[1]=m=>t.value.oldPassword=m),autocomplete:"off"},null,512),[[$,t.value.oldPassword]])]),e("div",ie,[ue,f(e("input",{type:"password",class:"form-control p-3 rounded-3",id:"newPassword",placeholder:"請輸入新密碼","onUpdate:modelValue":v[2]||(v[2]=m=>t.value.newPassword=m),autocomplete:"off"},null,512),[[$,t.value.newPassword]])]),e("div",ce,[me,f(e("input",{type:"password",class:"form-control p-3 rounded-3",id:"checkPwd",placeholder:"請再輸入一次新密碼","onUpdate:modelValue":v[3]||(v[3]=m=>c.value=m),autocomplete:"off"},null,512),[[$,c.value]])]),e("input",{type:"submit",class:G(["btn btn-primary py-3 px-6 rounded-3 w-100 w-lg-auto",{disabled:!t.value.oldPassword||!t.value.oldPassword||!c.value}]),value:"儲存設定"},null,2)],32)):(d(),o("div",le,[e("div",oe,[de,(d(),o(y,null,x(10,m=>e("i",{class:"pwdPoint d-inline-block bg-black rounded-circle me-2",key:m})),64))]),e("span",{class:"text-primary pointer text-decoration-underline",onClick:v[0]||(v[0]=m=>_.value=!0)},"重設")]))]))}}),ve=R(pe,[["__scopeId","data-v-f0f3288a"]]),fe=e("h2",{class:"fs-6 fs-lg-5 fw-bold mb-5 mb-lg-7"},"基本資料",-1),_e={key:0},be=e("p",{class:"mb-2 text-neutral-80 fw-medium"},"姓名",-1),we={class:"mb-3 mb-lg-5 fw-bold"},he=e("p",{class:"mb-2 text-neutral-80 fw-medium"},"手機號碼",-1),ge={class:"mb-3 mb-lg-5 fw-bold"},ye=e("p",{class:"mb-2 text-neutral-80 fw-medium"},"生日",-1),xe={class:"mb-3 mb-lg-5 fw-bold"},$e=e("p",{class:"mb-2 text-neutral-80 fw-medium"},"地址",-1),Ne={class:"mb-5 mb-lg-7 fw-bold"},Pe={class:"mb-5"},Ce=e("label",{for:"userName",class:"form-label fw-bold"},"姓名",-1),Se={class:"mb-5"},ke=e("label",{for:"userName",class:"form-label fw-bold"},"手機號碼",-1),Ie={class:"mb-5"},Ue=e("label",{for:"birth",class:"form-label fw-bold"},"生日",-1),De={class:"d-flex gap-2"},Ve=["value"],Ae=["value"],ze=["value"],Le={class:"mb-5 mb-lg-7"},Fe=e("label",{for:"address",class:"form-label fw-bold"},"地址",-1),Be={class:"d-flex gap-2 mb-3"},Ee=["value"],Je=["value"],Me=e("input",{type:"submit",class:"btn btn-primary py-3 px-6 rounded-3 w-100 w-lg-auto",value:"儲存設定"},null,-1),Oe=z({__name:"UserInfo",props:{user:{}},setup(i){const _=n(!1),u=i,r=JSON.parse(localStorage.getItem("user")),t=n({userId:u.user._id||r._id,name:u.user.name||r.name,phone:u.user.phone||r.phone,birthday:new Date(u.user.birthday||r.birthday).toLocaleDateString(),address:{zipcode:u.user.address.zipcode||r.address.zipcode,detail:u.user.address.detail||r.address.detail}}),c=n(""),h=A();async function U(){t.value.birthday=`${g.value}/${w.value}/${S.value}`;const l=await h._fetch("/api/v1/user/","PUT",t.value);if(V.fire({icon:l.status?"success":"error",title:l.status?"個資修改成功":l.message}),l.status){localStorage.setItem("user",JSON.stringify(l.result)),_.value=!1;const{address:a,birthday:P,name:s,phone:j}=l.result;t.value.name=s,t.value.phone=j,t.value.address=a,t.value.birthday=new Date(P).toLocaleDateString(),v()}}const b=n({CityName:"",CityEngName:"",AreaList:[]});Z(()=>{D.forEach(l=>{l.AreaList.find(P=>Number(P.ZipCode)===r.address.zipcode)&&(I.value=l.CityName,b.value=l)}),Y(),v()});function v(){const l=t.value.address;c.value=b.value.CityName+b.value.AreaList.find(a=>Number(a.ZipCode)===l.zipcode).AreaName+l.detail}const m=t.value.birthday.split("/"),g=n(Number(m[0])),w=n(Number(m[1])),S=n(Number(m[2])),k=n(31),L=()=>{w.value===2?k.value=g.value%4?28:29:[1,3,5,7,8,10,12].includes(w.value)?k.value=31:k.value=30};B(()=>g.value,L),B(()=>w.value,L);const F=n([]),I=n(""),Y=()=>{const l=D.find(a=>a.CityName===I.value);F.value=l.AreaList};return(l,a)=>{const P=K("tel");return d(),o("div",null,[fe,_.value?(d(),o("form",{key:1,onSubmit:J(U,["prevent"])},[e("div",Pe,[Ce,f(e("input",{type:"text",class:"form-control p-3 rounded-3",id:"userName",placeholder:"請輸入姓名","onUpdate:modelValue":a[1]||(a[1]=s=>t.value.name=s)},null,512),[[$,t.value.name]])]),e("div",Se,[ke,f(e("input",{type:"tel",class:"form-control p-3 rounded-3",id:"userName",placeholder:"請輸入手機號碼","onUpdate:modelValue":a[2]||(a[2]=s=>t.value.phone=s)},null,512),[[$,t.value.phone],[P]])]),e("div",Ie,[Ue,e("div",De,[f(e("select",{id:"birth",class:"form-select p-3 rounded-3","onUpdate:modelValue":a[3]||(a[3]=s=>g.value=s)},[(d(),o(y,null,x(100,s=>e("option",{key:s,value:new Date().getFullYear()-(100-s)},p(new Date().getFullYear()-(100-s))+" 年 ",9,Ve)),64))],512),[[C,g.value]]),f(e("select",{class:"form-select p-3 rounded-3","onUpdate:modelValue":a[4]||(a[4]=s=>w.value=s)},[(d(),o(y,null,x(12,s=>e("option",{key:s,value:s},p(s)+" 月",9,Ae)),64))],512),[[C,w.value]]),f(e("select",{class:"form-select p-3 rounded-3","onUpdate:modelValue":a[5]||(a[5]=s=>S.value=s)},[(d(!0),o(y,null,x(k.value,s=>(d(),o("option",{key:s,value:s},p(s)+" 日",9,ze))),128))],512),[[C,S.value]])])]),e("div",Le,[Fe,e("div",Be,[f(e("select",{id:"address",class:"form-select p-3 rounded-3","onUpdate:modelValue":a[6]||(a[6]=s=>I.value=s)},[(d(!0),o(y,null,x(Q(D),s=>(d(),o("option",{key:s.CityName,value:s.CityName},p(s.CityName),9,Ee))),128))],512),[[C,I.value]]),f(e("select",{class:"form-select p-3 rounded-3","onUpdate:modelValue":a[7]||(a[7]=s=>t.value.address.zipcode=s)},[(d(!0),o(y,null,x(F.value,s=>(d(),o("option",{key:s.ZipCode,value:s.ZipCode},p(s.AreaName),9,Je))),128))],512),[[C,t.value.address.zipcode]])]),f(e("input",{type:"text",class:"form-control p-3 rounded-3",placeholder:"請輸入詳細地址","onUpdate:modelValue":a[8]||(a[8]=s=>t.value.address.detail=s)},null,512),[[$,t.value.address.detail]])]),Me],32)):(d(),o("div",_e,[be,e("p",we,p(t.value.name),1),he,e("p",ge,p(t.value.phone),1),ye,e("p",xe,p(g.value)+" 年 "+p(w.value)+" 月 "+p(S.value)+" 日",1),$e,e("p",Ne,p(c.value),1),e("input",{type:"button",class:"btn btn-outline-primary py-3 px-6 fw-bold",value:"編輯",onClick:a[0]||(a[0]=s=>_.value=!0)})]))])}}}),T=i=>(M("data-v-7ef35123"),i=i(),O(),i),Re={class:"bg-neutral-bg"},Ze=X('<div class="userBanner" data-v-7ef35123><div class="container position-relative z-3" data-v-7ef35123><div class="d-lg-flex flex-lg-row align-items-center gap-5 fs-1 fw-bold text-white py-7 py-lg-10" data-v-7ef35123><img src="'+ee+'" alt="" class="avatar mb-3 mb-lg-0" data-v-7ef35123><h1 class="fs-1 fw-bold mb-0" data-v-7ef35123>Hello，Jessica</h1></div></div></div>',1),Te={class:"container my-7 mt-lg-9 mb-lg-10"},Ye=T(()=>e("ul",{class:"tabs d-flex text-white fw-bold p-0 mb-7 mb-lg-9"},[e("li",{class:"tabs-item px-5 py-3 pointer active"},"個人資料"),e("li",{class:"tabs-item px-5 py-3 pointer"},"我的訂單")],-1)),je={class:"row g-5 g-lg-7"},qe={class:"col-12 col-lg-5"},He={class:"bg-white p-5 p-lg-7 rounded-6"},Ge={class:"col-12 col-lg-7"},Ke={class:"bg-white p-5 p-lg-7 rounded-6"},Qe=T(()=>e("img",{src:H,alt:"Line",class:"line"},null,-1)),We=z({__name:"UserView",setup(i){const _=W(),u=A(),r=n({_id:"",updatedAt:"",phone:"",name:"",email:"",createdAt:"",birthday:"",address:{detail:"",zipcode:0}});return Z(async()=>{const t=await u._fetch("/api/v1/user/check");if(!t.status){const h=await V.fire({icon:"error",title:t.message});(h.isConfirmed||h.isDismissed)&&(localStorage.removeItem("token"),_.push("/login"));return}const c=await u._fetch("/api/v1/user");r.value=c.result,localStorage.setItem("user",JSON.stringify(c.result))}),(t,c)=>(d(),o("main",Re,[Ze,e("div",Te,[Ye,e("div",je,[e("div",qe,[e("section",He,[E(ve,{user:r.value},null,8,["user"])])]),e("div",Ge,[e("section",Ke,[E(Oe,{user:r.value},null,8,["user"])])])])]),Qe]))}}),ts=R(We,[["__scopeId","data-v-7ef35123"]]);export{ts as default};
