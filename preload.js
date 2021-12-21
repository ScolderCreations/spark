// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
/*
var view1 = document.getElementById("view1");
var box = document.getElementById("search");

view1.src = 'https://scoldercreations.github.io/home';
box.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      box.blur();
      if (box.value == "about:home") {
        view1.src = 'https://scoldercreations.github.io/home';
      } else {
        view1.src = String(box.value);
      }
    }
  });
  */