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
    if (x==1) {
        document.getElementById('gallery_thumbnails_slavonicswoon').style.display = ('block');
        document.getElementById('gallery_thumbnails').style.display = ('none');
        document.getElementById('gallery_thumbnails_lastnight').style.display = ('none');
        document.getElementById('img').src = 'images/slavonicswoon/img1.jpg';
        document.getElementById('label').innerHTML =('Slavonic Swoon 2008');
        numofimages = 9;
        group = 'Images/slavonicswoon/img'
        document.getElementById(p3).style.opacity=1;
        document.getElementById(p2).style.opacity = .5;
        document.getElementById(p1).style.opacity = .5;

    }
    else if (x=2){
        document.getElementById('gallery_thumbnails_slavonicswoon').style.display = ('none');
        document.getElementById('gallery_thumbnails').style.display = ('block');
        document.getElementById('gallery_thumbnails_lastnight').style.display = ('none');
        document.getElementById('img').src = 'images/hotsummernight2008/img1.jpg';
        document.getElementById('label').innerHTML =('Hot Summer Night 2008');
        numofimages = 32;
        group = 'Images/hotsummernight2008/img'
        document.getElementById(p3).style.opacity = .5;
        document.getElementById(p2).style.opacity = .5;
        document.getElementById(p1).style.opacity = 1;
    }
    else {
        document.getElementById('gallery_thumbnails_slanovicswoon').style.display = ('none');
        document.getElementById('gallery_thumbnails').style.display = ('none');
        document.getElementById('gallery_thumbnails_lastnight').style.display = ('block');
        document.getElementById('img').src = 'images/lastnightofproms/img1.jpg';
        document.getElementById('label').innerHTML =('Last Night of the Proms 2009');
        numofimages = 27;
        group = 'Images/lastnightofproms/img'
        document.getElementById(p3).style.background = 'red';
        document.getElementById(p2).style.opacity = 1;
        document.getElementById(p1).style.opacity = .5;
    }
}

"Images/slavonicswoon/img"
gallery_thumbnails
gallery_thumbnails_lastnight
gallery_thumbnails_slavonicswoon