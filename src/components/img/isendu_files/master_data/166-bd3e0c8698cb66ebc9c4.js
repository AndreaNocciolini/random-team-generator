(window.cbJsonP=window.cbJsonP||[]).push([[166],{402:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),o=n(9),s=n.n(o),r=n(25),c=n.n(r),l=n(10),u=n.n(l),h=n(2),p=n.n(h),f=n(5),v=n.n(f),d=(n(28),n(17)),g=[{name:"portal",actions:[{name:"logout",method:"post",endpoint:"/api/internal/ssp_users/logout",headers:{"X-Requested-With":"XMLHttpRequest"}}]},{name:"js_info",actions:[{name:"static",method:"get",headers:{"X-Requested-With":"XMLHttpRequest"},endpoint:function(){return"/api/internal/"+Object(d.d)()+"/retrieve_js_info"},static:!0},{name:"get",method:"get",headers:{"X-Requested-With":"XMLHttpRequest"},endpoint:function(){return"/api/internal/"+Object(d.d)()+"/retrieve_js_info"},static:!1}]},{name:"locale",actions:[{name:"retrieve",method:"get",headers:{"X-Requested-With":"XMLHttpRequest"},endpoint:function(t){return"/api/internal/cbjs/"+Object(d.d)()+"/translations?locale="+t.languageCode}}]}],m=n(12),_=n(45),C=n(23),j=(v()(b,[{key:"init",value:function(){return this.apiClient.addApis(g),this.hpData={},this.infoRetrievalCount=0,this.getInfo()}},{key:"getInfo",value:function(){var e=this;return this.info?u.a.resolve(this.info):5<=this.infoRetrievalCount?u.a.resolve({site:this.config.site}):(1<this.infoRetrievalCount?this.apiClient.js_info.get():this.apiClient.js_info.static()).then(function(t){return e.infoRetrievalCount=-1,(e.info=t).recaptcha_site_key&&(e.commMgr.recaptchaKey=t.recaptcha_site_key,e.commMgr.isGlobalRecaptcha=t.supported_global_recaptcha,e.commMgr.initialize()),t}).catch(function(t){return _.a.kvl({action:"retrieve_js_info_failed",info_retrieval_count:e.infoRetrievalCount},t),u.a.resolve({site:e.config.site})}).finally(function(){return e.infoRetrievalCount++})}},{key:"syncTranslations",value:function(t){Object(C.i)(t)}},{key:"getTranslations",value:function(t){var e=this,n=0<arguments.length&&void 0!==t?t:{},i=Object(C.h)(n.locale),a=n.languageCode,o=Object(C.e)();return i?o[i]?u.a.resolve(o[i]):this.apiClient.locale.retrieve({languageCode:a}).then(function(t){return e.syncTranslations(t),t}).catch(function(t){var e=new m.a(t);throw _.a.error(e),e}):u.a.resolve(o)}},{key:"getHpData",value:function(t){return t&&c()(this.hpData[t])?s()({},t,this.hpData[t]):t?{}:this.hpData}},{key:"portalLogout",value:function(){var t=this;return this.hpData.jwt?this.apiClient.portal.logout({},{token:this.hpData.jwt}).then(function(){return{success:!(t.hpData.jwt="")}}):u.a.resolve({success:!1})}},{key:"setHpData",value:function(e){var n=this;return a()(e).map(function(t){c()(e[t])&&(n.hpData[t]=e[t])}),u.a.resolve({acknowledged:!0})}}]),b);function b(t){p()(this,b),this.config={site:t.site,hostname:t.hostName,publishableKey:t.publishableKey},this.apiClient=t.apiClient,this.iframeClient=t.connectionClient,this.commMgr=t}e.default=j}}]);
//# sourceMappingURL=166-bd3e0c8698cb66ebc9c4.js.map