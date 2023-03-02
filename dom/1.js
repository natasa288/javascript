
console.log("x=", div);

var y = document.createElement("h1");
y.innerHTML = "ovo je nas header";

//1
var div = document.getElementsByClassName("description")[0];
div.parentNode.insertBefore(y, div);

//2
var divInfo = document.createElement("div");
divInfo.className = "info";

var foot = document.getElementById("footer");
foot.parentNode.insertBefore(divInfo, div);

const footerNode = getElementById ("footer");
const ul = footerNode.getElementsByTagName("ul")[0];

for(let i = 3; i < 6; i++){
    var listViewItem = document.createElement("li");
    listViewItem.appendChild(document.createTextNode(i));
    ul.appendChild(listViewItem);
}