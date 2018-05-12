function convertRad(){
  var radius = document.getElementById("radius").value;
  console.log(radius.substr(0,1));
  if (radius.substr(0,1) === "-"){
    sendError();
  }
  else{
    radius = Number(radius);
    var volume = ((4/3) * Math.PI * (radius * radius * radius));

    sendToHTML(volume);
  }
}
function sendToHTML(volume){
  var parent = document.getElementById('inputs');
  var child = document.getElementById('volume');
  var replacement = document.createElement("p");
  var node = document.createTextNode(volume.toFixed(3));

  replacement.setAttribute("id", "volume");

  replacement.appendChild(node);
  parent.replaceChild(replacement, child);
}
function sendError(){
  var parent = document.getElementById('inputs');
  var child = document.getElementById('volume');
  var replacement = document.createElement("p");
  var node = document.createTextNode("negative numbers are unable to be calcuated.");

  replacement.setAttribute("id", "volume");

  replacement.appendChild(node);
  parent.replaceChild(replacement, child);
}
