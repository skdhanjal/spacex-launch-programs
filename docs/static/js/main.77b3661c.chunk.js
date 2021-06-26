(this["webpackJsonpspacex-launch-programs"]=this["webpackJsonpspacex-launch-programs"]||[]).push([[0],{17:function(e,c,a){},40:function(e,c,a){},42:function(e,c,a){},43:function(e,c,a){},44:function(e,c,a){},48:function(e,c,a){},49:function(e,c,a){},50:function(e,c,a){"use strict";a.r(c);var n=a(0),t=a.n(n),s=a(10),i=a.n(s),r=(a(17),a(3)),u=a(4),l=a.n(u),h=a(6),j=a(5),o=a(11),d=a.n(o),v=(a(40),a(1));var b=function(e){var c=e.text,a=e.active,n=e.onClick;return Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"spx-button ".concat(a?"spx-button--active":""),onClick:function(){n({isActive:!a,value:c})},children:c})})};a(42);var f=function(e){var c=e.type,a=e.value,n=e.active,t=e.onChange;return Object(v.jsx)("div",{className:"launch-filter",children:Object(v.jsx)(b,{text:a,active:n,onClick:function(e){var a=e.value,n=e.isActive;t({type:c,value:a,isActive:n})}})})},O={year:"launch_year",isLandingSuccess:"land_success",isLaunchSuccess:"launch_success",limit:"limit"},m={start:2006,end:2020},p=function(e){return Object.keys(e).filter((function(c){return e[c]})).map((function(c){return"".concat(O[c],"=").concat(e[c])})).join("&amp;")};a(43);var x=function(e){var c=e.year,a=e.isLaunchSuccess,n=e.isLandingSuccess,t=e.onChange,s=function(e){for(var c=[],a=m.start;a<=m.end;a++)c.push({value:a,isActive:a===e});return c}(c),i=function(e){var c=e.type,a=e.value,n=e.isActive;t({type:c,value:a,isActive:n})};return Object(v.jsxs)("div",{className:"launch-filters",children:[Object(v.jsx)("div",{className:"launch-filters--text",children:"Launch year"}),Object(v.jsx)("div",{className:"launch-filters__year",children:s.map((function(e){var c=e.value,a=e.isActive;return Object(v.jsx)(f,{type:"year",value:c,active:a,onChange:i},c)}))}),Object(v.jsx)("div",{className:"launch-filters--text",children:"Successful Launch"}),Object(v.jsxs)("div",{className:"launch-filters__launch",children:[Object(v.jsx)(f,{type:"launch",value:"true",active:a,onChange:i}),Object(v.jsx)(f,{type:"launch",value:"false",active:!a,onChange:i})]}),Object(v.jsx)("div",{className:"launch-filters--text",children:"Successful Landing"}),Object(v.jsxs)("div",{className:"launch-filters__landing",children:[Object(v.jsx)(f,{type:"landing",value:"true",active:n,onChange:i}),Object(v.jsx)(f,{type:"landing",value:"false",active:!n,onChange:i})]})]})},g=a(12),_=a.n(g);a(44);var y=function(e){var c=e.launch,a=c.mission_name,t=c.flight_number,s=c.mission_id,i=c.launch_year,r=c.launch_success,u=void 0!==r&&r,l=c.land_success,h=void 0!==l&&l,o=c.links,d=Object(n.useState)(!0),b=Object(j.a)(d,2),f=b[0],O=b[1];return Object(v.jsxs)("div",{className:"launch-card",children:[f&&Object(v.jsx)(_.a,{height:210}),Object(v.jsx)("img",{className:"launch-card_img",alt:"mission logo",src:o.mission_patch_small,onLoad:function(){return O(!1)}}),Object(v.jsxs)("div",{className:"launch-card__details",children:[Object(v.jsxs)("div",{className:"launch-card__details--item",children:[a,": ",t]}),Object(v.jsxs)("div",{className:"launch-card__details--item",children:["Mission Ids: ",Object(v.jsx)("ul",{children:s.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})]}),Object(v.jsxs)("div",{className:"launch-card__details--item",children:["Launch year: ",i]}),Object(v.jsxs)("div",{className:"launch-card__details--item",children:["Successful Launch: ","".concat(u)]}),Object(v.jsxs)("div",{className:"launch-card__details--item",children:["Successful Landing: ","".concat(h)]})]})]})},S=function(){var e=Object(h.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.spacexdata.com/v3/launches?".concat(p(Object(r.a)(Object(r.a)({},c),{},{limit:100})))).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();a(48);var L=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),a=c[0],t=c[1],s=Object(n.useState)({year:2006,isLandingSuccess:!1,isLaunchSuccess:!1}),i=Object(j.a)(s,2),u=i[0],o=i[1],b=Object(n.useState)(!0),f=Object(j.a)(b,2),O=f[0],m=f[1],p=u.year,g=u.isLandingSuccess,_=u.isLaunchSuccess;return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(u);case 2:c=e.sent,t(c),m(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u]),Object(v.jsxs)("div",{className:"launch-programs",children:[Object(v.jsx)(x,{year:p,isLandingSuccess:g,isLaunchSuccess:_,onChange:function(e){var c=e.type,a=e.value,n=e.isActive;o("year"===c?Object(r.a)(Object(r.a)({},u),{},{year:n?a:void 0}):"launch"===c?Object(r.a)(Object(r.a)({},u),{},{isLaunchSuccess:n&&"true"===a}):Object(r.a)(Object(r.a)({},u),{},{isLandingSuccess:n&&"true"===a})),m(!0)}}),O&&Object(v.jsx)("div",{className:"launch-programs__loader",children:Object(v.jsx)(d.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100})}),!O&&Object(v.jsx)("div",{className:"launch-programs__cards",children:a.map((function(e,c){return Object(v.jsx)(y,{launch:e},c)}))}),!O&&0===a.length&&Object(v.jsx)("h2",{children:"No Launch data found for these filters."})]})};a(49);var N=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)("header",{className:"app-header",children:"SpaceX Launch Programs"}),Object(v.jsx)(L,{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(c){var a=c.getCLS,n=c.getFID,t=c.getFCP,s=c.getLCP,i=c.getTTFB;a(e),n(e),t(e),s(e),i(e)}))};i.a.hydrate(Object(v.jsx)(t.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.77b3661c.chunk.js.map