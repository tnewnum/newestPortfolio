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

function showModal() {
    const name = document.getElementById('email').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;
    
    preventdefault ()

    if (name && email && query) {
        $('reg-modal').modal('show');
    }
}