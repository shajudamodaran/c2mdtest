"use strict";(self.webpackChunkconnect2mydoctor=self.webpackChunkconnect2mydoctor||[]).push([[6185],{39017:function(e,t,n){n.d(t,{Xi:function(){return v},cr:function(){return _},ns:function(){return y}});var o,a,r,i=n(15861),s=n(87757),c=n.n(s),d=n(44234),l=n(5557),u=(0,n(59761).detect)(),p=window.navigator.platform,m=window.navigator.userAgent,f=(new Date).toString().replace(/GMT\+(\d\d)(\d\d)/,"GMT+$1:$2"),h=null===f||void 0===f?void 0:f.split("GMT")[1].split(" (")[0];null===(o=h)||void 0===o||o.slice(1);null!=h.search(/\+/g)?h=h.replace(/\+/g,"%2B"):null!=h.search(/\-/g)&&(h=h.replace(/\-/g,"%2D"));var y=function(e){var t=e.isStart,n=e.isNext,o=e.date,s=e.typeofconsultation,f=e.doctorId;return function(){var e=(0,i.Z)(c().mark((function e(i){var y;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.post("getcountrycode",{token:"token",version:"2.0",data:{browserTimeZone:"GMT".concat(h)},requestType:1058});case 2:return a=e.sent,r=a.data.data,e.next=6,l.Z.post("doctortimeslots",{requestType:"175",token:"C2MDVerificationToken",data:{timeSlotCriteria:{doctorId:f,date:o,isStart:t,isNext:n,typeofconsultation:s},browserTimeZone:"GMT".concat(h),todayRate:"73.49680",actualRate:"73.49680",Ipaddress:r.Ipaddress,useragent:m,Browser:u.name+" "+u.version,appname:"C2MD Web",Os:p,accessCountry:r.Country,currency:r.currency}});case 6:200===(y=e.sent).status&&i({type:d.O$,payload:y.data.data});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){var t=e.isStart,n=e.isNext,o=e.date,s=e.typeofconsultation,f=e.doctorId,y=e.isClear;return function(){var e=(0,i.Z)(c().mark((function e(i){var v;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.post("getcountrycode",{token:"token",version:"2.0",data:{browserTimeZone:"GMT".concat(h)},requestType:1058});case 2:return a=e.sent,r=a.data.data,e.next=6,l.Z.post("doctortimeslots",{requestType:"175",token:"C2MDVerificationToken",data:{timeSlotCriteria:{doctorId:f,date:o,isStart:t,isNext:n,typeofconsultation:s},browserTimeZone:"GMT".concat(h),todayRate:"73.49680",actualRate:"73.49680",Ipaddress:r.Ipaddress,useragent:m,Browser:u.name+" "+u.version,appname:"C2MD Web",Os:p,accessCountry:r.Country,currency:r.currency}});case 6:200===(v=e.sent).status&&(console.log(v),i({type:y?d.mW:d.kn,payload:v.data.data}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(){var t=(0,i.Z)(c().mark((function t(n){var o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.post("getcountrycode",{token:"token",version:"2.0",data:{browserTimeZone:"GMT".concat(h)},requestType:1058});case 2:return a=t.sent,r=a.data.data,t.next=6,l.Z.post("gettypeofconsultation",{requestType:"182",token:"C2MDVerificationToken",data:{doctorId:e,browserTimeZone:"GMT".concat(h),Ipaddress:r.Ipaddress,useragent:m,Browser:u.name+" "+u.version,appname:"C2MD Web",Os:p,accessCountry:r.Country,currency:r.currency,todayRate:""}});case 6:return o=t.sent,t.abrupt("return",o.data.data.Details);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},60182:function(e,t,n){n.d(t,{Nb:function(){return D},OQ:function(){return I},Zd:function(){return _},fZ:function(){return Y},or:function(){return b},uf:function(){return k},xg:function(){return x}});var o,a=n(4942),r=n(15861),i=n(87757),s=n.n(i),c=n(44234),d=n(5557),l=n(74569),u=n.n(l),p=(n(56960),n(16030),n(17175).v4()),m=(0,n(59761).detect)(),f=window.navigator.platform,h=window.navigator.userAgent,y=(new Date).toString().replace(/GMT\+(\d\d)(\d\d)/,"GMT+$1:$2"),v=null===y||void 0===y?void 0:y.split("GMT")[1].split(" (")[0];null===(o=v)||void 0===o||o.slice(1);null!=v.search(/\+/g)?v=v.replace(/\+/g,"%2B"):null!=v.search(/\-/g)&&(v=v.replace(/\-/g,"%2D"));var _=function(){return function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("https://run.mocky.io/v3/bb5a24bf-255b-4289-9432-7ff1ebee4320");case 2:n=e.sent,t({type:c.Gd,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:c.cA,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){var t=e.data,n=e.userr,o=e.old_appointment;return function(){var e=(0,r.Z)(s().mark((function e(r){var i,l,u,y;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(0,a.Z)({nationalId:t.nationalId,symptoms:t.symptoms,medicalConditions:t.medicalConditions,patientHeight:"100",firstName:t.firstName,reasonForVisit:t.reasonForVisit,notesToDoctor:t.notesToDoctor,weightMeasurement:"kg",noOfBooking:1,bookingFrom:t.bookingFrom,reminderNumber:t.reminderNumber,appointmentFor:t.appointmentFor,reports:t.reports,blockId:"",basicFees:t.basicFees.split(" ")[1],surgerydetails:t.surgeries,referenceId:t.referenceId,allergies:t.allergies,gender:t.gender,appointmentDate:t.appointmentDate,emergencyname:t.emergencyname,relationship:t.relationship,patientWeight:"200",dob:t.dob,heightMeasurement:"cm",medications:t.medications,emergencyrelation:t.emergencyrelation,dentalInfo:"[]",bookingType:t.bookingType,fees:t.fees,hospitalid:t.hospitalId,typeofconsultation:"",doctorId:t.doctorId,emergencyphone:t.emergencyphone,status:t.status,modeOfConsultation:"Video",duration:t.duration,appointmentTime:t.appointmentTime,lastName:""},"typeofconsultation",t.typeofconsultation),l=[],u=[],console.log("------data",t),""!=t.referenceId){e.next=18;break}if(null!==o&&void 0!==o&&o.info){e.next=14;break}return e.next=8,d.Z.post("/appointments",{token:"C2MDVerificationToken",data:{IsfromMobile:!0,bookingFrom:t.bookingFrom,todayRate:"74.27006",Ipaddress:p,Os:f,browserTimeZone:"GMT".concat(v),attachedReportFiles:"[]",patientId:n.userId,appointmentDetails:i,actualRate:"74.27006",useragent:h,Browser:m.name+" "+m.version,appname:"C2MD Web"},requestType:"161"});case 8:l=e.sent,console.log(l),r({type:c.NQ,payload:l.data.data}),u=l.data.data,e.next=16;break;case 14:u=l=o;case 16:e.next=24;break;case 18:return e.next=20,d.Z.post("/requestordergeneration",{token:"C2MDVerificationToken",data:{IsfromMobile:!0,bookingFrom:t.bookingFrom,todayRate:"74.27006",Ipaddress:p,Os:f,browserTimeZone:"GMT".concat(v),attachedReportFiles:"[]",doctorId:t.doctorId,fees:t.fees,appointmentId:t.referenceId,appointmentDetails:i,actualRate:"74.27006",useragent:h,Browser:m.name+" "+m.version,appname:"C2MD Web"},requestType:"1023"});case 20:l=e.sent,u=l.data.data,i.bookingFrom="Request",i.referenceId=u.info;case 24:"Request"==(null===t||void 0===t?void 0:t.bookingFrom)?(localStorage.setItem("RequestId",null===(y=u)||void 0===y?void 0:y.info),{appoinmentId:"",appoinmentFromTime:"",appoinmentToTime:"",appoinmentType:"Request"},r({type:c.j6,payload:"Request"})):r(T({orderRes:u,orderdata:i,user:n,formData:t}));case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function g(e){return new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t(!0)},n.onerror=function(){t(!1)},document.body.appendChild(n)}))}var T=function(e){var t=e.orderRes,n=e.orderdata,o=e.user,a=e.formData;return function(){var e=(0,r.Z)(s().mark((function e(i){var c,d,l,u,p,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:c={amount:100*n.basicFees,currency:"INR",receipt:"Receipt no. 1",payment_capture:1,notes:{notes_key_1:"Tea, Earl Grey, Hot",notes_key_2:"Tea, Earl Grey\u2026 decaf."},order_id:null===t||void 0===t?void 0:t.orderId},d=c.amount,l=c.order_id,u=c.currency,p={key:t.paymentgatewaykey,amount:d.toString(),currency:u,name:null===a||void 0===a?void 0:a.hospitalname,description:"",image:null===a||void 0===a?void 0:a.clinicLogo,order_id:l,handler:function(){var e=(0,r.Z)(s().mark((function e(a){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={orderCreationId:l,razorpayPaymentId:a.razorpay_payment_id,razorpayOrderId:a.razorpay_order_id,razorpaySignature:a.razorpay_signature},i(M({razorpayRes:r,orderData:n,user:o,orderRes:t}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),prefill:{name:"<YOUR NAME>",email:o.userName,contact:o.mobileNumber},notes:{address:"Example Corporate Office"},theme:{color:"#61dafb"}},(m=new window.Razorpay(p)).on("payment.failed",(function(e){})),m.open();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(e){var t=e.razorpayRes,n=e.orderData,o=e.user,a=e.orderRes;return function(){var e=(0,r.Z)(s().mark((function e(r){var i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.post("signatureverification",{data:{razorpay_signature:t.razorpaySignature,useragent:h,razorpay_order_id:t.razorpayOrderId,razorpay_payment_id:t.razorpayPaymentId,Ipaddress:p,Os:f,Browser:m.name+" "+m.version,appname:"C2MD Web"},token:"C2MDVerificationToken",requestType:"1025"});case 2:c=e.sent,"Success"===(null===(i=c.data)||void 0===i?void 0:i.data.status)&&r(S({razorpayRes:t,orderData:n,user:o,orderRes:a}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){var t=e.razorpayRes,n=e.orderData,o=e.user,a=e.orderRes;return function(){var e=(0,r.Z)(s().mark((function e(r){var i,l,u,y,_,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={transactionPG:"RAZORPAY",userId:o.userId,appointmentDetails:{appointmentBook:{patientHeight:"100",firstName:n.firstName,reasonForVisit:n.reasonForVisit,notesToDoctor:n.notesToDoctor,weightMeasurement:"kg",noOfBooking:1,bookingFrom:n.bookingFrom,reminderNumber:n.reminderNumber,appointmentFor:n.appointmentFor,reports:n.reports,blockId:null===a||void 0===a?void 0:a.info,basicFees:n.basicFees,referenceId:n.referenceId,surgerydetails:n.surgerydetails,allergies:n.allergies,symptoms:n.symptoms,medicalConditions:n.medicalConditions,medications:n.medications,gender:n.gender,appointmentDate:n.appointmentDate,emergencyname:n.emergencyname,relationship:n.relationship,patientWeight:"200",dob:n.dob,heightMeasurement:"cm",emergencyrelation:n.emergencyrelation,dentalInfo:"[]",bookingType:n.bookingType,fees:n.fees,hospitalid:"",typeofconsultation:n.typeofconsultation,doctorId:n.doctorId,emergencyphone:n.emergencyphone,status:n.status,modeOfConsultation:"Video",duration:n.duration,appointmentTime:n.appointmentTime,lastName:""},couponCode:"",bookingId:null===a||void 0===a?void 0:a.info},actualRate:"74.27006",couponCode:"",Ipaddress:p,transactionId:t.razorpayPaymentId,blockId:null===a||void 0===a?void 0:a.info,browserTimeZone:"GMT".concat(v),attachedReportFiles:"[]",Os:f,useragent:h,razorpayId:t.razorpayPaymentId,patientId:o.userId,referenceId:"",todayRate:"74.27006",bookingFrom:n.bookingFrom,Browser:m.name+" "+m.version,appname:"C2MD Web"},e.next=3,d.Z.post("payment",{data:i,token:"C2MDVerificationToken",requestType:"313"});case 3:l=e.sent,u=l.data.data,y=localStorage.getItem("appinmentTime"),_=JSON.parse(y),b={appoinmentId:u,appoinmentFromTime:null===_||void 0===_?void 0:_.appoinmentFromTime,appoinmentToTime:null===_||void 0===_?void 0:_.appoinmentToTime,appoinmentType:"Book"},"Failed"!==(null===u||void 0===u?void 0:u.info)&&(r({type:c.j6,payload:b}),localStorage.removeItem("appinmentTime"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:c.xT,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:c.nX,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:c.$N});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:c.S2});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},63637:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(72791),a="BookAppointment_doctor_listing_modal_align__PJAhs",r="BookAppointment_doctor_listing_heading__17ZW-",i=(n(81694),n(95316)),s=n(45102),c=n(85820),d=(n(45987),n(1413)),l=n(29439),u=n(16030),p=(n(96766),n(43360)),m=n(24182),f=n(88229),h=n(39017),y=(n(65141),{Schedule:"MobileSchedule_Schedule__MBDIl",Select_wrapper:"MobileSchedule_Select_wrapper__iFFFC",SubText:"MobileSchedule_SubText__7Kbmv",appointmentTypeTxt:"MobileSchedule_appointmentTypeTxt__ia7c9",monthLeft:"MobileSchedule_monthLeft__KCMve",availableTimeTxt:"MobileSchedule_availableTimeTxt__T+bQh",availableTimeTxtimg:"MobileSchedule_availableTimeTxtimg__50nC5",left_Text:"MobileSchedule_left_Text__wD7GT",Schedule_Bottom:"MobileSchedule_Schedule_Bottom__pvRLA",BottomTop:"MobileSchedule_BottomTop__fLfay",right_Text:"MobileSchedule_right_Text__iFSo4",SliderItem:"MobileSchedule_SliderItem__hhhtm",Day_head:"MobileSchedule_Day_head__XQePB",Day_text:"MobileSchedule_Day_text__lN+51",SliderItemInner:"MobileSchedule_SliderItemInner__P7DvN",OnlyOnRequest:"MobileSchedule_OnlyOnRequest__Dn4JY",textContent:"MobileSchedule_textContent__3FOJE",req_btn_wrp:"MobileSchedule_req_btn_wrp__Hxj5o",reqst_btn:"MobileSchedule_reqst_btn__j0-aG",TimeSlot_main_wrapper:"MobileSchedule_TimeSlot_main_wrapper__i8ahI",timeSlot_btn:"MobileSchedule_timeSlot_btn__8P1d7",timeSolt_wrapper:"MobileSchedule_timeSolt_wrapper__BLRpP",Loadmore:"MobileSchedule_Loadmore__4DCEy"}),v=n(79271),_=n(131),b=n.n(_),x=n(60182),g=n(80184);var T=function(e){e.responsive,e.Typeofappointment;var t,a,r,i=e.doctorId,c=(e.DayCounter,n(72426)),_=(0,o.useState)(""),T=(0,l.Z)(_,2),M=T[0],S=T[1],Y=(0,o.useState)(!1),D=(0,l.Z)(Y,2),k=D[0],I=D[1],N=(0,o.useState)([]),Z=(0,l.Z)(N,2),j=Z[0],w=Z[1],A=(0,u.I0)(),C=(0,v.k6)(),R=(0,u.v9)((function(e){return e.login})),F=((0,v.TH)(),(0,o.useState)("")),O=(0,l.Z)(F,2),q=O[0],B=O[1],G=function(e,t){var n="".concat(e.year,"-").concat(e.month+1,"-").concat(e.dates," ").concat(t),o=c().format("YYYY-MM-DD hh:mm");return c(n,"YYYY-MM-DD hh:mm A").isBefore(o)},P=(0,u.v9)((function(e){return e.bookAppoinment.appoinment_form}));(0,o.useEffect)((function(){var e=c().subtract(1,"d").format("DD MM YYYY");A((0,x.OQ)()),A((0,h.cr)(i)).then((function(t){w(t),B(t[0].Type),I("On Request"==t[0].availableType),H(e,t[0].Type),S("".concat(t[0].Type," (").concat(t[0].Amount.split(".")[0],") for up to ").concat(t[0].Duration," Min")),A((0,x.or)((0,d.Z)((0,d.Z)({},P),{},{typeofconsultation:t[0].Type,doctorfees:t[0].doctorfees,gstamount:t[0].Gst,fees:t[0].Amount,duration:t[0].Duration,c2mdfees:t[0].c2mdFees,basicFees:t[0].doctorfees})))}))}),[]);var H=function(e,t){A((0,h.ns)({isStart:!0,isNext:!1,date:e,doctorId:i,typeofconsultation:t}))},z=(0,u.v9)((function(e){return e.doctorDetail.timeSlot})),E=z&&z.length>0&&z[0],V=function(){var e,t="".concat(null===(e=z[z.length-1])||void 0===e?void 0:e.dates," ").concat(z[z.length-1].month+1," ").concat(z[z.length-1].year),n=c(t,"DD MM YYYY").format("DD MM YYYY");A((0,h.Xi)({isStart:!1,isNext:!0,date:n,doctorId:i,typeofconsultation:q}))},L=function(e){!function(e){var t=c().subtract(1,"d").format("DD MM YYYY");S("".concat(e.Type," (").concat(e.doctorfees," for upto ").concat(e.Duration," Min)")),B(e.Type),I("On Request"==e.availableType),A((0,h.ns)({isStart:!1,isNext:!0,date:t,typeofconsultation:e.Type,doctorId:i}))}(e),A((0,x.or)((0,d.Z)((0,d.Z)({},P),{},{typeofconsultation:e.Type,doctorfees:e.doctorfees,gstamount:e.Gst,fees:e.Amount,duration:e.Duration,c2mdfees:e.c2mdFees,basicFees:e.Amount})))};return(0,g.jsxs)("div",{className:y.Schedule,children:[(0,g.jsxs)("div",{className:y.Select_wrapper,children:[(0,g.jsxs)("p",{className:y.appointmentTypeTxt,children:[" ",(0,g.jsx)("img",{src:s.Z.appointment,alt:"appointment"}),"Appointment type"]}),(0,g.jsxs)(m.Z,{children:[(0,g.jsxs)(m.Z.Toggle,{variant:"success",id:"dropdown-basic",children:[null===(t=M.split("("))||void 0===t?void 0:t[0],(0,g.jsx)("span",{className:y.SubText,children:(null===(a=M.split("("))||void 0===a?void 0:a[1])&&"( "+(null===(r=M.split("("))||void 0===r?void 0:r[1])})]}),(0,g.jsx)(m.Z.Menu,{children:j.map((function(e,t){return(0,g.jsxs)(m.Z.Item,{onClick:function(){L(e)},children:[e.Type," ",(0,g.jsxs)("span",{className:y.SubText,children:["(",e.doctorfees," for upto ",e.Duration," Min)"]})]})}))})]})]}),(0,g.jsxs)("p",{className:y.availableTimeTxt,children:[(0,g.jsxs)("span",{className:y.availableTimeTxtimg,children:[(0,g.jsx)("img",{src:s.Z.time,alt:"time"}),"Select an available time"]}),(0,g.jsx)("p",{className:y.left_Text,children:(0,g.jsxs)("span",{children:[" ",c("".concat(E.year,"-").concat(E.month+1,"-").concat(E.dates),"YYYY-MM-DD").format("MMM")," ",c("".concat(E.year,"-").concat(E.month+1,"-").concat(E.dates),"YYYY-MM-DD").format("YYYY")]})})]}),k?(0,g.jsx)(f.Z,{bookingApp:function(){A((0,x.or)((0,d.Z)((0,d.Z)({},P),{},{appointmentDate:"",appointmentTime:"",bookingFrom:"Request",bookingType:"Request",doctorId:i,routing:!0}))),R.login?C.push({pathname:"/bookAppointment/".concat(i),state:{doctorId:i}}):C.push({pathname:"/signin",state:{redirection:"/bookAppointment/".concat(i)}})}}):(0,g.jsx)("div",{className:y.Schedule_Bottom,children:(0,g.jsxs)(b(),{loadMore:function(){return V()},hasMore:!0,pageStart:1,children:[z&&z.map((function(e,t){var n;return(0,g.jsxs)(g.Fragment,{children:[z[t]&&1==(null===(n=z[t])||void 0===n?void 0:n.dates)&&(0,g.jsx)("p",{className:y.monthLeft,children:(0,g.jsxs)("span",{children:[" ",c("".concat(z[t].year,"/").concat(z[t].month+1,"/").concat(z[t].dates)).format("MMM")," ",c("".concat(z[t].year,"/").concat(z[t].month+1,"/").concat(z[t].dates)).format("YYYY")]})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:y.SliderItem,children:(0,g.jsxs)("p",{className:y.Day_text,children:[e.dates," ",c("".concat(e.year,"/").concat(e.month+1,"/").concat(e.dates)).format("dddd")]})}),(0,g.jsx)("div",{className:y.SliderItemInner,children:e.requestSlot?(0,g.jsxs)("div",{className:y.OnlyOnRequest,children:[(0,g.jsx)("h6",{className:y.textContent,children:"Only On Request"}),(0,g.jsx)("div",{className:y.req_btn_wrp,children:(0,g.jsx)(p.Z,{variant:"outline-primary",className:y.reqst_btn,onClick:function(){return I(!0)},children:"Request Now"})})]}):(0,g.jsx)("div",{className:y.TimeSlot_main_wrapper,children:(0,g.jsx)("div",{className:y.timeSolt_wrapper,children:e.slots.length>0?G(e,e.slots[e.slots.length-1].time)?(0,g.jsx)(p.Z,{variant:"outline-primary",className:"".concat(y.timeSlot_btn,"  ").concat(y.Noslots_btn),disabled:!0,children:"No slots available"}):e.slots.map((function(t){if(!G(e,t.time))return(0,g.jsx)(p.Z,{variant:"outline-primary",className:y.timeSlot_btn,onClick:function(){return function(e,t,n,o){var a="".concat(t.year,"-").concat(t.month+1,"-").concat(t.dates," "),r=c(a,"YYYY-MM-DD").format("DD-MMMM-YYYY"),s=c(e,["h:mm A"]).format("HH:mm"),l=c(e,["h:mm A"]).add(15,"minutes").format("HH:mm"),u="".concat(t.year,"-").concat(t.month+1,"-").concat(t.dates," ").concat(s),p="".concat(t.year,"-").concat(t.month+1,"-").concat(t.dates," ").concat(l),m=c(u,"YYYY-MM-DD HH:mm").format("YYYY-MM-DDTHH:mm:ss");localStorage.setItem("appinmentTime",JSON.stringify({appoinmentFromTime:m,appoinmentToTime:p})),A((0,x.or)((0,d.Z)((0,d.Z)({},P),{},{appointmentDate:r,appointmentTime:e,bookingFrom:o,bookingType:n,appoinmentFromTime:m,appoinmentToTime:p,doctorId:i,routing:!0}))),R.login?C.push({pathname:"/bookAppointment/".concat(i),state:{doctorId:i}}):C.push({pathname:"/signin",state:{redirection:"/bookAppointment/".concat(i)}})}(t.time,e,"Book","AppointmentBooking")},children:t.time},t.time)})):(0,g.jsx)(p.Z,{variant:"outline-primary",className:"".concat(y.timeSlot_btn,"  ").concat(y.Noslots_btn),disabled:!0,children:"No slots available"})})})})]},t)]})})),(0,g.jsx)(p.Z,{variant:"outline-primary",className:y.Loadmore,onClick:V,children:"Load More"})]})})]})},M=n(73424);var S=function(e){var t=e.show,n=e.handleClose,o=e.doctorId,s=(0,M.B)().width,d={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:3},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},l={next:2,back:4};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i.Z,{show:t,onHide:n,className:"".concat(a," book_modal"),children:[(0,g.jsx)(i.Z.Header,{closeButton:!0,className:r,children:(0,g.jsx)(i.Z.Title,{children:"Book your Appointment"})}),(0,g.jsx)(i.Z.Body,{children:s>=992?(0,g.jsx)(c.default,{responsive:d,doctorId:o,DayCounter:l}):(0,g.jsx)(T,{responsive:d,doctorId:o,DayCounter:l})})]})})}},88229:function(e,t,n){n.d(t,{Z:function(){return h}});n(72791);var o="AppointmentOnRequest_AppointmentOnRequest__mWZQV",a="AppointmentOnRequest_wrapper__EmNCg",r="AppointmentOnRequest_leftSection__aG9u0",i="AppointmentOnRequest_heading__0gXzs",s="AppointmentOnRequest_content__ba3WZ",c="AppointmentOnRequest_rightSection__1UI-B",d="AppointmentOnRequest_reqst_btn__Z4GTn",l="AppointmentOnRequest_rqst_text__sFbvz",u=n(89743),p=n(2677),m=n(43360),f=n(80184);var h=function(e){var t=e.bookingApp;return(0,f.jsx)("div",{className:o,children:(0,f.jsxs)(u.Z,{className:a,children:[(0,f.jsx)(p.Z,{sm:12,md:7,lg:7,children:(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("h6",{className:i,children:"Appointment available only on request"}),(0,f.jsx)("p",{className:s,children:"To request an appointment, click the Request Now button"})]})}),(0,f.jsx)(p.Z,{sm:12,md:5,lg:5,children:(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)(m.Z,{variant:"outline-primary",className:d,onClick:function(){t()},children:"Request Now"}),(0,f.jsx)("p",{className:l,children:"Payment once appointment is confirmed"})]})})]})})}},85820:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var o=n(45987),a=n(1413),r=n(29439),i=n(72791),s=n(16030),c=n(96766),d=n(43360),l=n(24182),u=n(88229),p=n(39017),m=n(45102),f=n(60182),h=(n(65141),"Schedule_Schedule__DqFpt"),y="Schedule_Select_wrapper__AFmfo",v="Schedule_SubText__vI2ai",_="Schedule_appointmentTypeTxt__WuRoa",b="Schedule_availableTimeTxt__cIJL6",x="Schedule_errmsg__Bxsm4",g="Schedule_Schedule_Bottom__nBcYS",T="Schedule_BottomTop__mualf",M="Schedule_left_Text__5VmdD",S="Schedule_right_Text__Sfgox",Y="Schedule_SliderItem__-UsJg",D="Schedule_Day_head__wXiUv",k="Schedule_Day_head_active__kVdaH",I="Schedule_Day_text__qrPs+",N="Schedule_SliderItemInner__0qxid",Z="Schedule_TimeSlot_main_wrapper__KSmIg",j="Schedule_timeSlot_btn__9dnLF",w="Schedule_timeSolt_wrapper__AUIfO",A="Schedule_noSoltsAvailable__lrvu5",C=n(79271),R=n(56960),F=n(80184),O=["next","previous","goToSlide"];var q=function(e){var t,q,B,G=e.responsive,P=(e.Typeofappointment,e.doctorId),H=e.DayCounter,z=n(72426),E=(0,i.useState)(""),V=(0,r.Z)(E,2),L=V[0],W=V[1],J=(0,i.useState)(!1),Q=(0,r.Z)(J,2),X=Q[0],$=Q[1],U=(0,i.useState)([]),K=(0,r.Z)(U,2),ee=K[0],te=K[1],ne=(0,i.useState)(""),oe=(0,r.Z)(ne,2),ae=oe[0],re=oe[1],ie=(0,i.useState)(1),se=(0,r.Z)(ie,2),ce=se[0],de=se[1],le=(0,s.I0)(),ue=(0,C.k6)(),pe=((0,C.TH)(),(0,i.useState)(!1)),me=(0,r.Z)(pe,2),fe=me[0],he=me[1],ye=(0,s.v9)((function(e){return e.bookAppoinment.appoinment_form}));(0,i.useEffect)((function(){var e=z().subtract(1,"d").format("DD MM YYYY");le((0,f.OQ)()),le((0,p.cr)(P)).then((function(t){te(t),re(t[0].Type),$("On Request"==t[0].availableType),ve(e,t[0].Type),W("".concat(t[0].Type," (").concat(t[0].Amount.split(".")[0]," for upto ").concat(t[0].Duration," Min)")),de(t[0].Amount),le((0,f.or)((0,a.Z)((0,a.Z)({},ye),{},{typeofconsultation:t[0].Type,doctorfees:t[0].doctorfees,gstamount:t[0].Gst,fees:t[0].Amount,duration:t[0].Duration,c2mdfees:t[0].c2mdFees,basicFees:t[0].doctorfees.split(" ")[1]})))}))}),[]);var ve=function(e,t){le((0,p.ns)({isStart:!0,isNext:!1,date:e,doctorId:P,typeofconsultation:t}))},_e=(0,s.v9)((function(e){return e.login})),be=(0,s.v9)((function(e){return e.doctorDetail.timeSlot})),xe=be&&be.length>0&&be[0],ge=function(e,t){var n="".concat(e.year,"-").concat(e.month+1,"-").concat(e.dates," ").concat(t),o=z().format("YYYY-MM-DD hh:mm A");return z(n).isBefore(o)},Te=function(e){e.next,e.previous;var t,n,a,r=e.goToSlide,i=(0,o.Z)(e,O).carouselState.currentSlide;return(0,F.jsxs)("div",{className:"carousel-button-group",style:{display:"flex"},children:[(0,F.jsx)("div",{style:{flex:1,border:0},children:(0,F.jsx)(d.Z,{style:{float:"left",borderColor:"#F5F6F8"},variant:"outline-primary",className:0===i?"disable":"",onClick:function(){0!==i&&r(i-(null===H||void 0===H?void 0:H.back));var e="".concat(be[0].year,"-").concat(be[0].month+1,"-").concat(be[0].dates," "),t=z(e).subtract(null===H||void 0===H?void 0:H.back,"d").format("DD MM YYYY"),n=z().format("YYYY-MM-DD"),o=z(n).isAfter(e);z(e).isSame(z().format("YYYY-M-DD"))||o||le((0,p.ns)({isStart:!0,isNext:!0,date:t,doctorId:P,typeofconsultation:ae}))},children:!z("".concat(null===(t=be[0])||void 0===t?void 0:t.year,"-").concat((null===(n=be[0])||void 0===n?void 0:n.month)+1,"-").concat(null===(a=be[0])||void 0===a?void 0:a.dates)).isSame(z().format("YYYY-M-DD"))&&(0,F.jsx)("img",{src:m.Z.rightArrow,alt:"<"})})}),(0,F.jsx)("div",{style:{flex:1},children:(0,F.jsx)(d.Z,{variant:"outline-primary",onClick:function(){var e="".concat(be[null===H||void 0===H?void 0:H.next].dates," ").concat(be[null===H||void 0===H?void 0:H.next].month+1," ").concat(be[null===H||void 0===H?void 0:H.next].year);le((0,p.ns)({isStart:!1,isNext:!0,date:e,doctorId:P,typeofconsultation:ae}))},style:{float:"right",borderColor:"#F5F6F8"},children:(0,F.jsx)("img",{src:m.Z.rightArrow,alt:">"})})})]})},Me=function(e){var t,n=null===(t=e.Amount)||void 0===t?void 0:t.split(e.Currency);de(n[1]),function(e){var t=z().subtract(1,"d").format("DD MM YYYY");W("".concat(e.Type," (").concat(e.Amount.split(".")[0]," for up to ").concat(e.Duration," Min)")),re(e.Type),$("On Request"==e.availableType),le((0,p.ns)({isStart:!1,isNext:!0,date:t,typeofconsultation:e.Type,doctorId:P}))}(e),le((0,f.or)((0,a.Z)((0,a.Z)({},ye),{},{typeofconsultation:e.Type,doctorfees:e.doctorfees,gstamount:e.Gst,fees:e.Amount,duration:e.Duration,c2mdfees:e.c2mdFees,basicFees:e.Amount})))};return(0,F.jsxs)("div",{className:h,children:[(0,F.jsxs)("div",{className:y,children:[(0,F.jsxs)("p",{className:_,children:[" ",(0,F.jsx)("img",{src:m.Z.appointment,alt:"appointment"}),"Appointment type"]}),(0,F.jsxs)(l.Z,{children:[(0,F.jsxs)(l.Z.Toggle,{variant:"success",id:"dropdown-basic",children:[null===(t=L.split("("))||void 0===t?void 0:t[0],(0,F.jsx)("span",{className:v,children:(null===(q=L.split("("))||void 0===q?void 0:q[1])&&"("+(null===(B=L.split("("))||void 0===B?void 0:B[1])})]}),(0,F.jsx)(l.Z.Menu,{children:ee.map((function(e,t){return(0,F.jsxs)(l.Z.Item,{onClick:function(){Me(e)},children:[e.Type," ",(0,F.jsxs)("span",{className:v,children:["(",e.Amount.split(".")[0]," for up to ",e.Duration," Min)"]})]})}))})]})]}),(0,F.jsxs)("div",{className:b,children:[(0,F.jsx)("img",{src:m.Z.time,alt:"time"}),X?"Request for an appointment":"Select an available time"]}),0==ce&&(0,F.jsx)("p",{className:x,children:"You can't book appointment for this doctor. Please contact the support team"}),X?(0,F.jsx)(u.Z,{bookingApp:function(){localStorage.setItem("doctrID",P),le((0,f.or)((0,a.Z)((0,a.Z)({},ye),{},{appointmentDate:"",appointmentTime:"",bookingFrom:"Request",bookingType:"Request",doctorId:P,routing:!0}))),0==ce?fe||R.Am.error("Please contact our support team ",{position:R.Am.POSITION.TOP_CENTER,hideProgressBar:!0,onOpen:function(e){return he(!0)},onClose:function(e){return he(!1)}}):_e.login?ue.push({pathname:"/bookAppointment/".concat(P),state:{doctorId:P}}):ue.push({pathname:"/signin",state:{redirection:"/bookAppointment/".concat(P)}})}}):be&&0!=be.length&&(0,F.jsxs)("div",{className:g,children:[(0,F.jsxs)("div",{className:T,children:[(0,F.jsxs)("p",{className:M,onClick:function(){var e="".concat(be[0].year,"-").concat(be[0].month+1,"-1"),t=z().format("YYYY-MM-DD"),n=z(t).isBefore(z(e).subtract(1,"months"));if(!(e<=z().format("YYYY-M")+"-1")){var o="";o=n?z(e).subtract(1,"months").subtract(1,"day").format("DD MM YYYY"):z("".concat(be[0].year,"-").concat(be[0].month+1,"-").concat(z(t).format("DD"))).subtract(1,"months").subtract(1,"day").format("DD MM YYYY"),le((0,p.ns)({isStart:!1,isNext:!0,date:o,doctorId:P,typeofconsultation:ae}))}},children:[!(z("".concat(xe.year,"-").concat(xe.month+1,"-1"),"YYYY-MM-D").format("YYYY-M-D")<=z().format("YYYY-M")+"-1")&&(0,F.jsx)("img",{src:m.Z.nextArrow,alt:"",style:{transform:"rotate(180deg)",width:"8px"}})," ",z("".concat(xe.year,"-").concat(xe.month+1,"-").concat(xe.dates),"YYYY-MM-DD").format("MMMM")," ",xe.year]}),(0,F.jsxs)("p",{className:S,onClick:function(){var e="".concat(be[0].year,"-").concat(be[0].month+1,"-1"),t=z(e).endOf("month").format("DD MM YYYY");le((0,p.ns)({isStart:!1,isNext:!0,date:t,doctorId:P,typeofconsultation:ae}))},children:["Next Month",(0,F.jsx)("img",{src:m.Z.nextArrow,alt:""})]})]}),(0,F.jsx)(c.default,{responsive:G,showDots:!1,arrows:!1,customButtonGroup:(0,F.jsx)(Te,{}),renderButtonGroupOutside:!0,children:be&&be.map((function(e,t){return(0,F.jsxs)("div",{children:[(0,F.jsxs)("div",{className:Y,children:[(0,F.jsx)("div",{className:z(new Date).date()==e.dates?k:D,children:e.dates}),(0,F.jsx)("p",{className:I,children:z("".concat(e.year,"-").concat(e.month+1,"-").concat(e.dates),"YYYY-MM-DD").format("dddd")})]}),(0,F.jsx)("div",{className:N,children:e.requestSlot?(0,F.jsx)("div",{className:Z,children:(0,F.jsx)("div",{className:w,children:(0,F.jsx)("p",{className:A,children:"No slots available"})})}):(0,F.jsx)("div",{className:Z,children:(0,F.jsx)("div",{className:w,children:e.slots.length>0?ge(e,e.slots[e.slots.length-1].time)?(0,F.jsx)("p",{className:A,children:"No slots available"}):e.slots.map((function(t){if(!ge(e,t.time))return(0,F.jsx)(d.Z,{variant:"outline-primary",className:j,onClick:function(){return function(e,t,n,o){var r;if("Doctor"===(null===_e||void 0===_e||null===(r=_e.user)||void 0===r?void 0:r.userType))fe||R.Am.error("Sorry,This booking facility is allowed only for patients",{position:R.Am.POSITION.TOP_CENTER,hideProgressBar:!0,onOpen:function(e){return he(!0)},onClose:function(e){return he(!1)}});else if(0==ce)fe||R.Am.error("Please contact our support team ",{position:R.Am.POSITION.TOP_CENTER,hideProgressBar:!0,onOpen:function(e){return he(!0)},onClose:function(e){return he(!1)}});else{var i="".concat(t.year,"-").concat(t.month+1,"-").concat(t.dates," "),s=z(i,"YYYY-MM-DD").format("DD-MMMM-YYYY"),c=z(e,["h:mm A"]).format("HH:mm"),d=z(e,["h:mm A"]).add(15,"minutes").format("HH:mm"),l="".concat(t.year,"-").concat(t.month+1,"-").concat(t.dates," ").concat(c),u="".concat(t.year,"-").concat(t.month+1,"-").concat(t.dates," ").concat(d),p=z(l,"YYYY-MM-DD HH:mm").format("YYYY-MM-DD HH:mm");localStorage.setItem("appinmentTime",JSON.stringify({appoinmentFromTime:p,appoinmentToTime:u})),le((0,f.or)((0,a.Z)((0,a.Z)({},ye),{},{appointmentDate:s,appointmentTime:e,bookingFrom:o,bookingType:n,appoinmentFromTime:p,appoinmentToTime:u,doctorId:P,routing:!0}))),_e.login?ue.push({pathname:"/bookAppointment/".concat(P),state:{doctorId:P}}):ue.push({pathname:"/signin",state:{redirection:"/bookAppointment/".concat(P)}})}}(t.time,e,"Book","AppointmentBooking")},children:t.time},t.time)})):(0,F.jsx)("p",{className:A,children:"No slots available"})})})})]},t)}))})]})]})}}}]);
//# sourceMappingURL=6185.94c6cc8a.chunk.js.map