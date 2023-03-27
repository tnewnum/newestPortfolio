let header = document.getElementById("myHeader");
console.log(header)
let sticky = header.offsetTop;


window.onscroll = function() {
    scrollFunc()
};

function scrollFunc () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

$(document).ready(function() {
    // Add a click event listener to the button
    $("#submit-btn").on("click", function() {
        // Display the modal alert
        $("#myModal").css("display", "block");
    });

    // Add a click event listener to the OK button
    $("#ok-btn").on("click", function() {
        // Hide the modal alert
        $("#myModal").css("display", "none");
    });
});