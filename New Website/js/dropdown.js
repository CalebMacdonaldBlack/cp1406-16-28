/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function pause() {
    document.getElementById('sliding_img').style.animationPlayState=('paused');
}
function play() {
    document.getElementById('sliding_img').style.animationPlayState=('running');
}
function notice() {
    window.alert('Sorry for the inconvenience, but tickets are not yet available as of the moment')
}
function close_popUp() {
    document.getElementById('pop_up').style.display='none';
}
function show() {
    document.getElementById('pop_up').style.display='block';
}