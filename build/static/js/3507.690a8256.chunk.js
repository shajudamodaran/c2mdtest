"use strict";(self.webpackChunkconnect2mydoctor=self.webpackChunkconnect2mydoctor||[]).push([[3507],{95510:function(e,t,n){n.d(t,{ES:function(){return o},nD:function(){return s},xN:function(){return i}});var a=n(72426),r=n.n(a);var i=function(e){if(e)return r()(e).format("DD-MMM-YYYY")},s=function(e){if(e)return r()(e).subtract(3,"months").format("DD-MMM-YYYY")},o=function(e){if(e)return r()(e).subtract(1,"year").format("DD-MMM-YYYY")}},48337:function(e,t,n){n.d(t,{f:function(){return s}});var a=n(15861),r=n(87757),i=n.n(r),s=function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",localStorage.getItem(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},64926:function(e,t,n){n.d(t,{A8:function(){return p},Ax:function(){return h},Ps:function(){return u},Wp:function(){return x},pO:function(){return v},tm:function(){return f},zj:function(){return m}});var a=n(15861),r=n(87757),i=n.n(r),s=n(5557),o=n(95510),l=n(44234),c=n(46174),d=n(48337),u=function(){return function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={requestType:"1062",browserTimeZone:"",data:{type:"department"}},e.next=3,s.Z.post("getdepartments",n);case 3:if("200"!=(a=e.sent).status){e.next=12;break}if("FAILURE"==a.data.errorType||null===(r=a.data)||void 0===r||!r.data){e.next=9;break}return e.abrupt("return",a.data.data);case 9:localStorage.clear(),localStorage.removeItem("userData"),window.location.href="/home";case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e){var t=e.department_id;return function(){var e=(0,a.Z)(i().mark((function e(n){var a,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={requestType:"1063",browserTimeZone:"",data:{type:"doctor",departmentId:t}},e.next=3,s.Z.post("getdoctors",a);case 3:if("200"!=(r=e.sent).status){e.next=12;break}if("FAILURE"==r.data.errorType||null===(o=r.data)||void 0===o||!o.data){e.next=9;break}return e.abrupt("return",r.data.data);case 9:localStorage.clear(),localStorage.removeItem("userData"),window.location.href="/home";case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){var t=e.offset;return function(){var e=(0,a.Z)(i().mark((function e(n){var a,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={requestType:"1070",browserTimeZone:"",data:{type:"templatelist",offset:t||0}},e.next=3,s.Z.post("gettemplates",a);case 3:if("200"!=(r=e.sent).status){e.next=13;break}if(console.log(r),"FAILURE"==r.data.errorType||null===(o=r.data)||void 0===o||!o.data){e.next=10;break}return e.abrupt("return",{data:r.data.data.data,total:r.data.data.totalNumberOfPages});case 10:localStorage.clear(),localStorage.removeItem("userData"),window.location.href="/home";case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,a.Z)(i().mark((function t(n){var a,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={data:{templateId:e},browserTimeZone:"",requestType:1068},t.next=3,s.Z.post("viewtemplate",a);case 3:if("200"!=(r=t.sent).status){t.next=12;break}if("FAILURE"==r.data.errorType||null===(o=r.data)||void 0===o||!o.data){t.next=9;break}return t.abrupt("return",r.data.data);case 9:localStorage.clear(),localStorage.removeItem("userData"),window.location.href="/home";case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,a.Z)(i().mark((function t(n){var a,r,u,m,p,f,h,x,v;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Calling"),t.next=3,(0,d.f)(c.x$);case 3:return a=t.sent,a=JSON.parse(a),(r=a).userType,r.clinicId,u=r.userId,n({type:l.oF,payload:!0}),m=null!==e&&void 0!==e&&e.fromDate?(0,o.xN)(e.fromDate):null,p=null!==e&&void 0!==e&&e.toDate?(0,o.xN)(e.toDate):null,f=(0,o.xN)(new Date),h={data:{userID:u,operation:"find",startDate:m||f,endDate:p||f,browserTimeZone:"GMT+05:30",offset:null!==e&&void 0!==e&&e.offset?e.offset:"0"},browserTimeZone:"",requestType:236},t.next=13,s.Z.post("getbethanyprescriptions",h);case 13:x=t.sent,console.log("getbethanyprescriptionlist responce ->",x),200==x.status&&("FAILURE"!=x.data.errorType&&null!==(v=x.data)&&void 0!==v&&v.data?(n({type:l.j3,payload:{data:x.data.data,total:x.data.data.totalNumberOfPages,isFresh:null===e||void 0===e||!e.offset}}),n({type:l.oF,payload:!1})):(localStorage.clear(),localStorage.removeItem("userData"),window.location.href="/home"));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(){return function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,r,o,l,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.f)(c.x$);case 2:return n=e.sent,n=JSON.parse(n),(a=n).userType,a.clinicId,r=a.userId,o={data:{userID:r,browserTimeZone:"GMT+05:30"},browserTimeZone:"",requestType:238},e.next=8,s.Z.post("bethanysynclabmedicine",o);case 8:if("200"!=(l=e.sent).status){e.next=17;break}if("FAILURE"==l.data.errorType||null===(u=l.data)||void 0===u||!u.data){e.next=14;break}return e.abrupt("return",l.data.data);case 14:localStorage.clear(),localStorage.removeItem("userData"),window.location.href="/home";case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=(0,a.Z)(i().mark((function t(n){var a,r,o,l,u,m;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.f)(c.x$);case 2:return a=t.sent,a=JSON.parse(a),(r=a).userType,r.clinicId,o=r.userId,l={data:{userID:o,listid:e},browserTimeZone:"",requestType:237},t.next=8,s.Z.post("bethanysynclabmedicine",l);case 8:if("200"!=(u=t.sent).status){t.next=18;break}if(console.log(u),"FAILURE"==u.data.errorType||null===(m=u.data)||void 0===m||!m.data){t.next=15;break}return t.abrupt("return",u.data.data);case 15:localStorage.clear(),localStorage.removeItem("userData"),window.location.href="/home";case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},73507:function(e,t,n){n.r(t);var a=n(29439),r=n(59220),i=n(93020),s=n(72791),o=n(16030),l=n(79271),c=n(64926),d=(n(10626),n(80184));t.default=function(e){e.location;var t,n=(0,s.useState)([]),u=(0,a.Z)(n,2),m=u[0],p=u[1],f=(0,s.useState)([]),h=(0,a.Z)(f,2),x=h[0],v=h[1],j=(0,s.useState)(null),g=(0,a.Z)(j,2),y=g[0],w=g[1],b=(0,s.useState)(null),N=(0,a.Z)(b,2),D=N[0],T=N[1];(0,s.useEffect)((function(){var e;T(null===y||void 0===y||null===(e=y.tempData)||void 0===e?void 0:e.consultationDetails)}),[y]);var I="No data available",k="-",Z=(0,l.UO)().prname,S=(0,o.I0)();(0,s.useEffect)((function(){C()}),[]);var C=function(){S((0,c.tm)(Z)).then((function(e){var t,n,a,r,i,s;(console.log(e),e)&&(p(null===(t=e[0])||void 0===t||null===(n=t.tempData)||void 0===n||null===(a=n.consultationDetails)||void 0===a?void 0:a.labTest),v(null===(r=e[0])||void 0===r||null===(i=r.tempData)||void 0===i||null===(s=i.consultationDetails)||void 0===s?void 0:s.medicine),w(e[0]))}))};console.log(D);var M=function(e){var t,n=e.data;return(0,d.jsx)("div",{className:"view-prescription-doctor-list-container-small",children:(0,d.jsx)("ul",{children:(null===(t=n.split(","))||void 0===t?void 0:t.length)>0?n.split(",").map((function(e,t){return(0,d.jsxs)("li",{children:[e,(n.split(",").length,"")," "]})})):null})})},O=function(e,t){return"first"==t?e?e.split(",")[0]:null:e?e.split(","):[]};return(0,d.jsx)("div",{className:"prescription-form-main-container-view full-height",children:(0,d.jsx)("div",{className:"prescription-form-container-view full-height ",children:(0,d.jsx)("div",{className:"prescription-form-content-container",style:{height:"100vh"},children:(0,d.jsxs)("div",{className:"prescription-form-content",children:[(0,d.jsx)("div",{className:"container"}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",width:"100%",padding:"1rem",position:"relative",minWidth:"100%",flexWrap:"wrap"},children:[(0,d.jsx)("div",{}),(0,d.jsxs)("ul",{className:"report-list shadow-underline",children:[(0,d.jsxs)("li",{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{className:"form-small-tittle",children:["Choose Speciality ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})," "]}),(0,d.jsx)("span",{className:"form-caption"})]}),(0,d.jsx)(r.Z,{getPopupContainer:function(e){return e.parentNode},title:null===y||void 0===y?void 0:y.assignedDepartments,children:(0,d.jsx)("div",{className:"form-light-background-big",children:(0,d.jsx)("input",{id:"releventPoint",style:{width:"290px"},value:null===y||void 0===y?void 0:y.assignedDepartments,className:"form-input-text",readOnly:!0})})})]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{className:"form-small-tittle",children:["Choose Doctor ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,d.jsx)("span",{className:"form-caption"})]}),(0,d.jsx)(i.Z,{getPopupContainer:function(e){return e.parentNode},overlayClassName:"wrapper-popover-view",content:O(null===y||void 0===y?void 0:y.assignedDoctors).length>1?(0,d.jsx)(M,{data:null===y||void 0===y?void 0:y.assignedDoctors}):null,title:O(null===y||void 0===y?void 0:y.assignedDoctors).length>1?"Doctors list (".concat(null===y||void 0===y?void 0:y.assignedDoctors.split(",").length,")"):null,children:(0,d.jsx)("div",{className:"form-light-background-big",children:(0,d.jsx)("input",{id:"releventPoint",style:{maxWidth:"290px",minWidth:"290px"},value:O(null===y||void 0===y?void 0:y.assignedDoctors).length>1?"".concat(O(null===y||void 0===y?void 0:y.assignedDoctors,"first"),", + ").concat((null===(t=O(null===y||void 0===y?void 0:y.assignedDoctors))||void 0===t?void 0:t.length)-1):"".concat(O(null===y||void 0===y?void 0:y.assignedDoctors,"first")),className:"form-input-text",readOnly:!0})})})]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{className:"form-small-tittle",children:["Template Name ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,d.jsx)("span",{className:"form-caption"})]}),(0,d.jsx)("div",{className:"form-light-background-big",children:(0,d.jsx)("input",{id:"releventPoint",style:{width:"290px"},value:null===y||void 0===y?void 0:y.tempName,className:"form-input-text",readOnly:!0})})]})]}),(0,d.jsx)("span",{className:"form-heading-2",style:{marginTop:"1rem"},children:"Patient Reports"}),(0,d.jsxs)("div",{className:"report-list-container",children:[(0,d.jsxs)("div",{style:{padding:"0rem",display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"1rem",width:"100%",justifyContent:"space-between"},children:[(0,d.jsxs)("div",{style:{display:"fex",flexDirection:"column"},children:[(0,d.jsx)("span",{className:"form-small-tittle",children:"Chief Complaints"}),(0,d.jsx)("div",{className:"form-light-background-big",children:(0,d.jsx)("textarea",{id:"chiefComplaints",value:D?D.chiefcomplaints:I,className:"form-input-text-area",name:"chiefcomplaints",rows:4,readOnly:!0})})]}),(0,d.jsxs)("div",{style:{display:"fex",flexDirection:"column",marginLeft:"1rem"},children:[(0,d.jsx)("span",{className:"form-small-tittle",children:"Relevant points from history"}),(0,d.jsx)("div",{className:"form-light-background-big",children:(0,d.jsx)("textarea",{id:"releventPoint",value:null!==D&&void 0!==D&&D.notes?D.notes:I,className:"form-input-text-area",rows:4,readOnly:!0})})]})]}),(0,d.jsxs)("div",{style:{padding:".0rem",display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"1rem",width:"100%",justifyContent:"space-between"},children:[(0,d.jsxs)("div",{style:{display:"fex",flexDirection:"column"},children:[(0,d.jsx)("span",{className:"form-small-tittle",children:"Diagnosis or Provisional Diagnosis"}),(0,d.jsx)("div",{className:"form-light-background-big",children:(0,d.jsx)("textarea",{value:null!==D&&void 0!==D&&D.diagnosis?D.diagnosis:I,id:"diagnosis",className:"form-input-text-area",rows:4,onChange:function(e){},readOnly:!0})})]}),(0,d.jsxs)("div",{style:{display:"fex",flexDirection:"column",marginLeft:"1rem"},children:[(0,d.jsx)("span",{className:"form-small-tittle",children:"Examination/Lab Findings"}),(0,d.jsx)("div",{className:"form-light-background-big",children:(0,d.jsx)("textarea",{id:"examination",value:null!==D&&void 0!==D&&D.investigation?D.investigation:I,className:"form-input-text-area",rows:4,onChange:function(e){},readOnly:!0})})]})]})]}),(0,d.jsx)("div",{className:"separator"}),(0,d.jsx)("span",{className:"form-heading-2",style:{marginTop:"1rem"},children:"Investigations"}),m.length>0?(0,d.jsxs)("table",{className:"investigations-table",children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"#"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"Investigation Name(s)"})}),(0,d.jsx)("th",{colSpan:"2",children:(0,d.jsx)("div",{children:"Comments/Instructions"})})]}),m.map((function(e,t){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:t+1}),(0,d.jsx)("td",{children:e.testType?e.testType:k}),(0,d.jsx)("td",{children:e.testComment?e.testComment:k})]})}))]}):(0,d.jsx)("div",{className:"no-table-data",children:"( No Investigations found )"}),(0,d.jsx)("div",{className:"separator"}),(0,d.jsx)("span",{className:"form-heading-2",style:{marginTop:"1rem"},children:"Medicines"}),x.length>0?(0,d.jsx)("div",{className:"medicine-table-container",children:(0,d.jsxs)("table",{className:"medicine-table",children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"#"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"Name of Medicine"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"When to have"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"Frequency"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"Quantity"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"Unit"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"Starting Date"})}),(0,d.jsx)("th",{children:(0,d.jsx)("div",{children:"No.of Days"})}),(0,d.jsx)("th",{colspan:"2",children:(0,d.jsx)("div",{children:"Instructions"})})]}),x.map((function(e,t){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:t+1}),(0,d.jsx)("td",{children:e.name?e.name:k}),(0,d.jsx)("td",{children:e.medtakeMethod?e.medtakeMethod:k}),(0,d.jsx)("td",{children:e.displayTablet?e.displayTablet:k}),(0,d.jsxs)("td",{children:[e.quandity?e.quandity:k," "]}),(0,d.jsx)("td",{children:e.measurement?e.measurement:k}),(0,d.jsx)("td",{children:e.StartVal?e.StartVal:k}),(0,d.jsx)("td",{children:e.totalDays?e.totalDays:k}),(0,d.jsx)("td",{children:e.mediComment?e.mediComment:k})]})}))]})}):(0,d.jsx)("div",{className:"no-table-data",children:"( No Medicines found )"}),(0,d.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"99%"},children:(0,d.jsx)("span",{className:"form-heading-2",style:{marginTop:"1rem"},children:"Additional Instructions"})}),(0,d.jsx)("div",{className:"form-light-background",style:{width:"45%"},children:(0,d.jsx)("textarea",{value:null!==D&&void 0!==D&&D.instruction?D.instruction:I,className:"form-input-text-area",rows:3,style:{width:"100%"},readOnly:!0})})]})]})})})})}},46174:function(e,t,n){n.d(t,{nn:function(){return r},t_:function(){return i},x$:function(){return a}});var a="userData",r="C2MDAdmin",i="ClinicAdmin"},10626:function(){}}]);
//# sourceMappingURL=3507.690a8256.chunk.js.map