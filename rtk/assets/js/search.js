---
---
var docs =
[
{% for post in site.pages %}
{% if post.layout == 'kanji' or post.layout == 'kanji-remain' %}
  {% include post.json %},
{% endif %}  
{% endfor %}
];

var docsMap = {}

// init lunr
var idx = lunr(function () {
  this.ref('kanji')
  this.field('keyword', 10);
  this.field('elements');
});
// add each document to be index
docs.forEach(function(doc) {
  idx.add(doc);
  docsMap[doc.kanji] = doc;
})
