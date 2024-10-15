function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.width === "0px" || menu.style.width === "") {
      menu.style.width = "300px";
    } else {
      menu.style.width = "0";
    }
  }
 