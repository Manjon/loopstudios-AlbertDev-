document.addEventListener("DOMContentLoaded", function(event) {
    var menu = document.getElementById("menu");
    var close = document.getElementById("close");
    var mobile = document.querySelector(".menu-mobile");
    menu.addEventListener("click",function(){
        mobile.classList.toggle("openmenumobile");
    });
    close.addEventListener("click",function(){
        mobile.classList.remove("openmenumobile");
    });
  });