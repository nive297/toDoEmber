!function() {
var advocately=window.advocately=window.advocately||[];if(!advocately.initialize)if(advocately.invoked)window.console&&window.console.error&&window.console.error("Advocately snippet included twice.");else{advocately.invoked=!0,advocately.methods=["identify","track","page","debug","survey"],advocately.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);return t.unshift(e),advocately.push(t),advocately}};for(var t=0;t<advocately.methods.length;t++){var e=advocately.methods[t];advocately[e]=advocately.factory(e)}advocately.load=function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)},advocately.load("https://d1m5z9tultw2jo.cloudfront.net/advocately.min.js")};

advocately.apiToken = "RF-x3eB1Lzfq-3ry8GsbLzn6izqc6nRF";
advocately.survey(1234, { // REPLACEME: Current user id
  name: "John Doe", // REPLACEME: Current user name
  email: "john@doe.com", // REPLACEME: Current user email
  created_at: 2017-12-31 // REPLACEME: Date when user was registered (YYYY-MM-DD)
});
}();
  

