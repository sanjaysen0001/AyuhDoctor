(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[170],{2037:function(e,a,t){"use strict";t.r(a);t(51);var n=t(32),l=t(36),r=t(0),c=t.n(r),m=t(1104),o=t(1102),i=t(1103),u=t(173),s=t(1107),d=t(805),p=t(804),E=t(783),b=t(803),g=t(117),v=(t(806),t(56)),f=t(812),j=t.n(f),h=t(799),N=t(831),y=(t(815),t(832)),O=(t(809),t(811)),C=t.n(O),S=t(807),_=t.n(S),k=void 0;a.default=function(){var e=Object(r.useState)([{name:"",price:"",description:""}]),a=Object(l.a)(e,2),t=a[0],f=a[1],O=Object(r.useState)([]),S=Object(l.a)(O,2),P=(S[0],S[1],Object(r.useState)([{start_Time:"",End_Time:""}])),T=Object(l.a)(P,2),w=T[0],x=T[1],D=Object(r.useState)(""),q=Object(l.a)(D,2),A=q[0],L=q[1],R=Object(r.useState)(""),F=Object(l.a)(R,2),J=F[0],I=F[1],B=Object(r.useState)(""),H=Object(l.a)(B,2),M=H[0],X=H[1],z=Object(r.useState)(""),U=Object(l.a)(z,2),G=U[0],K=U[1],Q=Object(r.useState)({}),V=Object(l.a)(Q,2),W=V[0],Y=V[1],Z=Object(r.useState)(""),$=Object(l.a)(Z,2),ee=$[0],ae=$[1],te=Object(r.useState)(""),ne=Object(l.a)(te,2),le=ne[0],re=ne[1],ce=Object(r.useState)(""),me=Object(l.a)(ce,2),oe=me[0],ie=me[1],ue=Object(r.useState)(""),se=Object(l.a)(ue,2),de=se[0],pe=se[1],Ee=Object(r.useState)(y.EditorState.createEmpty()),be=Object(l.a)(Ee,2),ge=(be[0],be[1]),ve=Object(r.useState)([]),fe=Object(l.a)(ve,2),je=fe[0],he=fe[1],Ne=function(){f([].concat(Object(n.a)(t),[{name:"",price:"",description:""}]))},ye=function(e){var a=Object(n.a)(t);a.splice(e,1),f(a)},Oe=function(e,a){var l=a.target,r=l.name,c=l.value,m=Object(n.a)(t);m[e][r]=c,f(m)},Ce=function(e){var a=Object(n.a)(w);a.splice(e,1),x(a)},Se=function(e,a){var t=a.target,l=t.name,r=t.value,c=Object(n.a)(w);c[e][l]=r,x(c)};Object(r.useEffect)((function(){g.a.get("/admin/admin_poojaList").then((function(e){he(e.data.data)})).catch((function(e){console.log(e)}))}),[]);return c.a.createElement("div",null,c.a.createElement(h.a,{breadCrumbTitle:"Puja Type",breadCrumbParent:" home",breadCrumbActive:"Add Puja Type"}),c.a.createElement(m.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8"})),c.a.createElement("div",{className:"col-sm-4"})),c.a.createElement(o.a,{className:"m-2"},c.a.createElement(i.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Puja")),c.a.createElement(i.a,null,c.a.createElement(v.b,{render:function(e){var a=e.history;return c.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/event/bookEvent/bookEventList")}},"Back")}}))),c.a.createElement(s.a,null,c.a.createElement(d.a,{className:"m-1",onSubmit:function(e){return function(e){e.preventDefault();var a=w.map((function(e){return e.start_Time})),n=w.map((function(e){return e.End_Time})),l=a.concat(n),r=new FormData;if(r.append("pooja_type",oe),r.append("pooja_price",A),r.append("city",J),r.append("desc",de),r.append("duration",M),r.append("mode_ofpuja",ee),r.append("time_slots",l),t)for(var c=0;c<t.length;c++)r.append("product[".concat([c],"][name]"),t[c].name),r.append("product[".concat([c],"][price]"),t[c].price),r.append("product[".concat([c],"][description]"),t[c].description);r.append("benefits",G),r.append("fullfill_location",le),null!=W&&(console.log("images",W),r.append("poojaimg",W)),g.a.post("/admin/admin_Addevent",r).then((function(e){console.log("sdkkk",e),_()("Success!","Submitted SuccessFull!","success"),k.props.history.push("app/event/bookEvent/bookEventList")})).catch((function(e){console.log(e.response.data)}))}(e)}},c.a.createElement(o.a,null,c.a.createElement(i.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},c.a.createElement(p.a,null," Name of Puja"),c.a.createElement(E.a,{required:!0,type:"select",name:"pooja_type",value:oe,onChange:function(e){ie(e.target.value),console.log("id",oe)}},c.a.createElement("option",null,"select Puja"),null===je||void 0===je?void 0:je.map((function(e){return c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.pooja_name)})))),c.a.createElement(i.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},c.a.createElement(p.a,null,"Price Of Puja"),c.a.createElement(b.a,{required:!0,type:"number",name:"pooja_price",placeholder:"Enter Price ",value:A,onChange:function(e){L(e.target.value)}})),c.a.createElement(i.a,{lg:"4",md:"6",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"Duration Of Puja"),c.a.createElement(b.a,{required:!0,type:"text",name:"duration",placeholder:"Puja Duration Time",value:M,onChange:function(e){X(e.target.value)}})),null===w||void 0===w?void 0:w.map((function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{key:a,lg:"4",md:"6",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"Start Time Of Puja"),c.a.createElement(b.a,{type:"time",onChange:function(e){return Se(a,e)},value:e.start_Time,name:"start_Time",className:"form-control",placeholder:"start_Time"})),c.a.createElement(i.a,{key:a,lg:"4",md:"6",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"End Time Of Puja"),c.a.createElement(b.a,{type:"time",onChange:function(e){return Se(a,e)},value:e.End_Time,name:"End_Time",className:"form-control",placeholder:"End_Time"})),1!==w.length?c.a.createElement(i.a,{key:a,lg:"2",md:"6",sm:"12",className:"mb-2"},c.a.createElement("button",{className:"btn btn-danger mt-1",onClick:Ce},"x")):null)})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(u.a,{color:"primary",className:"ml-1 mt-1",onClick:function(){x([].concat(Object(n.a)(w),[{start_Time:"",End_Time:""}]))}},"Add New"))),c.a.createElement(i.a,{lg:"4",md:"6",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"Mode of Puja "),c.a.createElement(E.a,{type:"select",required:!0,name:"select",onChange:function(e){return ae(e.target.value)}},c.a.createElement("option",null,"select Puja"),c.a.createElement("option",null,"offline"),c.a.createElement("option",null,"online"))),c.a.createElement(i.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},c.a.createElement(p.a,null,"Image"),c.a.createElement(E.a,{type:"file",name:"image",onChange:function(e){return Y(e.target.files[0])}})),"online"===ee?c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{lg:"4",md:"6",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"Fullfill Location of Puja"),c.a.createElement(b.a,{required:!0,type:"text",name:"fullfill_location",placeholder:"Enter  Location",value:le,onChange:function(e){re(e.target.value)}})),c.a.createElement(i.a,{lg:"4",md:"6",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"Puja City"),c.a.createElement(b.a,{required:!0,type:"text",name:"city",placeholder:"Enter City",value:J,onChange:function(e){I(e.target.value)}})),c.a.createElement(i.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},c.a.createElement(p.a,{className:"mb-1"},"Live Streaming"),c.a.createElement("div",{className:"form-label-group"},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"liveStreaming",value:"true"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Available"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"liveStreaming",value:"false"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Unvailable")))):null,c.a.createElement(i.a,{lg:"12",md:"12"},c.a.createElement("h2",{className:""},"Add Product ")),null===t||void 0===t?void 0:t.map((function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{lg:"4",className:"mb-2"},c.a.createElement(p.a,null,"Name"),c.a.createElement(b.a,{required:!0,type:"text",name:"name",placeholder:"Enter Name",value:t.name,onChange:function(e){return Oe(a,e)}})),c.a.createElement(i.a,{lg:"4",className:"mb-2"},c.a.createElement(p.a,null,"Price"),c.a.createElement(b.a,{required:!0,type:"number",name:"price",placeholder:"Enter Price",value:t.price,onChange:function(e){return Oe(a,e)}})),c.a.createElement(i.a,{lg:"6",className:"mb-2"},c.a.createElement(p.a,null,"Description"),c.a.createElement(b.a,{required:!0,rows:1,type:"textarea",name:"description",placeholder:"Enter Description",value:t.description,onChange:function(e){return Oe(a,e)}})),t.length-1===a?c.a.createElement(i.a,{lg:"3",md:"6",sm:"12",className:"mb-2"},c.a.createElement(u.a,{color:"primary",className:"ml-1 mt-1",onClick:Ne},"Add more")):null,1!==t.length?c.a.createElement(i.a,{key:a,lg:"3",md:"6",sm:"12",className:"mb-2"},c.a.createElement(u.a,{className:"btn btn-danger mt-1",onClick:ye},"X")):null)})),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"Benefits *"),c.a.createElement(b.a,{required:!0,type:"textarea",name:"benefits",placeholder:"Enter benefits",value:G,onChange:function(e){return K(e.target.value)}})),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(p.a,null,"About puja"),c.a.createElement("br",null),c.a.createElement(N.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",value:j()(de),onEditorStateChange:function(e){ge(e),pe(C()(Object(y.convertToRaw)(e.getCurrentContent())))},toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:function(e){return new Promise((function(a,t){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var l=new FormData;l.append("image",e),n.send(l),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);a(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);t(e)}))}))},previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),c.a.createElement(o.a,null,c.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}},809:function(e,a,t){},813:function(e,a){}}]);
//# sourceMappingURL=170.a96854df.chunk.js.map