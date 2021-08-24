---
---
$(function() {
  $('#search-button').on('click', function() {
    return search();
  });

  $('#search-query').on('keyup', function() {
    return search();
  });

  function search() {
    var query   = $('#search-query').val();
    var result  = $('#search-results');
    var entries = $('#search-results .entries');

    if (!query.trim()) {
      result.hide();
      entries.empty();
    } else {
      var results = idx.search(query).slice(0, 100).map(function(result) {
        return docsMap[result.ref];
      });

      if (!results.length) {
        results = docsMap[query] ? [docsMap[query]] : [];
      }

      entries.empty();

      if (results.length) {
        results.forEach(function(page) {
          entries.append('<article>'+
          '  <h3>'+
          '    <a href="./'+page.kanji.charAt(0)+'/index.html">'+page.kanji+' '+page.keyword+'</a>'+
          '  </h3>'+
          '</article>');
        });
      } else {
        entries.append('<h4>Kanji not found :-(</h4>');
      }

      result.show();
    }
  }
});
