(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[344],{2024:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),s=t(16),c=t(15),r=t(0),m=t.n(r),i=t(1103),o=t(1104),d=t(1105),u=t(173),E=t(1108),f=(t(27),t(812),t(798),t(117)),v=t(870),h=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("/user/viewoneuser/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement("div",null))),m.a.createElement(d.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(i.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Video Call History")),m.a.createElement(o.a,null,m.a.createElement(v.Link,{to:"/Appointment-management/Chat-history"},m.a.createElement(u.a,{className:" btn btn-danger float-right"},"Back")))),m.a.createElement(E.a,{className:"pb-3"},m.a.createElement(i.a,{className:"ml-4"},m.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Patinet Name"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.fullname))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Time"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.createdAt))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Duration"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,"20 min."))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Amout"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.amount))))))))))}}]),t}(m.a.Component);a.default=h}}]);
//# sourceMappingURL=344.cb8e892e.chunk.js.map