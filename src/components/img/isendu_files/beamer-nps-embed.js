var _BEAMER_NPS_BASE_URL="https://app.getbeamer.com/",_BEAMER_NPS_BACKEND_URL="https://backend.getbeamer.com/",_BEAMER_NPS_LAST_SHOWN="_BEAMER_NPS_LAST_SHOWN";Beamer.buildNPS=function(){if("undefined"===typeof Beamer.npsShown||!Beamer.npsShown){var a=Beamer.getCookie(_BEAMER_NPS_LAST_SHOWN+"_"+beamer_config.product_id);if("undefined"!==typeof a&&""!==a)try{if(a=parseInt(a),24>((new Date).getTime()-a)/1E3/60/60)return}catch(e){}a=encodeURIComponent(window.location.href);if("undefined"!=typeof beamer_config.product_id)var b=_BEAMER_NPS_BACKEND_URL+"checkNPSShow?url="+a+"&productId="+beamer_config.product_id;"undefined"!=typeof beamer_config.role?b+="&filters="+
encodeURIComponent(beamer_config.role):"undefined"!=typeof beamer_config.filter&&(b+="&filters="+encodeURIComponent(beamer_config.filter));(a=Beamer.getCookie(_BEAMER_USER_ID+"_"+beamer_config.product_id))&&(b+="&userId="+encodeURIComponent(a));"undefined"!=typeof beamer_config.user_id&&"user_id"!=beamer_config.user_id&&(b+="&customUserId="+encodeURIComponent(beamer_config.user_id));"undefined"!=typeof beamer_config.user_token&&"user_token"!=beamer_config.user_token&&(b+="&user_token="+encodeURIComponent(beamer_config.user_token));"undefined"!=typeof beamer_config.user_email&&"email"!=beamer_config.user_email&&(b+="&email="+encodeURIComponent(beamer_config.user_email));"undefined"!=typeof beamer_config.user_created_at?b+="&createdAt="+encodeURIComponent(beamer_config.user_created_at):(a=Beamer.getCookie(_BEAMER_FIRST_VISIT+"_"+beamer_config.product_id),"undefined"!==typeof a&&null!==a&&""!==a&&(b+="&createdAt="+encodeURIComponent(a)+"&createdAtCookie=true"));"undefined"!==typeof beamer_config.multi_user&&beamer_config.multi_user&&(b+="&multiUser=true");Beamer.hasNPSOpenHash()&&(b+="&hash=true");b+="&mobile="+Beamer.isMobile();Beamer.ajax(b,function(e){JSON.parse(e)?Beamer.initNPS():Beamer.initNPSRecheckTimeout()})}};Beamer.initNPS=function(a,b){if(!beamer_config.onNpsShow||!Beamer.isFunction(beamer_config.onNpsShow)||!1!==beamer_config.onNpsShow())if("undefined"===typeof Beamer.npsShown||!Beamer.npsShown){Beamer.setCookie(_BEAMER_NPS_LAST_SHOWN+"_"+beamer_config.product_id,(new Date).getTime(),300);var e=0,c=!1;"undefined"!==typeof a&&a?"undefined"!==typeof a.preview&&(c=a.preview,delete a.preview):(a={product_id:beamer_config.product_id,filter:beamer_config.filter,language:beamer_config.language,user_id:beamer_config.user_id,user_lastname:beamer_config.user_lastname,user_firstname:beamer_config.user_firstname,user_email:beamer_config.user_email,theme:beamer_config.theme,multi_user:beamer_config.multi_user,user_token:beamer_config.user_token},"undefined"!==typeof b&&b||(e=3E3));var d=!1;Beamer.appendCSS("beamerNPSCSS",_BEAMER_NPS_BASE_URL+"styles/NPSWidgetEmbed.css");Beamer.addNPSListener([{event:"showNPS",handler:function(){Beamer.showNPS(e,c);d=!0}}]);Beamer.appendNPSIframe(a,c,b);setTimeout(function(){d||Beamer.hideNPS()},1E4)}};Beamer.showNPS=function(a,b){"undefined"!==typeof Beamer.npsShown&&Beamer.npsShown||(a||(a=0),setTimeout(function(){Beamer.addClass("npsIframeContainer","active")},a),"undefined"!==typeof b&&b||(Beamer.npsShown=!0),"undefined"!==typeof Beamer.hideNPSTimeout&&clearTimeout(Beamer.hideNPSTimeout),Beamer.hideNPSTimeout=setTimeout(Beamer.hideNPS,36E5))};Beamer.hideNPS=function(){Beamer.removeClass("npsIframeContainer","active");setTimeout(function(){Beamer.forEachElement("npsIframeContainer",function(a){a.parentNode.removeChild(a)})},1E3);"undefined"!==typeof Beamer.hideNPSTimeout&&(clearTimeout(Beamer.hideNPSTimeout),delete Beamer.hideNPSTimeout);Beamer.npsShown=!1};Beamer.appendNPSIframe=function(a,b,e){var c=_BEAMER_NPS_BASE_URL+"npsWidget?productId="+a.product_id;"undefined"!=typeof a.role?c+="&filters="+encodeURIComponent(a.role):"undefined"!=typeof a.filter&&(c+="&filters="+encodeURIComponent(a.filter));a.language&&(c+="&language="+encodeURIComponent(a.language));var d=Beamer.getCookie(_BEAMER_USER_ID+"_"+a.product_id);if("undefined"===typeof d||!d)if(d=Beamer.getCookie(_BEAMER_USER_ID+"_"+a.product_id),null===d||""===d)d=Beamer.uuidv4(),Beamer.setCookie(_BEAMER_USER_ID+
"_"+a.product_id,d,300);c+="&userId="+encodeURIComponent(d);"undefined"!=typeof a.user_id&&"user_id"!=a.user_id&&(c+="&customUserId="+encodeURIComponent(a.user_id));"undefined"!=typeof a.user_token&&"user_token"!=a.user_token&&(c+="&user_token="+encodeURIComponent(a.user_token));"undefined"!=typeof a.user_lastname&&"lastname"!=a.user_lastname&&(c+="&lastname="+encodeURIComponent(a.user_lastname));"undefined"!=typeof a.user_firstname&&"firstname"!=a.user_firstname&&(c+="&firstname="+encodeURIComponent(a.user_firstname));"undefined"!=typeof a.user_email&&"email"!=a.user_email&&(c+="&email="+encodeURIComponent(a.user_email));a.theme&&(c+="&theme="+encodeURIComponent(a.theme));"undefined"!==typeof a.multi_user&&a.multi_user&&(c+="&multiUser=true");"undefined"!==typeof e&&(c+="&force="+encodeURIComponent(e));c="undefined"!==typeof b&&b?c+"&preview=true":Beamer.appendCustomParameters(c);c+="&url="+encodeURIComponent(window.location.href);"undefined"!==typeof Beamer.escapeHtml&&(c=Beamer.escapeHtml(c));a="<div id='npsIframeContainer' class='nps-iframe-container'><iframe allowfullscreen src='"+
c+"' id='beamerNPSWidget' data-powered-by='NPS powered by Beamer. https://www.getbeamer.com'></iframe>";NaN;Beamer.appendHtml(document.body,a)};Beamer.addNPSListener=function(a){Beamer.addEventListener(window,"message",function(b){if("https://app.getbeamer.com"===b.origin||"https://push.getbeamer.com"===b.origin||"https://backend.getbeamer.com"===b.origin){if(b.data&&"string"===typeof b.data&&"{"!==b.data[0]&&-1<b.data.indexOf(":"))try{var e=b.data.indexOf(":");var c=b.data.substring(0,e);var d=JSON.parse(b.data.substr(e+1))}catch(f){return}else c=b.data;if("hideNPS"==c){if(Beamer.hideNPS(),beamer_config.onNpsHide&&Beamer.isFunction(beamer_config.onNpsHide))beamer_config.onNpsHide(d)}else if("resizeNPS"==c)Beamer.resizeNPS(d);else if("npsScoreSent"==c){if(beamer_config.onNpsScore&&Beamer.isFunction(beamer_config.onNpsScore))beamer_config.onNpsScore(d)}else if("npsFeedbackSent"==c&&beamer_config.onNpsFeedback&&Beamer.isFunction(beamer_config.onNpsFeedback))beamer_config.onNpsFeedback(d);if("undefined"!==typeof a&&a)for(b=0;b<a.length;b++)if(a[b].event==c){a[b].handler();break}}})};Beamer.hasNPSOpenHash=function(){if(window.location.hash)for(var a=window.location.hash.substr(1).split("&"),b=0;b<a.length;b++)if("_bnps"===a[b]||"_bnps=true"===a[b])return!0;return!1};Beamer.resizeNPS=function(a){Beamer.forEachElement("beamerNPSWidget",function(b){b.style.height=a+"px"})};Beamer.initNPSRecheckTimeout=function(){setTimeout(function(){Beamer.onMouseActivity(Beamer.buildNPS)},864E5)};Beamer.onMouseActivity=function(a){var b=function(){Beamer.removeEventListener(document,"mousemove",b);a()};Beamer.addEventListener(document,"mousemove",b)};Beamer.buildNPS();