/**
 * Created by Emerson on 01-May-16.
 */

var sequence = 1;
var numofimages = 9;
var group = 'Images/slavonicswoon/img';

function rotate(x) {
    var Image = document.getElementById('img');
    sequence = sequence + x;
    if(sequence > numofimages){sequence = 1;}
    if(sequence < 1){sequence = numofimages;}
    Image.src = group + sequence +".jpg";
}

function group_select(x){
    var slavonicswoon = document.getElementById('gallery_thumbnails_slavonicswoon');
    var hotsummer = document.getElementById('gallery_thumbnails_hotsummer');
    var lastnight = document.getElementById('gallery_thumbnails_lastnight');
    if (x==1) {
        slavonicswoon.style.display = ('block');
        hotsummer.style.display = ('none');
        lastnight.style.display = ('none');
        document.getElementById('img').src = 'images/slavonicswoon/img1.jpg';
        document.getElementById('label').innerHTML =('SLAVONIC SWOON 2008');
        numofimages = 9;
        group = 'Images/slavonicswoon/img';
        document.getElementById('p1').style.opacity = 1;
        document.getElementById('p2').style.opacity = .5;
        document.getElementById('p3').style.opacity = .5;

    }
    else if (x==2){
        slavonicswoon.style.display = ('none');
        hotsummer.style.display = ('block');
        lastnight.style.display = ('none');
        document.getElementById('img').src = 'images/hotsummernight2008/img1.jpg';
        document.getElementById('label').innerHTML =('HOT SUMMER NIGHT 2008');
        numofimages = 32;
        group = 'Images/hotsummernight2008/img';
        document.getElementById('p1').style.opacity = .5;
        document.getElementById('p2').style.opacity = 1;
        document.getElementById('p3').style.opacity = .5;
    }
    else {
        slavonicswoon.style.display = ('none');
        hotsummer.style.display = ('none');
        lastnight.style.display = ('block');
        document.getElementById('img').src = 'images/lastnightofproms/img1.jpg';
        document.getElementById('label').innerHTML =('LAST NIGHT OF THE PROMS 2009');
        numofimages = 27;
        group = 'Images/lastnightofproms/img';
        document.getElementById('p1').style.opacity = .5;
        document.getElementById('p2').style.opacity = .5;
        document.getElementById('p3').style.opacity = 1;
    }
}
function select(y,z) {
    var a = 'images/slavonicswoon/img';
    var b = 'images/hotsummernight2008/img';
    var c = 'images/lastnightofproms/img';
    var Image = document.getElementById('img');

    if (y==1) {
        Image.src=a+z+'.jpg';
    } else if(y==2){
        Image.src=b+z+'.jpg';
    } else {
        Image.src=c+z+'.jpg';
    }
}

"Images/slavonicswoon/img"
gallery_thumbnails
gallery_thumbnails_lastnight
gallery_thumbnails_slavonicswoon