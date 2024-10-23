function navbarBTN(event){
    document.getElementById("pm-navbar-dropdown").classList.toggle("show");
}

const dropdownBTN = document.getElementsByClassName("pm-navbar-btn")[0];
console.log(dropdownBTN);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.pm-navbar-btn-img')) {
        var dropdowns = document.getElementsByClassName("pm-navbar-dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


dropdownBTN.addEventListener("click", navbarBTN);