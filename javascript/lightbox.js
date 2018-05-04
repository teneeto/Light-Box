function tlGenHeader(theme){
  var tleParent = "<header id='tleparentmain'>";
  var tleChild1 = "<div id='tlechild1'> LIGHT BOX PROJECT </div>";
  var tleChild2 = "<div id='tlechild2'><ul><li><input type='button' value='show' onclick='showLightBox();'/></li>";
  tleChild2 += "<li><input type = 'button' value = 'close' onclick = 'closeLightBox();'/></li></ul>";
  var mother = "</header>";

  tleParent += tleChild1;
  tleParent += tleChild2;
  tleParent += mother;

  document.writeln(tleParent);
  document.getElementById("tleparentmain").style.backgroundColor =  theme;

}

function tlGenLightBox(theme){
  var tlLightBox = "<div id='tllightboxmain'><div id='tllightboxform'><input id='closebtn' type='button' value='&times;' onclick='closeLightBox();'/>This is a lightbox</div></div>";
  document.writeln(tlLightBox);
  document.getElementById("tllightboxmain").style.backgroundColor = theme;
  document.getElementById("tllightboxmain").style.display =  "none";
}

function showLightBox(){
  document.getElementById('tllightboxmain').style.display = "block";

}
function closeLightBox(){
  document.getElementById('tllightboxmain').style.display = "none";

}
