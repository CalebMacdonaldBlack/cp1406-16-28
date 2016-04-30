/**
 * Created by Meriam on 30-Apr-16.
 */

function people1(){
    document.getElementById('title').innerHTML = ('Our Special Guests');
    document.getElementById('life_members').style.display='none';
    document.getElementById('specialguests').style.display='block';
    document.getElementById('left_title').style.opacity=.3;
    document.getElementById('right_title').style.opacity=1;
}
function people2(){
    document.getElementById('title').innerHTML = ('Life Members');
    document.getElementById('life_members').style.display='block';
    document.getElementById('specialguests').style.display='none';
    document.getElementById('left_title').style.opacity=1;
    document.getElementById('right_title').style.opacity=.3;
}