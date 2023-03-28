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

