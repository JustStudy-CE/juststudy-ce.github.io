(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a167:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("CloseButton",{attrs:{"is-back":!e.isSuccess},on:{click:e.back}}),i("div",{staticClass:"popup-header"},[e._v("Sign in")]),i("div",{staticClass:"content"},[i("transition",{attrs:{name:"login-transition",mode:"out-in"}},[e.isStep("chooser")?i("div",{staticClass:"step"},[i("div",{staticClass:"group text-center"},[e._v("\n          Use your existing account or set up a new one using your e‑mail address.\n        ")]),i("div",{staticClass:"group text-center"},[e._v("\n          By signing in you accept our "),i("span",{staticClass:"privacy-policy"},[i("a",{attrs:{href:"https://www.iubenda.com/privacy-policy/8201056",target:"_blank",rel:"noopener noreferrer"}},[e._v("Privacy Policy")])]),e._v(".\n        ")]),i("div",{staticClass:"button-group"},[i("div",{staticClass:"popup-button login-google",on:{click:e.loginGoogle}},[i("span",{staticClass:"label"},[e._v("Google")])]),i("div",{staticClass:"popup-button login-facebook",on:{click:e.loginFacebook}},[i("span",{staticClass:"label"},[e._v("Facebook")])]),i("div",{staticClass:"popup-button login-mail",on:{click:e.loginMail}},[i("span",{staticClass:"label"},[e._v("E-mail")])])])]):e.isStep("mail")?i("mail-login",{ref:"mailFlow"}):e.isStep("success")?i("div",{staticClass:"step"},[i("div",{staticClass:"text-center bold group"},[e._v("Signed in successfully.")]),e.shouldShowNewsletterOptin?e._e():i("div",{staticClass:"text-center group"},[e._v("Now onwards! Discover new worlds!")]),e.shouldShowNewsletterOptin?i("div",[i("div",{staticClass:"group text-center"},[e._v("\n            While you're here, would you like to receive email notifications when we release updates?\n          ")]),i("div",{staticClass:"group flex-row flex-justify-content-center"},[i("div",{staticClass:"flip-switch newsletter-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.joinNewsletter,expression:"joinNewsletter"}],attrs:{id:"newsletterCheckbox",type:"checkbox"},domProps:{checked:Array.isArray(e.joinNewsletter)?e._i(e.joinNewsletter,null)>-1:e.joinNewsletter},on:{change:function(t){var i=e.joinNewsletter,s=t.target,n=!!s.checked;if(Array.isArray(i)){var r=null,o=e._i(i,r);s.checked?o<0&&(e.joinNewsletter=i.concat([r])):o>-1&&(e.joinNewsletter=i.slice(0,o).concat(i.slice(o+1)))}else e.joinNewsletter=n}}}),i("label",{attrs:{for:"newsletterCheckbox"}})]),i("label",{attrs:{for:"newsletterCheckbox"}},[e._v("join Little Alchemy newsletter")])])]):e._e(),i("div",{staticClass:"group"},[i("div",{staticClass:"popup-button",on:{click:e.hide}},[i("span",{staticClass:"label"},[e._v("continue")])])])]):e._e()],1)],1)],1)},n=[],r=i("9ab4"),o=i("6e95"),a=i("5c57"),c=i("d257"),l=i("b2eb"),u=i("1663"),h=i("da33"),p=i("7897"),d="newsletter",v="https://us-central1-little-alchemy-2.cloudfunctions.net/joinNewsletter",b="https://us-central1-little-alchemy-2.cloudfunctions.net/isSubscribed",m=function(){function e(){0}return e.prototype.join=function(e){return Object(r["b"])(this,void 0,void 0,function(){var t;return Object(r["d"])(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,Object(c["u"])(v,{email:e})];case 1:return i.sent(),this.updateStorage(e),[3,3];case 2:throw t=i.sent(),new Error(t);case 3:return[2]}})})},e.prototype.updateStorage=function(e){Object(p["b"])(d,e)},e.prototype.hasJoined=function(e){return Object(r["b"])(this,void 0,void 0,function(){var t;return Object(r["d"])(this,function(i){switch(i.label){case 0:return this.hasJoinedLocally(e)?[2,!0]:[4,this.hasSubscribed(e)];case 1:return t=i.sent(),[2,t]}})})},e.prototype.hasJoinedLocally=function(e){var t=Object(p["a"])(d);return null!==t&&t===e},e.prototype.hasSubscribed=function(e){return Object(r["b"])(this,void 0,Promise,function(){var t,i,s;return Object(r["d"])(this,function(n){switch(n.label){case 0:t=b+"?email="+e,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,Object(c["g"])(t)];case 2:return i=n.sent(),s=!["Email not passed","Email does not exist in list"].includes(i),[2,s];case 3:return n.sent(),[2,!1];case 4:return[2]}})})},e}(),f=new m,w=i("437d"),g=i("e879"),y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("transition",{attrs:{name:"login-transition",mode:"out-in"},on:{"after-leave":e.afterLeave}},["mail"===e.step?i("div",{staticClass:"step"},[i("div",{staticClass:"error-container",class:e.errorClasses},[i("div",[e._v(e._s(e.error))])]),i("label",[i("div",{staticClass:"popup-input-label"},[e._v("e-mail address")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{type:"email",name:"mail",autofocus:""},domProps:{value:e.mail},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.mailSubmit(t)},input:function(t){t.target.composing||(e.mail=t.target.value)}}})]),e.isLogin||e.isSignup?i("label",[i("div",{staticClass:"popup-input-label"},[e._v(e._s(e.isLogin?"password":"new password"))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.mailSubmit(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}})]):e._e(),e.isSignup?i("div",[e._v("\n        By clicking the 'register' button, you indicate your agreement with our "),i("a",{staticClass:"link",attrs:{href:"https://www.iubenda.com/privacy-policy/8201056",target:"_blank",rel:"noopener noreferrer"}},[e._v("Privacy Policy")]),e._v(".\n      ")]):e._e(),i("div",{staticClass:"popup-button width-200",on:{click:e.mailSubmit}},[e.isCheck?i("div",{staticClass:"label"},[e._v("next")]):e._e(),e.isSignup?i("div",{staticClass:"label"},[e._v("register")]):e._e(),e.isLogin?i("div",{staticClass:"label"},[e._v("sign in")]):e._e()]),e.isLogin?i("div",{staticClass:"troubles-signing-in",on:{click:function(t){return e.showNext("recover")}}},[e._v("\n        Troubles signing in?\n      ")]):e._e()]):e._e(),"recover"===e.step?i("div",{staticClass:"step text-center"},[i("div",{staticClass:"error-container",class:e.errorClasses},[i("div",[e._v(e._s(e.error))])]),i("div",{staticClass:"group"},[e._v("You'll get an email with instructions on how to recover your password.")]),i("label",[i("div",{staticClass:"popup-input-label"},[e._v("e-mail address")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{type:"email",name:"mail"},domProps:{value:e.mail},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.recoverSubmit(t)},input:function(t){t.target.composing||(e.mail=t.target.value)}}})]),i("div",{staticClass:"popup-button width-200",on:{click:e.recoverSubmit}},[i("div",{staticClass:"label"},[e._v("recover")])])]):e._e(),"recoverSuccess"===e.step?i("div",{staticClass:"step text-center"},[e._v("\n      An e-mail with the recovery instructions was sent to your email address.\n    ")]):e._e()])],1)},_=[],k=4e3,C=o["a"].extend({name:"mail-login",data:function(){return{step:"mail",flow:"check",mail:"",password:"",error:"",errorVisible:!1,nextStep:""}},computed:{isCheck:function(){return"check"===this.flow},isSignup:function(){return"signup"===this.flow},isLogin:function(){return"password"===this.flow},errorClasses:function(){return{"js-visible":this.errorVisible}}},mounted:function(){this.handleError=this.handleError.bind(this)},methods:{mailSubmit:function(){this.errorVisible=!1;var e={mail:this.mail,password:this.password};this.isCheck?this.checkProvider():this.isSignup?h["a"].mailSignup(e).catch(this.handleError):h["a"].mailLogin(e).catch(this.handleError)},checkProvider:function(){return Object(r["b"])(this,void 0,void 0,function(){var e,t;return Object(r["d"])(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,h["a"].mailCheckProviders(this.mail)];case 1:return e=i.sent(),e?(this.flow=e,this.showNext("mail"),[3,3]):(this.hide(),[2]);case 2:return t=i.sent(),this.handleError(t),[3,3];case 3:return[2]}})})},recoverSubmit:function(){return Object(r["b"])(this,void 0,void 0,function(){var e;return Object(r["d"])(this,function(t){switch(t.label){case 0:this.errorVisible=!1,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,h["a"].mailReset(this.mail)];case 2:return t.sent(),this.showNext("recoverSuccess"),[3,4];case 3:return e=t.sent(),this.handleError(e),[3,4];case 4:return[2]}})})},handleError:function(e){return Object(r["b"])(this,void 0,void 0,function(){return Object(r["d"])(this,function(t){switch(t.label){case 0:return this.error=e.message,this.errorVisible=!0,[4,Object(c["c"])(k)];case 1:return t.sent(),this.errorVisible=!1,[2]}})})},afterLeave:function(){var e=this;this.step=""+this.nextStep,this.nextStep="",this.$nextTick(function(){e.$refs.password&&e.$refs.password.focus()})},showNext:function(e){this.step="",this.nextStep=e},back:function(){return"mail"===this.step?!this.isCheck&&(this.flow="check",this.showNext("mail"),!0):"recover"===this.step?(this.showNext("mail"),!0):"recoverSuccess"===this.step&&(this.flow="password",this.showNext("mail"),!0)},hide:function(){this.$store.dispatch("popupHide",void 0),this.reset()},reset:function(){return Object(r["b"])(this,void 0,void 0,function(){return Object(r["d"])(this,function(e){switch(e.label){case 0:return[4,Object(c["c"])(2*l["DELAY"])];case 1:return e.sent(),this.mail="",this.password="",this.errorVisible=!1,this.error="",this.flow="check",this.step="mail",[2]}})})}}}),j=C,S=i("2877"),x=Object(S["a"])(j,y,_,!1,null,null,null);x.options.__file="mail.vue";var N=x.exports,O=!1,E=o["a"].extend({name:"login-popup",components:{BasePopup:w["a"],CloseButton:g["a"],MailLogin:N},data:function(){return{step:"chooser",joinNewsletter:O,hasJoined:null}},computed:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["isPopupWithNameActive","isLoggedIn","user"])),{name:function(){return l["LOGIN"]},isLoginActive:function(){return this.isPopupWithNameActive(l["LOGIN"])},isSuccess:function(){return"success"===this.step},userEmail:function(){return this.user?this.user.email:null},hasJoinedNewsletter:function(){return!!this.hasJoined},shouldShowNewsletterOptin:function(){return!!this.userEmail&&null!==this.hasJoined&&!this.hasJoinedNewsletter}}),mounted:function(){var e=this;u["a"].on("POPUP_HIDE",function(){e.isLoginActive&&(e.$refs.mailFlow&&e.$refs.mailFlow.reset(),e.handleNewsletter(),e.reset())})},watch:{isLoggedIn:function(e){e&&this.isLoginActive&&(this.step="success")},userEmail:function(e){e&&this.fetchNewsletterStatus()}},methods:{isStep:function(e){return this.step===e},loginGoogle:function(){h["a"].login("google")},loginFacebook:function(){h["a"].login("facebook")},loginMail:function(){this.step="mail"},reset:function(){return Object(r["b"])(this,void 0,void 0,function(){return Object(r["d"])(this,function(e){switch(e.label){case 0:return[4,Object(c["c"])(l["HIDE_DURATION"])];case 1:return e.sent(),this.step="chooser",this.joinNewsletter=O,this.hasJoined=null,[2]}})})},back:function(){if(this.isStep("success"))this.hide();else if(this.isStep("chooser"))this.hide();else{var e=this.$refs.mailFlow.back();if(e)return;this.step="chooser"}},hide:function(){this.reset(),this.isSuccess?this.$store.dispatch("popupHide",void 0):this.$store.dispatch("popupShowNext",{name:l["SETTINGS"]})},fetchNewsletterStatus:function(){return Object(r["b"])(this,void 0,void 0,function(){var e;return Object(r["d"])(this,function(t){switch(t.label){case 0:return this.userEmail?[4,f.hasJoined(this.userEmail)]:[2];case 1:return e=t.sent(),this.hasJoined=e,[2]}})})},handleNewsletter:function(){this.joinNewsletter&&this.userEmail&&f.join(this.userEmail)}}}),L=E,P=Object(S["a"])(L,s,n,!1,null,null,null);P.options.__file="index.vue";t["default"]=P.exports}}]);
//# sourceMappingURL=login.6184de67.js.map