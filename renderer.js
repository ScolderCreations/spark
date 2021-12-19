const view1 = document.getElementById("view1")
const box = document.getElementById("search")

box.addEventListener("keypress", (e) => {
    var result = fetch(box).then(res => {
        return result
    })
    
})
view1.src = "file://" + __dirname + "/src/current/index.html"
