//Get tab links & tab Contents

var tabLinks = document.getElementsByClassName('tab-links'),
  tabContents = document.getElementsByClassName('tab-contents');

//on open Tab function call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove('active-link');
  }
  for (item of tabContents) {
    item.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

// Get side Menu
var sideMenu = document.getElementById('side-menu');

// on Open Menu function Call
function openMenu() {
  sideMenu.style.right = '0';
}

// on Close Menu function Call
function closeMenu() {
  sideMenu.style.right = '-200px';
}
