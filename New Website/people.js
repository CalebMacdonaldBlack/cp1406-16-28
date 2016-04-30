/**
 * Created by Meriam on 30-Apr-16.
 */
function people2(){
    document.getElementById('title').innerHTML = ('Life Members');
    document.getElementById('life_members').style.display='block';
    document.getElementById('specialguests').style.display='none';
}
function people1(){
    document.getElementById('title').innerHTML = ('Our Special Guests');
    document.getElementById('life_members').style.display='none';
    document.getElementById('specialguests').style.display='block';
}