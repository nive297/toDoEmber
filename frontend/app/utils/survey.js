import Ember from 'ember';

const {
  get
} = Ember;

export default function(config){

  // Following snippet is fetched from advocate.ly
  !function() {
    var advocately=window.advocately=window.advocately||[];if(!advocately.initialize)if(advocately.invoked)window.console&&window.console.error&&window.console.error("Advocately snippet included twice.");else{advocately.invoked=!0,advocately.methods=["identify","track","page","debug","survey"],advocately.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);return t.unshift(e),advocately.push(t),advocately}};for(var t=0;t<advocately.methods.length;t++){var e=advocately.methods[t];advocately[e]=advocately.factory(e)}advocately.load=function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)},advocately.load("https://d1m5z9tultw2jo.cloudfront.net/advocately.min.js")};

    advocately.apiToken = config.advocately.apiToken;
    advocately.survey("taylor_s@gmail.com", { 
      name: "Taylor S",
      email: "taylor_s@gmail.com",
      created_at: "2012-11-10",
      address:"Los Angeles",
      plan: "Premium",
      subscription_id: 125,
      company:"Sony",
      agents: 15
    });
  }();
  // End of advocate.ly SNIPPET
}
