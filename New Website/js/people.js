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

function people_2(x) {
    if (x ==1){
        document.getElementById('special_guests').style.display='block';
        document.getElementById('life_members').style.display='none';
        document.getElementById('click_1').style.background='white';
        document.getElementById('click_2').style.background='gray';
        document.getElementById('click_2').style.opacity=.5;
        document.getElementById('click_1').style.opacity=1;
    }
    else {
        document.getElementById('special_guests').style.display='none';
        document.getElementById('life_members').style.display='block';
        document.getElementById('click_2').style.background='white';
        document.getElementById('click_1').style.background='gray';
        document.getElementById('click_1').style.opacity='.5';
        document.getElementById('click_2').style.opacity='1';
    }
}