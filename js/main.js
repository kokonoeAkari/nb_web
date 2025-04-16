const dropdownBTN = document.getElementsByClassName("pm-navbar-btn")[0];
const dropexam = document.getElementById("examBTN");

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.pm-navbar-btn-img') && !event.target.matches('#examBTN')) {
        var dropdowns = document.getElementsByClassName("pm-navbar-dropdown");
        var examdrop = document.getElementsByClassName("pm-navbar-nav-dropdown-item-dropdown");
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
    if (window.innerWidth > 768) {
        var dropdowns = document.getElementsByClassName("pm-navbar-dropdown");
        var examdrop = document.getElementsByClassName("pm-navbar-nav-dropdown-item-dropdown");
        //console.log(dropdowns);
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
        document.getElementById("pm-navbar-dropdown").classList.toggle("show");
        document.getElementById("pm-navbar-nav-dropdown-item-dropdown").classList.remove("show");
    }
);

dropexam.addEventListener(
    "click",
    function () {
        document.getElementById("pm-navbar-nav-dropdown-item-dropdown").classList.toggle("show");
        document.getElementById("examImg").classList.toggle("rotat");
    }
);