/**
 * Created by Aniket on 5/28/2016.
 */

alert("Welcome to login page");

function sample1(){

    var Name=document.fomr1.txt1.value;
    var pass=document.fomr1.txt2.value;


    if(Name=="test1"&&pass==123)
    {
        alert("You have successfully Login");
         document.write("<h1> <font color='#7fff00'> You Successfully Login </font></h1>");
        window.open("http://aniketbhavsar.info/");
    }
    else
    {
        alert("incorrect Login ID or Password");
    }

};
