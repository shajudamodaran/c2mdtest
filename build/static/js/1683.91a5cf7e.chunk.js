"use strict";(self.webpackChunkconnect2mydoctor=self.webpackChunkconnect2mydoctor||[]).push([[1683],{2549:function(e,r,n){n.d(r,{Z:function(){return f},v:function(){return h}});var s,o=n(15861),t=n(87757),a=n.n(t),i=n(5557),c=n(89704),d=n.n(c),l=(0,n(59761).detect)(),u=window.navigator.platform,m=window.navigator.userAgent,_=(new Date).toString().replace(/GMT\+(\d\d)(\d\d)/,"GMT+$1:$2"),p=null===_||void 0===_?void 0:_.split("GMT")[1].split(" (")[0];null===(s=p)||void 0===s||s.slice(1);null!=p.search(/\+/g)?p=p.replace(/\+/g,"%2B"):null!=p.search(/\-/g)&&(p=p.replace(/\-/g,"%2D"));var f=function(e){var r=e.values,n=e.userId;return function(){var e=(0,o.Z)(a().mark((function e(s){var o,t,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("getcountrycode",{token:"token",version:"2.0",data:{browserTimeZone:"GMT".concat(p)},requestType:1058});case 2:return o=e.sent,t=o.data.data,c=d().SHA512("C2MD|"+r.confirmPassword),e.next=7,i.Z.post("updateForgotPassword",{token:"C2MDVerificationToken",data:{password:c.toString(),userId:n,browserTimeZone:"GMT".concat(p),Ipaddress:t.Ipaddress,useragent:m,Browser:l.name+" "+l.version,appname:"C2MD Web",Os:u,currency:t.currency,accessCountry:t.Country},requestType:6});case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},h=function(e){var r=e.type,n=e.searchkey;return function(){var e=(0,o.Z)(a().mark((function e(s){var o,t,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("getcountrycode",{token:"token",version:"2.0",data:{browserTimeZone:"GMT".concat(p)},requestType:1058});case 2:return o=e.sent,t=o.data.data,console.log({type:r,searchkey:n}),e.next=7,i.Z.post("checkuserAvailablity",{requestType:5,token:"C2MDVerificationToken",data:{type:r,searchkey:n,browserTimeZone:"GMT".concat(p),Ipaddress:t.Ipaddress,useragent:m,Browser:l.name+" "+l.version,appname:"C2MD Web",Os:u,currency:t.currency,accessCountry:t.Country}});case 7:if(c=e.sent,console.log("Check user responce == >",c),200!==c.status){e.next=11;break}return e.abrupt("return",c.data&&c.data);case 11:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}},80132:function(e,r,n){n.d(r,{Z:function(){return w}});n(72791);var s="FooterMobileScreen_mobile_footer_align__qKYsf",o="FooterMobileScreen_mobile_footer_top_banner__h0mkV",t="FooterMobileScreen_mobile_footer_first_div__mY6Hp",a="FooterMobileScreen_mobile_footer_main_heading__wFf-m",i="FooterMobileScreen_mobile_footer_space_between__170t8",c="FooterMobileScreen_footer_img_align__pQXog",d="FooterMobileScreen_mobile_footer_second_div__eRb4l",l="FooterMobileScreen_mobile_footer_sub_heading__vmSOC",u="FooterMobileScreen_mobile_footer_content__p+QZl",m="FooterMobileScreen_mobile_footer_bottom__IxW0j",_=n(45102),p=n(47022),f=n(89743),h=n(80184);var w=function(){return(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("div",{className:o,children:(0,h.jsx)(p.Z,{children:(0,h.jsxs)(f.Z,{className:t,children:[(0,h.jsxs)("div",{className:"col-6 mob_footer_left",children:[(0,h.jsx)("h2",{className:a,children:"Download the app today!"}),(0,h.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.neevlabs.connect2mydoctorpatient&hl=en",target:"_blank",children:(0,h.jsx)("img",{src:_.Z.google_play_icon,className:i})}),(0,h.jsx)("a",{href:"https://apps.apple.com/au/app/connect2mydoctor-for-patients/id1490627746",target:"_blank",children:(0,h.jsx)("img",{src:_.Z.app_store_icon,className:i})})]}),(0,h.jsx)("div",{className:"col-6 img_footer",children:(0,h.jsx)("img",{src:_.Z.footer_img,className:c})})]})})}),(0,h.jsx)("div",{className:m,children:(0,h.jsx)(p.Z,{children:(0,h.jsxs)(f.Z,{className:d,children:[(0,h.jsx)("p",{className:l,children:"Connect2MyDoctor cannot be used in case of emergency"}),(0,h.jsx)("p",{className:u,children:"Connect2MyDoctor does not provide medical advice, diagnosis, or treatment"})]})})})]})}},42026:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var s=n(29439),o=n(72791),t=n(80132),a="Loginlayout_LoginLayout_body__bgPSm",i=n(73424),c=n(79271),d=n(80184),l=o.lazy((function(){return Promise.all([n.e(7175),n.e(5615),n.e(3675),n.e(8847),n.e(2688),n.e(2959),n.e(7090),n.e(3844),n.e(5507)]).then(n.bind(n,45507))})),u=o.lazy((function(){return n.e(4460).then(n.bind(n,34460))}));var m=function(e){var r=e.children,n=(0,i.B)().width,m=(0,o.useState)(!1),_=(0,s.Z)(m,2),p=_[0],f=_[1],h=(0,o.useState)(""),w=(0,s.Z)(h,2),v=w[0],g=w[1],b=(0,c.TH)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{showFilter:p,setShowFilter:f,searchDoctor:v,setSearchDoctor:g}),(0,d.jsx)("div",{className:a,children:n>=992?r:o.cloneElement(r,{showFilter:p,setShowFilter:f,searchDoctor:v,setSearchDoctor:g})}),-1==b.pathname.search("bookAppointment")&&n>=992?(0,d.jsx)(u,{}):null,-1==b.pathname.search("bookAppointment")&&n<992?(0,d.jsx)(t.Z,{}):null]})}},58375:function(e,r,n){n.d(r,{Z:function(){return i}});n(72791);var s={signup_topSection:"SignupLayout_signup_topSection__qPX88",signup_div:"SignupLayout_signup_div__Kx25z"},o=(n(45102),n(81694)),t=n.n(o),a=n(80184);var i=function(e){var r=e.children;return t()(s.signup_form_login,"col-md-9"),(0,a.jsx)("div",{className:s.signup_topSection,children:(0,a.jsx)("div",{className:s.signup_div,children:(0,a.jsx)("div",{children:r})})})}},73424:function(e,r,n){n.d(r,{B:function(){return t}});var s=n(29439),o=n(72791),t=function(e){var r=(0,o.useState)(a()),n=(0,s.Z)(r,2),t=n[0],i=n[1];return(0,o.useEffect)((function(){function e(){i(a())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t},a=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}},81683:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});n(72791);var s=n(42026),o="Confirm_reset_form_align__Ys8Rr",t="Confirm_reset_header_align__HjPUY",a="Confirm_reset_input_field__wJX7P",i="Confirm_reset_form_error_msg__7jvb1",c="Confirm_reset_form_label__9VY1t",d="Confirm_signup_continue_btn__-nvMC",l="Confirm_signin_password_para__V9JV2",u=n(43360),m=n(58375),_=n(79271),p=n(2549),f=n(16030),h=n(92506),w=n(75630),v=n(80184);var g=function(){var e,r=(0,_.k6)(),n=(0,f.I0)(),s=null===(e=(0,_.TH)().state)||void 0===e?void 0:e.userId;return(0,v.jsx)(m.Z,{children:(0,v.jsx)(h.J9,{validate:function(e){var r={};return""===e.newPassword?r.newPassword="Password is required":e.newPassword.length<8&&(r.newPassword="A secure password consists of minimum 8 characters including 1 special character, 1 CAPITAL letter and 1 small letter"),""===e.confirmPassword?r.confirmPassword="Confirm Password is required":e.confirmPassword!=e.newPassword&&(r.confirmPassword="The passwords you entered are not matching. Please try again"),r},initialValues:{newPassword:"",confirmPassword:""},onSubmit:function(e){r.push({pathname:"/passwordchange"}),function(e){n((0,p.Z)({values:e,userId:s}))}(e)},children:function(e){var r=e.touched,n=e.errors,s=e.handleSubmit;return(0,v.jsxs)(w.Z,{className:o,onSubmit:s,children:[(0,v.jsx)("h2",{className:t,children:"Reset password"}),(0,v.jsxs)("div",{className:"form-group",children:[(0,v.jsx)("label",{className:c,children:"New Password"}),(0,v.jsx)("br",{}),(0,v.jsxs)("p",{children:[(0,v.jsx)(h.gN,{type:"password",name:"newPassword",className:a+" "+"".concat(r.newPassword&&n.newPassword?"is-invalid":""),placeholder:"Enter Password"}),(0,v.jsx)(h.Bc,{component:"div",name:"newPassword",className:i})]})]}),(0,v.jsxs)("div",{className:"form-group",children:[(0,v.jsx)("label",{className:c,children:"Confirm New Password"}),(0,v.jsx)("br",{}),(0,v.jsxs)("p",{children:[(0,v.jsx)(h.gN,{type:"password",name:"confirmPassword",className:a+" "+"".concat(r.confirmPassword&&n.confirmPassword?"is-invalid":""),placeholder:"Enter Password"}),(0,v.jsx)(h.Bc,{component:"div",name:"confirmPassword",className:i}),(0,v.jsx)("p",{className:l,children:"*Password Must Be 8 Characters Minimum"})]})]}),(0,v.jsx)("div",{className:"col-md-12",children:(0,v.jsx)(u.Z,{variant:"outline-secondary",className:d,type:"submit",disabled:Object.keys(n).length>0,children:"Continue"})})]})}})})};var b=function(){return(0,v.jsx)(s.default,{children:(0,v.jsx)(g,{})})}}}]);
//# sourceMappingURL=1683.91a5cf7e.chunk.js.map