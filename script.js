  var tab = document.getElementById("pirmas");
  tab.style.display= "flex";
  function changeHeader(x, name){
    var tabs =document.getElementsByClassName("tab-content");
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      buttons[i].classList.remove("tabs-button-active");
    }
  var tab = document.getElementById(name);
  tab.style.display= "flex";
  x.currentTarget.classList.add("tabs-button-active");
  // window.setTimeout(changeHeader, 10, x, name);
}
