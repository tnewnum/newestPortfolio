let header = document.getElementById("myHeader");
let submit = document.getElementById("submit-btn")
let modal = document.getElementById("myModal")
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

submit.addEventListener("shown.bs.modal", function() {
     // Display the modal alert
    
})