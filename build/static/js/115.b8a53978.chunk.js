(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[115],{2106:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),s=t(16),c=t(15),r=t(0),m=t.n(r),i=t(1102),o=t(1103),d=t(1100),u=t(1101),h=t(1104),E=t(173),p=t(1107),v=(t(829),t(798),t(799)),b=t(56),f=t(117),N=t(812),g=t.n(N),y=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("/admin/rashi_by_category/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t,n;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(v.a,{breadCrumbTitle:"Rashi Management",breadCrumbParent:"Home",breadCrumbActive:"View Rashi Horoscope"}),m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(d.a,{listTag:"div"},m.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(u.a,{href:"/app/horoscopes/horoscopesList",tag:"a"},"Rashi Horoscope List"),m.a.createElement(u.a,{active:!0},"View Rashi Horoscope"))))),m.a.createElement(h.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(i.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Rashi Horoscope")),m.a.createElement(o.a,null,m.a.createElement(b.b,{render:function(e){var a=e.history;return m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/horoscopes/horoscopesList")}},"Back")}}))),m.a.createElement(p.a,{className:"pb-0"},m.a.createElement(i.a,{className:"mb-5 mt-2"},m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Title"),m.a.createElement("h6",{className:""}," ",this.state.data.title)),m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Category"),m.a.createElement("h6",{className:""}," ",null===(e=this.state.data.Category)||void 0===e?void 0:e.title)),m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Rashi Title"),m.a.createElement("div",{className:"text-truncate"},null===(a=this.state.data.rashiId)||void 0===a?void 0:a.map((function(e){return m.a.createElement("span",{key:e._id},null===e||void 0===e?void 0:e.rashi_title)})))),m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Rashi Description"),m.a.createElement("div",{className:"text-truncate"},null===(t=this.state.data.rashiId)||void 0===t?void 0:t.map((function(e){return m.a.createElement("span",{key:e._id},null===e||void 0===e?void 0:e.desc)})))),m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null," Date"),m.a.createElement("div",{className:"text-truncate"},null===(n=this.state.data.rashiId)||void 0===n?void 0:n.map((function(e){return m.a.createElement("span",{key:e._id},null===e||void 0===e?void 0:e.date)})))),m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Short Description"),m.a.createElement("h6",{className:""}," ",g()(this.state.data.sort_desc))),m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Long Description"),m.a.createElement("h6",{className:""},g()(this.state.data.long_desc))))))))}}]),t}(m.a.Component);a.default=y},798:function(e,a,t){},813:function(e,a){},829:function(e,a,t){}}]);
//# sourceMappingURL=115.b8a53978.chunk.js.map