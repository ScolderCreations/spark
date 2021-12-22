var view1 = document.getElementById("view1");
var box = document.getElementById("search");
var windowTitle = document.getElementById("title");

function openpage(url, view) {
  var final = url
  if (!url.includes("://") && !url.includes(" ") && url.includes(".")) {
    box.value = "https://" + url;
    final = box.value
  } else if (!url.includes("://")) {
    box.value = "https://duckduckgo.com/?q=" + encodeURIComponent(url);
    final = box.value
  }
  view.src = String(final);
  //view1.loadURL(String(box.value));
}

function reloadView() {
  view1.reloadIgnoringCache();
}

view1.src = "https://scoldercreations.github.io/home";
view1.addEventListener("dom-ready", function () {
  //view1.loadURL('https://scoldercreations.github.io/home');
});
box.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    box.blur();
    openpage(box.value, view1);
  }
});
view1.addEventListener("did-stop-loading", function () {
  windowTitle.innerText = "Spark - " + view1.getTitle();
});
