var converter = new showdown.Converter();
converter.setOption('simplifiedAutoLink', 'true');
converter.setOption('tables', 'true');
var body_contents = document.getElementById("article-entry-ref").innerHTML;
var replacement_body_contents = converter.makeHtml(body_contents);
document.getElementById("article-entry-ref").innerHTML = replacement_body_contents;

// Bind all child elements
WAMediaBox.bindAll(document.querySelector("#post_gallery"));

// Translate - set before any binding
WAMediaBox.lang = {
  prev: "Previous",
  next: "Next",
  close: "Close",
  openInNew: "Open in new window"
};
