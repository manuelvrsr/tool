var getCollectionInfo = function (collection) {
    var apiUrl = 'https://www.loc.gov/search/?q' + collection + '/&fo=json';
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            return data;
          });
        } else {
          document.location.replace('./index.html');
        }
      });
    };
