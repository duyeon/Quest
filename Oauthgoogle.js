 var sec = require('./userkey.json'); 
      var scopes = 'https://www.googleapis.com/auth/plus.me';

      function handleClientLoad() {
        gapi.client.setApiKey(sec.apiKey);
        window.setTimeout(checkAuth,1);
      }
      function checkAuth() {
        gapi.auth.authorize({client_id: sec.clientId, scope: scopes, immediate: true}, handleAuthResult);
      }
      function handleAuthResult(authResult) {
        var authorizeButton = document.querySelector('.authorize-button');
        if (authResult && !authResult.error) {
          authorizeButton.style.visibility = 'hidden';
          makeApiCallb} 
        else {
          authorizeButton.style.visibility = '';
          authorizeButton.onclick = handleAuthClick;
        }
      }
      function handleAuthClick(event) {
        gapi.auth.authorize({client_id: sec.clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
      }
      function makeApiCall() {
        gapi.client.load('plus', 'v1', function() {
          var request = gapi.client.plus.people.get({
            'userId': 'me',

          });
          request.execute(function(resp) {

            var name = document.createElement('h3');
            name.appendChild(document.createTextNode("User name : "+ resp.displayName));
            var birth = document.createElement('h4');
            birth.appendChild(document.createTextNode("User birthday : "+resp.birthday));
            document.querySelector('.content').appendChild(name);
            document.querySelector('.content').appendChild(birth);
            $.ajax({
              type:'post',
              url:'/save',
              data:{_name:resp.displayName,_birthday:resp.birthday},
              dataType:'text',
              cache:false
            });
          });
        });
      }