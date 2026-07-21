// Mobile Screen
if (window.innerWidth < 992) {

    // Family Office Services link
    const familyToggle = document.querySelector(".submenu-toggle");

    // Family submenu
    const submenu = document.querySelector(".submenu");

    familyToggle.addEventListener("click", function(e){

        // Link open hone se rokta hai
        e.preventDefault();

        // Show / Hide submenu
        if(submenu.style.display === "block"){

            submenu.style.display = "none";

        }else{

            submenu.style.display = "block";

        }

    });

}