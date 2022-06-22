"use strict";(self.webpackChunkconnect2mydoctor=self.webpackChunkconnect2mydoctor||[]).push([[4461],{84723:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var o=t(29439),a=t(72791),s=t(16030),i=t(21739),r=t(66530),l=(t(64926),t(67904)),c=t(90961),d=t(46967),m=t(38509),u=t(9809),h=t(71666),f=t(65941),x=t(15397),p=t(72426),j=t.n(p),g=t(39898),v=t(44234),N=t(95510),b=t(68678),D=t(80184),C=b.Z.TextArea;var y=function(e){var n=e.value,t=e.element,s=e.onBlur,i=(0,a.useState)(null),r=(0,o.Z)(i,2),l=r[0],c=r[1];return(0,a.useEffect)((function(){n&&c(n)}),[n]),(0,D.jsx)(C,{onChange:function(e){c(e.target.value)},value:""!=l?l:"-",onBlur:function(e){s(t.appointmentId,e)},rows:1})},w=(t(48337),t(46174)),S=(t(10087),t(75910)),Z=[{status:"Upcoming",flag:"Upcoming"},{status:"Completed",flag:"Completed"},{status:"Cancelled by Patient",flag:"Error"},{status:"Cancelled by Doctor",flag:"Error"},{status:"Technical Error - Doctor",flag:"Error"},{status:"Technical Error - Patient",flag:"Error"},{status:"Doctor Unavailable",flag:"Pending"},{status:"Patient Unavailable",flag:"Pending"},{status:"Doctor & Patient No-show",flag:"Pending"},{status:"Not Available",flag:"Upcoming"}],k=function(e){if(e){var n=Z.filter((function(n){return n.status===e}));return n.length>0?n[0].flag:"Upcoming"}return"Upcoming"},R=(b.Z.TextArea,h.Z.RangePicker);var M=function(){var e=(0,a.useRef)(null),n=(0,a.useState)(!1),t=(0,o.Z)(n,2),r=t[0],l=t[1],c=(0,a.useState)(null),d=(0,o.Z)(c,2),m=d[0],u=d[1],h=(0,a.useState)({from:null,to:null}),p=(0,o.Z)(h,2),b=p[0],C=p[1],Z=(0,s.I0)(),M=(0,s.v9)((function(e){return e.interbranchAdmin.detailedReportTable})),P=(0,s.v9)((function(e){return e.interbranchAdmin.detailedReportTableTotalPages})),T=localStorage.getItem(w.x$),I=(T=JSON.parse(T)).userType,E=(0,a.useState)(!0),A=(0,o.Z)(E,2),F=A[0],O=A[1];(0,a.useEffect)((function(){Z((0,i.Oz)({context:"Admin Home useEffect"})).then((function(e){e&&O(!1)}))}),[]);var z=function(){console.log("Downloading report.............."),Z((0,i.yI)({fromDate:b.from,toDate:b.to})).then((function(e){e&&window.open(e,"_blank")}))},U=function(e,n){Z((0,i.bv)(e,n.target.value)).then((function(e){e&&Z((0,i.Oz)({offset:m,context:"Comment Change",fromDate:b.from,toDate:b.to}))}))};return console.log(M),(0,D.jsxs)("div",{className:"mis_report_container",children:[(0,D.jsxs)("div",{className:"header",children:[(0,D.jsxs)("button",{onClick:function(){z()},children:[(0,D.jsx)("div",{className:"icon",children:(0,D.jsx)("i",{class:"far fa-download"})})," Download Report"]}),(0,D.jsxs)("div",{className:"filter-button",children:[(0,D.jsx)("div",{className:"icon",onClick:function(){l(!r)},children:(0,D.jsx)("i",{class:"far fa-calendar-alt"})}),(0,D.jsx)(R,{ref:e,bordered:!1,className:"date-picker",suffixIcon:null,onChange:function(e){if(e){var n=(0,o.Z)(e,2),t=n[0],a=n[1],s=j()().subtract(3,"months");console.log((0,N.xN)(s)),t<s?f.Z.confirm({title:"Confirm",content:"You can only view report within a 3 month span. Do you want to download the report before 3 months?",okText:"Download Report",cancelText:"cancel",onOk:function(){z()}}):(C({from:t,to:a}),Z((0,i.Oz)({fromDate:t,toDate:a,offset:m,context:"Date Change"})))}}})]})]}),(0,D.jsx)("div",{className:"mis_report_table_container",children:(0,D.jsxs)("table",{className:"appoinment-table",children:[(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Appoinment ID"}),(0,D.jsx)("th",{children:"Appoinment Date & Time"}),(0,D.jsx)("th",{children:"Patient Name"}),(0,D.jsx)("th",{children:"Doctor Name"}),I===w.nn?(0,D.jsx)("th",{children:"Hospital Name"}):null,(0,D.jsx)("th",{children:"Fees Paid"}),(0,D.jsx)("th",{children:"C2MD Fees"}),(0,D.jsx)("th",{children:"Nett Fees"}),(0,D.jsx)("th",{children:"Consultation Status"}),(0,D.jsx)("th",{children:"Payment Status"}),(0,D.jsx)("th",{children:"Notes"}),(0,D.jsx)("th",{})]}),(0,D.jsx)("tbody",{children:M?M.length>0?M.map((function(e,n){if(7==n&&console.log(e.Comments),n<=8)return(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:e.appointmentId}),(0,D.jsxs)("td",{children:[e.appointmentDate," ",e.appointmentTime]}),(0,D.jsx)("td",{children:e.patientName}),(0,D.jsx)("td",{children:e.doctorName}),I===w.nn?(0,D.jsx)("td",{children:e.hospital}):null,(0,D.jsx)("td",{children:e.feesPaid}),(0,D.jsx)("td",{children:e.c2mdFees}),(0,D.jsx)("td",{children:e.nettFees}),(0,D.jsx)("td",{children:(0,D.jsx)(g.Z,{text:e.consultationStatus,varient:k(e.consultationStatus)})}),(0,D.jsx)("td",{children:e.paymentStatus}),(0,D.jsx)("td",{children:(0,D.jsx)(y,{value:e.Comments,element:e,onBlur:U})}),(0,D.jsx)("td",{children:(0,D.jsx)("button",{onClick:function(){var n;n=e.appointmentId,Z((0,i.N$)(n)),Z({type:v.Th,payload:{name:"misReportModal",value:!0}})},className:"more-btn",children:"More"})})]})})):(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:12,children:(0,D.jsx)(S.Z,{isLoading:F})})}):console.log("no mis report")})]})}),(0,D.jsxs)("div",{className:"pagination-container-mis-report",children:["\xa0",(0,D.jsx)(x.Z,{showSizeChanger:!1,pageSize:8,onChange:function(e){Z((0,i.Oz)({offset:e-1,context:"Pagination Change",fromDate:b.from,toDate:b.to})),u(e-1)},defaultCurrent:1,total:P?8*P:0})]})]})},P=[{tittle:"Dashboard",options:[{name:"Dashboard",ico:(0,D.jsx)("i",{class:"fal fa-book-medical"}),component:(0,D.jsx)(d.Z,{}),date:"10, February, 2021 - Wednesday"}]},{tittle:"MIS REPORTS",options:[{name:"Detailed Report",ico:(0,D.jsx)("i",{class:"far fa-calendar-alt"}),component:(0,D.jsx)(M,{})},{name:"Consolidate Report",ico:(0,D.jsx)("i",{class:"far fa-file-alt"}),component:(0,D.jsx)(u.Z,{})}]}],T=t(79271);t(14503);var I=function(){var e=(0,s.I0)(),n=(0,T.k6)(),t=(0,a.useState)({menu:"dashboard",option:0}),u=(0,o.Z)(t,2),h=u[0],f=u[1],x=(0,s.v9)((function(e){return e.interbranchModal})),p=(x.ApointmentHistoryModal,x.ViewFileModal,x.deleteFileModel,x.commonDeleteModal,x.PatientDetailsModal,x.todaysReportModal),j=x.misReportModal,g=(0,s.v9)((function(e){return e.login.user})),N=(0,a.useRef)(null);(0,a.useEffect)((function(){}),[]);var b=(0,s.v9)((function(e){return e.login.isSessionActive}));return(0,a.useEffect)((function(){b&&g.token||(console.log("Session out............................................"),n.push("/sessionExpired"))}),[b,g]),(0,D.jsxs)("div",{className:"interbranch-container",children:[(0,D.jsxs)("div",{className:"left-container",children:[(0,D.jsxs)("div",{className:"letf-top",children:[(0,D.jsx)("div",{className:"header-card",style:{marginBottom:"2.5rem",width:"100%",height:"79.14px",color:"rgba(0, 0, 0, 0.85)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:"C2MDAdmin"==g.userType?(0,D.jsx)("div",{className:"dr-name-home text-center w-100",style:{fontWeight:"500"},children:"C2MDAdmin"}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:"dr-name-home text-center w-100",style:{fontWeight:"500"},children:g?g.profileName:"---"}),(0,D.jsxs)("div",{className:"dr-id-home text-center w-100",style:{fontWeight:"500"},children:["ID: ",g?g.profileId:"---"]})]})}),(0,D.jsx)("div",{className:"tittle",onClick:function(){e((0,i.$m)()),f({menu:"dashboard",option:0})},style:{fontWeight:"dashboard"==h.menu?"bold":"normal",cursor:"pointer"},children:"Dashboard"}),P.map((function(n,t){if("Dashboard"!==n.tittle)return(0,D.jsxs)(a.Fragment,{children:[(0,D.jsx)("div",{className:"list-tittle",children:n.tittle}),(0,D.jsx)("ul",{className:"side-nav",children:n.options.map((function(n,o){return(0,D.jsxs)("li",{className:h.menu===t&&h.option===o?"interbranch-active":null,onClick:function(){!function(n){var t=n.menu,o=n.option;1==t&&0==o?e((0,i.Oz)({context:"Dashboard click"})):1==t&&1==o&&e((0,i.iz)())}({menu:t,option:o}),f({menu:t,option:o})},children:[(0,D.jsx)("div",{className:"icon",children:n.ico}),(0,D.jsx)("div",{className:"text",children:n.name})]},o)}))})]},t)}))]}),(0,D.jsxs)("div",{className:"header-card logout",onClick:function(){e((0,r.Cd)(g,n)).then((function(t){t&&(e({type:v.N7}),n.push("/signin"))}))},children:[(0,D.jsx)("div",{className:"icon",children:"\xa0"}),"SIGN OUT"]})]}),(0,D.jsxs)("div",{className:"right-container",ref:N,children:[(0,D.jsxs)("div",{className:"header-card",children:[(0,D.jsx)("span",{children:"dashboard"==h.menu?"Dashboard":"consolidated"==h.menu?"Consolidated":P[h.menu].options[h.option].name}),(0,D.jsx)("span",{className:"caption",children:"\xa0"})]}),(0,D.jsxs)("div",{className:"right-menu-container",children:[(0,D.jsx)(l.Z,{width:700,state:p,modalName:"todaysReportModal",component:(0,D.jsx)(m.Z,{}),isRight:!0}),(0,D.jsx)(l.Z,{width:700,state:j,modalName:"misReportModal",component:(0,D.jsx)(c.Z,{}),isRight:!0}),(0,D.jsx)("div",{className:"container_interbranch",children:"dashboard"==h.menu?(0,D.jsx)(d.Z,{}):P[h.menu].options[h.option].component?P[h.menu].options[h.option].component:null})]})]})]})}}}]);
//# sourceMappingURL=4461.bd02b54b.chunk.js.map