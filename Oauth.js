    var scopes = 'https://www.googleapis.com/auth/plus.me';

    function handleClientLoad() {
      socket.emit('give apiKey');
      socket.on('return apiKey',function(data){
          gapi.client.setApiKey(data);
      });

      window.setTimeout(checkAuth,1);
    }
    function checkAuth() {
      socket.emit('give clientId');
      socket.on('return clientId',function(data){
        gapi.auth.authorize({client_id: data, scope: scopes, immediate: true}, handleAuthResult);
      });
    }
    function handleAuthResult(authResult) {
      var authorizeButton = document.querySelector('.authorize-button');
      if (authResult && !authResult.error) {
        authorizeButton.style.visibility = 'hidden';
        makeApiCall();
      } else {
        authorizeButton.style.visibility = '';
        authorizeButton.onclick = handleAuthClick;
      }
    }
    function handleAuthClick(event) {
      socket.emit('give clientId');
      socket.on('return clientId', function(data){
          gapi.auth.authorize({client_id: data, scope: scopes, immediate: false}, handleAuthResult);
      });
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
          var data = {name:resp.displayName,birthday:resp.birthday};
          socket.emit('give name and birthday',data);

        });
      });
    }
