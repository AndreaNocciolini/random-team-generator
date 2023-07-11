// Upscope configuration for isendu.com

  window.Upscope.__defaultConfiguration = {
  "beta": false,
  "teamDomain": "isendu.com",
  "showUpscopeLink": true,
  "showTerminateButton": true,
  "trackConsole": false,
  "allowRemoteConsole": false,
  "allowRemoteScroll": true,
  "allowRemoteClick": true,
  "allowRemoteType": true,
  "injectLookupCodeButton": false,
  "enableLookupCodeOnKey": true,
  "requireAuthorizationForSession": true,
  "showAgentRequestButton": "never",
  "collectHistory": false,
  "autoconnect": true,
  "allowAgentRedirect": true,
  "rewriteExternalLinks": false,
  "proxyEnabled": true,
  "apiKey": "JF39x4c4rS"
};
  window.Upscope.__defaultRegion = "eu-central";

  var scriptUrl = 'https://js.upscope.io/upscope-2.2.104.js';

  if ('noModule' in HTMLScriptElement.prototype && 'any' in Promise)
    scriptUrl = scriptUrl.replace(/\.js$/, '.es6.js');

  

  if (window.Upscope.addScript) {
    window.Upscope.addScript(scriptUrl);
  } else {
    (function(){
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.charset = 'utf-8';
      s.src = scriptUrl;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    })();
  }
