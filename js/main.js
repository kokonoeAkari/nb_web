const dropdownBTN = document.getElementsByClassName("pm-navbar-btn")[0];
//console.log();

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
};

window.addEventListener("resize", function(){
    //console.log(window.innerWidth);
    if (window.innerWidth > 1200){
        var dropdowns = document.getElementsByClassName("pm-navbar-dropdown");
        //console.log(dropdowns);
        for (let i=0;i<dropdowns.length;i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

dropdownBTN.addEventListener(
    "click",
    function(){
        document.getElementById("pm-navbar-dropdown").classList.toggle("show");
    }
);