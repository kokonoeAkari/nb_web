const dropdownBTN = document.getElementById("pm-navbar-btn");
console.log(dropdownBTN);
const dropexam = document.getElementById("examBTN");

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.pm-navbar-btn-img') && !event.target.matches('#examBTN') && !event.target.matches('#pm-navbar-dropdown') && !event.target.matches('#pm-navbar-nav-dropdown-item-dropdown') && !event.target.matches('#pm-navbar-dropdown-title')) {
        var dropdowns = document.getElementsByClassName("pm-navbar-dropdown");
        var examdrop = document.getElementsByClassName("pm-navbar-nav-dropdown-item-dropdown");
        document.querySelector(".pm-navbar-dropdown").classList.remove('open');
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        for (let i = 0; i < examdrop.length; i++) {
            var openDropdown = examdrop[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

window.addEventListener("resize", function () {
    //console.log(window.innerWidth);
    if (window.innerWidth > 935) {
        var dropdowns = document.getElementsByClassName("pm-navbar-dropdown");
        var examdrop = document.getElementsByClassName("pm-navbar-nav-dropdown-item-dropdown");
        document.querySelector(".pm-navbar-dropdown").classList.remove('open');
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                
            }
        }
        for (let i = 0; i < examdrop.length; i++) {
            var openDropdown = examdrop[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

dropdownBTN.addEventListener(
    "click",
    function () {
        document.getElementById("pm-navbar-dropdown").classList.add("open");
        document.getElementById("pm-navbar-nav-dropdown-item-dropdown").classList.remove("show");
    }
);

dropexam.addEventListener(
    "click",
    function () {
        document.getElementById("pm-navbar-nav-dropdown-item-dropdown").classList.toggle("show");
    }
);