
function inject (data) {
  var island = document.createElement('script');
  island.setAttribute('type', 'application/ld+json');
  island.textContent = JSON.stringify(data);
  document.body.appendChild(island);
}

(function () {
  var data = {
        '@context': 'http://schema.org/',
        '@type': 'ScholarlyArticle',
        author: {
          '@type':  'Person',
          '@id':  'http://berjon.com/',
          givenName: 'Robin',
          familyName: 'Berjon',
        },
        about: ['json-ld']
      }
  ;
  inject(data);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'billie.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) return;
    inject(JSON.parse(xhr.responseText));
  };
  xhr.send();
})();
