
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
      }
    , island = document.createElement('script')
  ;
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(data);
  document.body.appendChild(script);
})();
