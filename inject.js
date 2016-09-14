
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
    , island = document.createElement('script')
  ;
  setTimeout(
    function () {
      island.setAttribute('type', 'application/ld+json');
      island.textContent = JSON.stringify(data);
      document.body.appendChild(island);
    },
    5000
  );
})();
