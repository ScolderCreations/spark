
var view1 = document.getElementById("view1");
var box = document.getElementById("search");
box.value = ""
view1.loadURL("file://" + window.box.baseURI.replace("index.html", "") + "/src/default.html");
box.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      box.blur();
      if (box.value == "about:home") {
        view1.loadURL("file://" + window.box.baseURI.replace("index.html", "") + "/src/default.html");
      } else {
        view1.loadURL(String(box.value));
      }
    }
  });

